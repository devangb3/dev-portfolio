---
id: grok-build-context-management
title: How Grok Build Manages Context
publishedAt: 2026-07-16
kicker: Context Management
readTime: 7 min read
excerpt: "Context management is one of the hardest parts of building reliable coding agents. I went through some of the techniques Grok Build uses for context management and wrote down what I found interesting:"
topics: Coding Agents, Context, Grok Build
sourceUrl: https://x.com/DevangBorkar/status/2077924752573018167
---

Context management is one of the hardest parts of building reliable coding agents. I went through some of the techniques [Grok Build](https://github.com/xai-org/grok-build) uses for context management and wrote down what I found interesting:

This analysis is pinned to Grok Build's [first public commit](https://github.com/xai-org/grok-build/commit/c1b5909ec707c069f1d21a93917af044e71da0d7).

## 1) Keeping the Prompt Stable for Better KV Cache Reuse

When the conversation approaches its context threshold, the harness asks the model to compact the session. Tool use is [disabled](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-shell/src/session/helpers/session_compact.rs#L328-L376) for this summarization call, but the normal tool schemas are still included. Initially this may seem wasteful but the reason is prefix stability. Keeping the schemas in allows the inference engine to reuse the cached prefix. The harness explicitly sets `tool_choice: none`.
Another place where we see KV cache reuse being prioritized is when the harness does not eagerly remove older images just because they are expensive. It keeps them in the request prefix until the serialized conversation approaches the 50 MiB request limit. At 47 MiB, the harness [begins evicting](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-chat-state/src/actor/request_builder.rs#L246-L259) the oldest images from a copy of the request until the body is back down to 25 MiB.

## 2) What Grok Build Keeps After Compaction

After compaction, Grok Build uses a hybrid approach where it starts off the new session with a [semantic summary](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-shell/src/session/compaction.rs#L1495-L1514) of the earlier conversation plus the operational state needed to keep working.
An LLM produces the [handoff summary](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-shell/src/session/helpers/session_compact.rs#L138-L180), aiming for a few thousand words consisting of the decisions, discoveries, constraints, and progress made in the earlier discussion.
But a summarizer could omit important information about the working context so Grok Build therefore [reconstructs](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-chat-state/src/compaction_utils.rs#L534-L612) important runtime information separately, including:

- files edited during the session
- active background commands
- active subagents
- active TODOs
- the last user query (anchors what the user actually wants now)

The rebuilt context also restores bootstrap and project instructions and may include [connected MCP servers](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-shell/src/session/compaction.rs#L1205-L1514), skills, plan-mode state, and relevant memory.
This is different from other harnesses such as:

- Codex: [local compaction](https://github.com/openai/codex/blob/315195492c80fdade38e917c18f9584efd599304/codex-rs/core/src/compact.rs#L503-L660) includes exact recent real user messages up to 20k estimated tokens. [Remote Compaction V2](https://github.com/openai/codex/blob/315195492c80fdade38e917c18f9584efd599304/codex-rs/core/src/compact_remote_v2.rs#L52-L54) retains eligible user and hook messages up to 64k tokens.
- OpenCode: [retains](https://github.com/anomalyco/opencode/blob/08fb47373509ba64b13441061314eeacf4264f51/packages/opencode/src/session/compaction.ts#L193-L238) a recent tail that can contain assistant messages and tool results.

The tradeoff here is keeping an exact tail preserves exact wording and recent details, but it also carries forward more context. Reconstructing state produces a cleaner handoff, but depends more heavily on the quality of the summary and the completeness of the runtime data.

## 3) Estimating Context Before It Breaks

A harness should ideally compact before the provider returns a context-length error. To do that, it needs a reasonable estimate of how full the context window is.
Grok Build calculates this using:
[Preflight estimate](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-chat-state/src/actor/mutations.rs#L112-L128) = last provider-reported total + local estimate of non-assistant items added since then

The provider-reported token total becomes the *anchor*. After that response, the harness locally estimates the new content added to the conversation, such as user prompts, tool results, and injected hook context.

Using:
[Local estimate](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-token-estimation/src/lib.rs#L1-L33) = UTF-8 text bytes / 4 + number of images × 765

When the next provider response arrives, its reported total becomes the new *anchor*, and the local delta becomes 0.
Even though the bytes/4 estimate is not exact, it helps the harness avoid sending an over-limit request, reducing the risk of context-length errors.

## 4) Separating Human Intent from Runtime Instructions

Model request histories can contain system, user, assistant, tool, reasoning, and provider-specific items. In Grok Build, a `UserItem` has optional [`SyntheticReason`](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-sampling-types/src/conversation.rs#L187-L215) metadata when its content was injected by the harness rather than written by a human.

An agent harness often needs to inject reminders and runtime context into the conversation. For example, while the agent is in Plan Mode, it may receive a user-shaped message saying not to modify code. That instruction is important, but it is not the same kind of thing as a human saying, “Fix the OAuth bug.”

The model does not directly see the `SyntheticReason` enum; it [sees](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-sampling-types/src/conversation.rs#L1691-L1737) an ordinary user-role message whose text is framed as runtime context, with `<system-reminder>` tags which helps the model distinguish the actual request from constraints. This distinction also helps harness-level features such as compaction boundaries, memory-query construction, prompt counts, and rewind.

## 5) Turning Past Sessions into Long-Term Memory

Grok Build has a durable memory-management system implemented through [Dream](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-pager/docs/user-guide/13-memory.md#L225-L246), which turns persisted session logs into semantic memories. The goal is to preserve decisions, rationale, architecture, preferences, and useful problem/solution pairs across user sessions.
Dream can be run [manually with `/dream`](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-pager/docs/user-guide/13-memory.md#L225-L246). Automatic checks happen at the end of a session by default, and periodic background checks can also be configured.
When an older memory artifact already exists, the model is asked to merge related facts and [resolve contradictions](https://github.com/xai-org/grok-build/blob/c1b5909ec707c069f1d21a93917af044e71da0d7/crates/codegen/xai-grok-memory/src/dream.rs#L88-L110) in favor of newer information.
Codex has a similar [two-phase memory pipeline](https://github.com/openai/codex/blob/315195492c80fdade38e917c18f9584efd599304/codex-rs/memories/README.md#L29-L81): it extracts structured memories from eligible rollouts asynchronously, then uses a coordinated consolidation agent when an eligible root session begins. [OpenCode](https://github.com/anomalyco/opencode), at least in its current built-in form, does not offer an equivalent cross-session consolidation pipeline.

## Conclusion

When building on top of LLMs, one of the biggest factors we can control is what goes into the context window. Even as the max context windows keep growing, we still need to choose carefully what information to include. Simply adding more context can lead to [context rot](https://www.trychroma.com/research/context-rot), introduce noise, distract the model from what matters, and increase token usage

Going through the Grok Build codebase was an interesting learning experience, especially seeing the practical engineering decisions behind its context management. Thanks to the xAI team for publishing the [Grok Build source](https://github.com/xai-org/grok-build). Open source is the way forward for building better agents.
