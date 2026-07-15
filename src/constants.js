import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import LeetCodeIcon from './components/LeetCodeIcon';

export const projects = [
  {
    id: "pilotcrew-gen-eval",
    title: "Agent Optimizer - Evaluation Platform",
    description:
      "Built an evaluation platform for testing and improving LLM agent reliability across coding agents, RAG workflows, tool use, and iterative prompt-optimization loops.",
    technologies: ["Python", "MongoDB", "LLM Evaluations", "Prompt Optimization", "OpenRouter", "Synthetic Environments", "Agentic Workflows"],
    highlights: [
      "Built repeatable evaluation infrastructure with structured run tracking, artifact export, and failure-mode reporting across agent runs.",
      "Added runner support across duel, RAG, interactive tool-use, BrowseComp, MultiChallenge, tau2, coding-agent, and SWE-bench style workflows.",
      "Implemented deterministic gates, tool traces, prompt acceptance checks, and diagnostics that make model-quality regressions inspectable."
    ],
    demoUrl: "https://pilotcrew.ai/agent-optimizer",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "pilotcrew-observability",
    title: "Agent Observability - Telemetry Platform",
    description:
      "Built observability infrastructure for production agent behavior, including a FastAPI telemetry service that ingests OTLP/OpenInference traces, normalizes spans, aggregates cost and usage, and exposes query APIs for trace and session dashboards.",
    technologies: ["Python", "FastAPI", "OpenTelemetry", "OpenInference", "MongoDB", "Redis", "Trace APIs"],
    highlights: [
      "Built ingestion and normalization paths that map OTLP/OpenInference payloads into trace, span, session, cost, and agent-level records.",
      "Implemented owner-scoped query surfaces for traces, spans, sessions, agent metrics, fleet dashboards, and feedback workflows.",
      "Integrated backend ingest-key verification and frontend Observability routes so external apps and Builder-managed agents can send telemetry into PilotCrew."
    ],
    demoUrl: "https://pilotcrew.ai/llmObservability",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "causalflow",
    title: "CausalFlow - Causal Attribution and Repair for LLM Agents",
    description:
      "Built an interpretable agentic debugging framework that improved long-horizon reasoning performance by 40% over baseline and grounded agent behavior in deterministic, verifiable environments.",
    technologies: ["Python", "LLMs", "Agentic Frameworks", "Debugging", "Synthetic Environments", "Ablation Studies"],
    highlights: [
      "Built an interpretable framework to localize and repair failure modes in multi-step reasoning chains for long-horizon tasks.",
      "Evaluated across 3,000+ math, code generation, web QA, and medical browsing tasks; repaired 42.7% of failed traces and improved post-repair accuracy by a median +16.9% over baseline.",
      "Generated localized repair pairs from failure-inducing reasoning and tool steps that can be used as DPO post-training data."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/CausalFlow",
    isOpenSource: true
  },
  {
    id: "lh-multimodal-svc",
    title: "Emotion-Aware Feedback System for Public Speaking",
    description:
      "Built and deployed a full-stack multimodal coaching application that processes video, audio, transcripts, and multi-provider model outputs into structured presentation feedback.",
    technologies: ["React", "Python", "Hume AI", "Multimodal AI", "Async Processing", "GCP Cloud Run"],
    highlights: [
      "Orchestrated asynchronous video, audio, transcript, and emotional-signal processing through a React frontend and Python services.",
      "Integrated Hume AI and multi-provider model analysis into a visualization layer for actionable presentation feedback.",
      "Developed an LLM-as-Judge workflow for cross-provider response evaluation and deployed the services on GCP Cloud Run."
    ],
    demoUrl: "https://multimodal-svc-frontend-277660335430.us-central1.run.app/",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "gitartha-engine",
    title: "Gitartha Engine - Semantic Search for the Bhagavad Gita",
    description:
      "Architected a full-stack semantic search system using Go for the high-concurrency API and Python for embedding inference, with PostgreSQL + pgvector powering low-latency retrieval across scripture content.",
    technologies: ["Go", "Gin", "PostgreSQL", "pgvector", "React", "TypeScript", "Python", "FastAPI"],
    highlights: [
      "Built a Go monolith for chapter, verse, and semantic-search APIs while keeping P95 search latency under 15ms.",
      "Implemented vector search over 700+ verses with pgvector and a dedicated Python ML service for real-time embedding generation."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/Gitartha-Engine",
    isOpenSource: true
  },
  {
    id: "gemini-hardwarebench",
    title: "HardwareBench - Harbor EDA Benchmark",
    description:
      "Built a Harbor-compatible hardware benchmark for agent evaluation across digital design and EDA workflows, using deterministic verifiers, real toolchains, and pass@k style trials to measure model capability.",
    technologies: ["Python", "Benchmarking", "Harbor", "Docker", "EDA", "Agent Evaluation"],
    highlights: [
      "Packaged a 34-task benchmark spanning synthesis, STA, RTL debugging, verification, optimization, cryptographic IP analysis, and Hack@CHES security-patch tasks.",
      "Used deterministic script-based verifiers rather than LLM autoraters, with real tool execution via Yosys, OpenSTA, OpenROAD, and Icarus Verilog.",
      "Calibrated the benchmark with pass@k trials, task-level artifacts, and prompt-level feasibility analysis to expose genuine model headroom."
    ],
    demoUrl: "https://pilotcrew.ai/hardwarebench/harbor-dashboard",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "cyber-bench",
    title: "Cyber-Bench - Web CTF and Memory Vulnerability Benchmark",
    description:
      "Built a cybersecurity benchmark suite for evaluating agents on multi-service web CTF environments and memory-vulnerability patch resilience with deterministic scoring and inspectable run artifacts.",
    technologies: ["Python", "Docker", "OpenRouter", "OpenCode", "Cybersecurity", "Benchmarking"],
    highlights: [
      "Implemented a CyberExplorer-style runner with fixed curated bundles, isolated Docker target networks, shell execution inside attacker containers, and structured flag submission.",
      "Added OpenCode backend support with isolated workspaces, guarded helper commands, transcript export, and a browser-based transcript viewer for run inspection.",
      "Built a memory-vuln-bench pipeline over ARVO/CyberGym-style tasks that records SQLite runs, verifies ground-truth PoCs, and scores whether patched binaries resist generated exploits."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/PilotcrewAI/Cyber-Bench",
    isOpenSource: false
  },
  {
    id: "data-science-bench",
    title: "Data Science Bench - Harbor Agent Harness",
    description:
      "Built a Harbor-compatible terminal benchmark for data-science agents, packaging self-contained analysis tasks with Docker environments, deterministic verification, OpenRouter model runs, and traceable artifacts.",
    technologies: ["Python", "Harbor", "Docker", "OpenRouter", "Data Science", "Benchmarking"],
    highlights: [
      "Packaged runnable data-analysis tasks with task-local Dockerfiles, instructions, datasets, tests, solutions, and Harbor metadata.",
      "Added OpenRouter-backed Terminus runs, concurrent execution controls, job artifacts, and structured result files for model comparison.",
      "Built trace-viewing and task-hardening workflows to inspect failures, retire weak tasks, and make benchmark results reproducible."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/DataScience-Bench",
    isOpenSource: true
  },
  {
    id: "notebook-agent-eval",
    title: "Notebook Agent Eval",
    description:
      "Built a notebook benchmark runner for data-analysis tasks, executing each task in a fresh Jupyter kernel with structured artifacts for reproducible evaluation.",
    technologies: ["Python", "Jupyter", "OpenRouter", "LLM Agents", "Benchmarking", "pytest"],
    highlights: [
      "Implemented task loading for mixed inputs including tables, CSVs, images, and text, then recorded step-by-step trajectories for each run.",
      "Added configurable parallel execution and consistent job outputs including notebooks, transcripts, configs, and structured result files.",
      "Packaged the harness with uv and pytest for reproducible local runs and regression testing."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/NotebookAgent_Eval",
    isOpenSource: true
  },
  {
    id: "open-agent-loop",
    title: "OpenAgentLoop - Local Prompt and Work-Order CLI",
    description:
      "Built a local-first CLI that turns messy issue notes, diffs, and failure logs into structured work orders, prompt bundles, repair prompts, review prompts, lint reports, and trace artifacts for coding agents.",
    technologies: ["Python", "Typer", "CLI Tools", "Prompt Engineering", "Agent Workflows", "pytest"],
    highlights: [
      "Implemented draft, lint, repair, and review commands that compile target-specific prompts for Codex, Claude Code, and OpenCode.",
      "Added deterministic local trace writing under .openloop/runs so prompt bundles, work orders, lint reports, and run metadata stay inspectable.",
      "Built tests around CLI behavior, prompt compilation, work-order generation, linting, repair prompts, review prompts, and trace output."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/OpenAgentLoop",
    isOpenSource: true
  },
  {
    id: "llm-linter",
    title: "LLm-Linter - AI Code Review GitHub Action",
    description:
      "Built a GitHub Action and CLI assistant that analyzes repositories and pull requests with Gemini, parses diffs, and posts automated review summaries directly on PRs and issues.",
    technologies: ["JavaScript", "Node.js", "GitHub Actions", "Gemini API", "GitHub API", "CI/CD"],
    highlights: [
      "Implemented PR-aware diff analysis with merge-base fallbacks so the action can reliably review changed code in real repositories.",
      "Built automated comment posting for pull requests, issues, and push-triggered issue creation using the GitHub API.",
      "Supported multi-language code analysis across Python, JavaScript, TypeScript, Go, Java, C#, C++, Rust, Ruby, and PHP."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLm-Linter",
    isOpenSource: true
  },
  {
    id: "prm-on-device",
    title: "Process Reward Model for Compute-Constrained Reasoning",
    description:
      "Benchmarked process-reward-guided candidate selection under constrained inference budgets by pairing a Qwen3-0.6B generator with a LoRA-fine-tuned Qwen3-8B step verifier.",
    technologies: ["Python", "Qwen", "LLMs", "On-Device AI", "Inference Optimization"],
    highlights: [
      "Fine-tuned Qwen3-8B with LoRA on 563K RM800K reasoning steps and achieved 94.54% step-verification accuracy.",
      "At N=5 generations, PRM-guided selection reached 60.0% GSM8K accuracy vs. 50.8% for self-consistency.",
      "Matched N=64 self-consistency with 12.8x fewer candidate generations."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/Process-Reward-Models",
    isOpenSource: true
  },
  {
    id: "gemini-event-creator",
    title: "Gemini Event Creator - AI-Powered Chrome Extension",
    description:
      "Built a Chrome extension that converts highlighted webpage text into Google Calendar events using on-device Gemini Nano parsing and OAuth-backed event creation.",
    technologies: ["JavaScript", "Chrome Extension", "Google Calendar API", "OAuth 2.0", "Vite", "Gemini Nano"],
    highlights: [
      "Built an injected content UI that captures selected text and offers quick-create and edit-and-create flows.",
      "Implemented a Manifest V3 service worker for state management, background tasks, and Calendar API orchestration.",
      "Used Gemini Nano locally for privacy-preserving extraction of event metadata from natural language."
    ],
    demoUrl: "https://chrome.google.com/webstore/detail/gemini-event-creator/hbbphgbndgjenboombeclnpepoiicpno",
    githubUrl: "https://github.com/devangb3/Event-Creator",
    isOpenSource: true
  },
  {
    id: "cover-letter-generator",
    title: "Cover Letter Generator",
    description:
      "Built a full-stack application that generates tailored cover letters, answers application questions, performs company-aware research, and renders editable PDF/resume outputs from a resume plus job description workflow.",
    technologies: ["Python", "Flask", "React", "Vite", "OpenRouter", "Web Search", "PDF Generation", "Docker"],
    highlights: [
      "Implemented OpenRouter-based generation with a YAML-driven model allowlist enforced in both backend validation and frontend selection.",
      "Added application-question answering and prompt rules that ground responses in resume, project, and company evidence.",
      "Built editable cover-letter text before PDF download plus tailored resume PDF generation from structured resume YAML."
    ],
    demoUrl: "https://cover-letter-generator-424176252593.us-central1.run.app",
    githubUrl: "https://github.com/devangb3/Cover-Letter-Generator",
    isOpenSource: true
  },
  {
    id: "transit-dispatch",
    title: "Transit Dispatch - Multi-Agency Arrival Alerts",
    description:
      "Built an invite-only transit arrival notification service for DART, Unitrans, and Yolobus that plans one-time or recurring trips and monitors selected boarding legs for predicted-arrival changes.",
    technologies: ["Python", "FastAPI", "Google Maps Platform", "SQLite", "Telegram", "Resend", "Docker", "Caddy"],
    highlights: [
      "Integrated Google Places and Routes through one transit provider, with agency-local timezone handling and demo itineraries that work without API keys.",
      "Built an async worker for milestone, ETA-change, cancellation, stale-feed, and recovery alerts, with persisted alert state and idempotent Telegram/email delivery.",
      "Implemented single-use invitations with signed sessions, single-use Telegram pairing, and a responsive dashboard that lazy-loads paused and past trips."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/Travel-Notifs",
    isOpenSource: true
  },
  {
    id: "algotrade",
    title: "HammerTrade - Algorithmic Strategy Execution Platform",
    description:
      "Built core backend and execution infrastructure for a multi-user algorithmic-strategy platform, covering project and strategy-file management, parameter sweeps, historical-data ingestion, isolated code execution, and live run monitoring.",
    technologies: ["Python", "Flask", "MongoDB", "MongoEngine", "Kafka", "Docker", "WebSockets", "React"],
    highlights: [
      "Designed MongoEngine schemas and CRUD services for users, projects, strategy files, optimizers, and parameters, including compute-unit accounting for strategy runs.",
      "Built parameter-grid generation, historical market-data retrieval, and Docker/subprocess execution paths for running strategy variants and collecting their logs and results.",
      "Implemented Kafka producer/consumer paths and a threaded parallel-execution prototype, plus a React monitoring workflow for live run updates over WebSockets."
    ],
    demoUrl: "#",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "synthetic-data-generator",
    title: "Synthetic Market Simulator and Trading Environment",
    description:
      "Built a full-stack synthetic-market simulator that matches agent-generated orders in an order book, streams prices over Socket.IO, and exposes a Gymnasium environment for training and evaluating trading agents across normal, crash, and recovery regimes.",
    technologies: ["Python", "Flask", "Socket.IO", "Gymnasium", "React", "AWS Amplify", "Market Simulation"],
    highlights: [
      "Implemented order-book matching, risk-profiled market agents, configurable crash and recovery dynamics, and time-series features including volume, SMA, RSI, volatility, and market state.",
      "Built a Gymnasium-compatible environment with buy, sell, and hold actions, transaction costs, portfolio-state observations, rewards, and episode termination rules.",
      "Added per-session Socket.IO simulation streaming, React controls and charts, and an offline generator for producing training datasets."
    ],
    demoUrl: "https://main.d1jhxtwybbezfy.amplifyapp.com/",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "recipe-agent",
    title: "Recipe Agent",
    description:
      "Built an agent-backed recipe API that combines large-scale recipe ingestion, MongoDB-backed retrieval, and external nutrition APIs to answer cooking and meal-planning queries.",
    technologies: ["Python", "FastAPI", "MongoDB", "OpenRouter", "USDA API", "Agentic Workflows"],
    highlights: [
      "Designed the service to ingest large recipe datasets and expose them through an API-oriented agent interface.",
      "Integrated external nutrition data and MongoDB persistence to support structured recipe and meal-query workflows.",
      "Packaged the project as both an API service and a data-ingestion pipeline."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/Recipe-Agent",
    isOpenSource: true
  },
  {
    id: "resshare",
    title: "ResShare - Decentralized File Sharing System",
    description:
      "Built a decentralized file-sharing platform on top of ResilientDB and IPFS, with secure document storage, sharing workflows, and a RAG-powered assistant for uploaded files.",
    technologies: ["Python", "Flask", "IPFS", "ResilientDB", "Qdrant", "React", "Distributed Systems", "RAG"],
    highlights: [
      "Integrated IPFS-backed storage and sharing workflows for secure distributed file management.",
      "Built a RAG-based chatbot assistant that answers user queries based on uploaded documents.",
      "Added MCP tooling around login, upload, share, and chat workflows so external agents can operate on ResShare through a structured tool surface."
    ],
    demoUrl: "https://res-share.resilientdb.com/",
    githubUrl: "https://github.com/ExpoLab-App/ResShare",
    isOpenSource: true
  },
  {
    id: "reschat",
    title: "ResChat - Low-Latency Communication Platform with AI Assistant",
    description:
      "Built a low-latency communication system using C++ and Python for real-time messaging, large-file transfer, and retrieval-augmented document assistance over distributed data stores.",
    technologies: ["C++", "Python", "Bazel", "LangChain", "FAISS", "Distributed Systems", "RAG"],
    highlights: [
      "Built the core communication platform for real-time messaging and large file transfers on top of distributed infrastructure.",
      "Implemented a RAG assistant that parses documents, generates embeddings, and retrieves context from FAISS-backed indices.",
      "Combined systems-level performance work in C++ with AI application logic in Python."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ResilientApp/ResChat",
    isOpenSource: true
  },
  {
    id: "loan-portal",
    title: "Commercial Loan Referral Platform",
    description:
      "Built a full-stack commercial lending platform with partner, borrower, and admin portals, combining a modular FastAPI backend with a polished React/Vite frontend for pipeline management and commission workflows.",
    technologies: ["Python", "FastAPI", "SQLModel", "Alembic", "PostgreSQL", "React", "Vite", "Tailwind CSS"],
    highlights: [
      "Implemented multi-role authentication and end-to-end workflows for partner onboarding, borrower account creation, admin approvals, and secure password reset flows.",
      "Built an admin Kanban pipeline with stage and substage management, lender assignment, rejection flows, and forward-only commission lifecycle updates.",
      "Added exports, notifications, and modular backend/frontend architecture that cleanly separated modules by domain responsibility."
    ],
    demoUrl: "https://loan-lender-portal.vercel.app/",
    githubUrl: "https://github.com/devangb3/Loan-Lender-portal",
    isOpenSource: true
  },
  {
    id: "llm-chatbot",
    title: "LLM Self-Chat - Agentic AI Simulation Framework",
    description:
      "Built a multi-agent simulation framework that lets users orchestrate conversations among multiple LLMs with bring-your-own-key support across providers.",
    technologies: ["Python", "LangChain", "WebSockets", "Gemini API", "React", "Flask", "MongoDB"],
    highlights: [
      "Built a multi-LLM chat system with secure BYOK support, encrypted key storage, and interactive agent simulation.",
      "Integrated WebSockets to keep the React frontend and Flask backend synchronized with low latency during live conversations.",
      "Supported multiple model providers through one conversation orchestration layer."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLM-Self-Chat",
    isOpenSource: true
  },
  {
    id: "nanogpt-rigveda",
    title: "NanoGPT-RigVeda",
    description:
      "Implemented character-level language modeling experiments on Rig Veda text, progressing from a bigram baseline to a GPT-style decoder with masked self-attention in PyTorch.",
    technologies: ["Python", "PyTorch", "Transformers", "Language Modeling", "Attention"],
    highlights: [
      "Implemented both a baseline bigram model and a decoder-only self-attention model from scratch.",
      "Built data-preparation tooling to construct the training corpus from Sanskrit source files.",
      "Used the project to directly work through transformer internals rather than treating them as a black-box API."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/NanoGPT-RigVeda",
    isOpenSource: true
  },
  {
    id: "http-server",
    title: "HTTP Server from Scratch",
    description:
      "Built an HTTP server from scratch with custom request and response handling, chunked encoding support, binary payload handling, and JUnit-backed validation.",
    technologies: ["Java", "Go", "HTTP", "JUnit", "Maven"],
    highlights: [
      "Implemented low-level HTTP request parsing and response handling rather than relying on a web framework.",
      "Added chunked-transfer support, binary-data handling, and explicit error-response paths.",
      "Backed the project with JUnit tests and a companion Go implementation module."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/http-server",
    isOpenSource: true
  },
  {
    id: "github-issue-classifier",
    title: "Multi-Label GitHub Issue Classifier",
    description:
      "Developed and benchmarked a transformer-based model to automatically classify GitHub issues with multiple labels, achieving a 60% performance uplift over baseline.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "RoBERTa", "Scikit-learn", "Pandas"],
    highlights: [
      "Built a robust preprocessing pipeline for noisy real-world GitHub issue data and balanced label distributions with iterative stratification.",
      "Fine-tuned RoBERTa-base to outperform the DistilBERT baseline by 60% on F1 Macro.",
      "Reduced the label space to the most predictive 28 classes to improve signal quality and training efficiency."
    ],
    demoUrl: "https://huggingface.co/devangb4/scikit-issues-multilabel-classification",
    githubUrl: "https://github.com/devangb3/HF-Transformers/blob/main/scikit-Issue-Classifier.ipynb",
    isOpenSource: true
  },
  {
    id: "drug-condition-classifier",
    title: "Drug Condition Classifier (BERT Fine-Tuning)",
    description:
      "Fine-tuned BERT for multi-class medical text classification over 126,000+ drug reviews to predict patient conditions across 821 labels.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "BERT", "Scikit-learn", "W&B"],
    highlights: [
      "Built data-cleaning and preprocessing pipelines for noisy drug-review corpora.",
      "Achieved 75.9% accuracy and a weighted F1-score of 0.75 on a 52,000+ sample test split.",
      "Published the trained model and tokenizer to the Hugging Face Hub for downstream inference."
    ],
    demoUrl: "https://huggingface.co/devangb4/bert-drug-classification",
    githubUrl: "https://github.com/devangb3/HF-Transformers/blob/main/Drug_dataset_finetuning.ipynb",
    isOpenSource: true
  },
  {
    id: "daily-digest",
    title: "Daily Digest - AI-Powered Gmail/Calendar Summarizer",
    description:
      "Built an AI assistant that summarizes Gmail and Google Calendar activity, prioritizes daily context, and reduces planning overhead through Gemini-powered summarization.",
    technologies: ["Python", "Flask", "Gemini API", "OAuth 2.0", "Google Workspace APIs"],
    highlights: [
      "Built secure OAuth-backed integrations for Gmail and Calendar data access.",
      "Generated priority-aware daily summaries and added text-to-speech support for quick consumption."
    ],
    demoUrl: "https://calendar-gmail-summary-frontend.onrender.com/",
    githubUrl: "https://github.com/devangb3/Calendar-Gmail-Summary",
    isOpenSource: true
  },
  {
    id: "75Hard",
    title: "Tracker App for 75 Hard Challenge",
    description:
      "Built a full-stack habit-tracking platform with cloud deployment, responsive dashboards, and data visualization for the 75 Hard challenge.",
    technologies: ["Python", "Flask", "MongoDB", "React", "Docker", "GCP", "Tailwind CSS", "CI/CD"],
    highlights: [
      "Designed a modular full-stack architecture with separate frontend and backend services.",
      "Built responsive dashboards with interactive visualizations and progress tracking.",
      "Containerized and deployed the stack to Google Cloud Run."
    ],
    demoUrl: "https://hard-tracker-frontend-75-424176252593.us-west1.run.app/",
    githubUrl: "https://github.com/devangb3/75-Hard-Tracker",
    isOpenSource: true
  },
  {
    id: "dc-menu-analyzer",
    title: "DC Menu Analyzer",
    description:
      "Built an AI-backed dining commons assistant that scrapes menu data and recommends meals based on dietary restrictions, allergies, and caloric goals.",
    technologies: ["Python", "FastAPI", "Gemini API", "BeautifulSoup4", "React", "Web Scraping"],
    highlights: [
      "Automated menu ingestion with a BeautifulSoup-based scraping pipeline.",
      "Integrated Gemini for personalized menu analysis and recommendation generation.",
      "Built real-time filtering for dietary restrictions and nutritional constraints."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/DC-Menu-Analyzer",
    isOpenSource: true
  },
  {
    id: "mm-hilton-sprint",
    title: "Multi-Provider AI Integration for Presentation Analysis",
    description:
      "Built a multi-provider AI platform for presentation analysis that combined OpenAI, Anthropic, Google, and Perplexity with a staged migration from Firebase to a scalable PostgreSQL-backed Node.js architecture.",
    technologies: ["Python", "Node.js", "PostgreSQL", "Firebase", "REST APIs", "AI Platforms"],
    highlights: [
      "Integrated four AI providers behind a service-factory pattern for flexible orchestration.",
      "Designed a dual-database architecture that supported migration to a more scalable backend.",
      "Implemented composite and observer patterns for logging and monitoring."
    ],
    demoUrl: "#",
    githubUrl: "#",
    isOpenSource: false
  },
  {
    id: "rag-context",
    title: "RAG Client",
    description:
      "Built a retrieval-augmented assistant that answers questions over local documents, PDFs, notes, and source code using embeddings and vector search.",
    technologies: ["Python", "LangChain", "FAISS", "Gemini API", "Vector Databases", "RAG"],
    highlights: [
      "Implemented a context-aware retrieval engine for personal document collections and codebases.",
      "Orchestrated LLM, embedding, and vector-store interactions through LangChain pipelines.",
      "Integrated Gemini 2.5 Pro for embeddings while keeping the model layer swappable."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/RAG-Client",
    isOpenSource: true
  },
  {
    id: "quiz",
    title: "LLM Quiz Generator",
    description:
      "Built a full-stack application that converts study materials into interactive quizzes with file ingestion, question generation, and real-time scoring.",
    technologies: ["Python", "FastAPI", "DeepSeek API", "Vite", "File Processing", "LLMs"],
    highlights: [
      "Handled TXT, PDF, DOC, and DOCX ingestion with dynamic encoding detection and PDF extraction.",
      "Generated context-aware multiple-choice questions from uploaded study materials.",
      "Built an interactive quiz interface with progress tracking, feedback, and score reporting."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLM-Quiz",
    isOpenSource: true
  },
  {
    id: "atom",
    title: "Atom (Portfolio Management Software)",
    description:
      "Engineered backend systems for a high-traffic wealth management platform, improving performance, trading workflows, and cloud-backed scalability for enterprise finance users.",
    technologies: ["ASP.NET Core", "C#", "JavaScript", "Azure", "AWS", "Angular", "TypeScript", "SQL"],
    highlights: [
      "Reduced data retrieval times by 40% through backend and query-path optimization.",
      "Implemented real-time trading capabilities and modular backend improvements.",
      "Built scalable cloud-oriented architecture for a high-traffic financial platform."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3",
    isOpenSource: false
  }
];

export const projectCategories = [
  "AI Systems",
  "Evaluation & Benchmarks",
  "Backend & Distributed Systems",
  "Research",
  "Full-Stack Products"
];

export const featuredProjectIds = [
  "pilotcrew-gen-eval",
  "pilotcrew-observability",
  "causalflow",
  "prm-on-device",
  "algotrade",
  "resshare"
];

export const projectCategoryById = {
  "pilotcrew-gen-eval": "Evaluation & Benchmarks",
  "pilotcrew-observability": "AI Systems",
  causalflow: "Research",
  "lh-multimodal-svc": "AI Systems",
  "gitartha-engine": "Backend & Distributed Systems",
  "gemini-hardwarebench": "Evaluation & Benchmarks",
  "cyber-bench": "Evaluation & Benchmarks",
  "data-science-bench": "Evaluation & Benchmarks",
  "notebook-agent-eval": "Evaluation & Benchmarks",
  "open-agent-loop": "AI Systems",
  "llm-linter": "AI Systems",
  "prm-on-device": "Research",
  "gemini-event-creator": "Full-Stack Products",
  "cover-letter-generator": "Full-Stack Products",
  "transit-dispatch": "Full-Stack Products",
  algotrade: "Backend & Distributed Systems",
  "synthetic-data-generator": "Full-Stack Products",
  "recipe-agent": "AI Systems",
  resshare: "Backend & Distributed Systems",
  reschat: "Backend & Distributed Systems",
  "loan-portal": "Full-Stack Products",
  "llm-chatbot": "AI Systems",
  "nanogpt-rigveda": "Research",
  "http-server": "Backend & Distributed Systems",
  "github-issue-classifier": "AI Systems",
  "drug-condition-classifier": "Research",
  "daily-digest": "AI Systems",
  "75Hard": "Full-Stack Products",
  "dc-menu-analyzer": "AI Systems",
  "mm-hilton-sprint": "AI Systems",
  "rag-context": "AI Systems",
  quiz: "AI Systems",
  atom: "Backend & Distributed Systems"
};

export const featuredProjectDetails = {
  "pilotcrew-gen-eval": {
    problem: "Agent changes are difficult to compare when tasks, graders, traces, and run artifacts live in separate workflows.",
    ownership: "Evaluation infrastructure, agent runners, deterministic gates, trace analysis, and prompt-optimization workflows.",
    proofPoints: [
      "Unified coding, RAG, tool-use, deep-research, conversational, and goal-state evaluation paths.",
      "Made regressions inspectable through structured runs, prompt/version tracking, gates, costs, and failure artifacts."
    ],
    caseStudyUrl: "",
    videoUrl: ""
  },
  "pilotcrew-observability": {
    problem: "Production agent failures are hard to diagnose when telemetry arrives as vendor-specific, disconnected spans.",
    ownership: "OTLP/OpenInference ingestion, span normalization, cost aggregation, scoped query APIs, and product integration.",
    proofPoints: [
      "Normalized traces into span, session, cost, feedback, and agent-level records.",
      "Connected external application ingest to owner-scoped trace and fleet dashboards."
    ],
    caseStudyUrl: "",
    videoUrl: ""
  },
  causalflow: {
    problem: "A failed agent answer does not reveal which reasoning or tool step actually caused the outcome.",
    ownership: "Causal attribution framework, counterfactual repair pipeline, benchmark experiments, and result auditing.",
    proofPoints: [
      "Models execution as a dependency DAG and tests candidate causes through downstream re-execution or outcome prediction.",
      "Generates localized, minimal repair pairs and evaluates them across math, code, and browsing tasks."
    ],
    caseStudyUrl: "",
    videoUrl: ""
  },
  "prm-on-device": {
    problem: "Self-consistency spends many generations without directly scoring whether intermediate reasoning steps are sound.",
    ownership: "LoRA fine-tuning, step-verifier evaluation, weak-to-strong inference, and GSM8K efficiency experiments.",
    proofPoints: [
      "Fine-tuned Qwen3-8B on 563,181 labeled reasoning steps with 94.54% step-verification accuracy.",
      "At N=5, reached 60.0% GSM8K accuracy and matched N=64 self-consistency with 12.8x fewer generations."
    ],
    caseStudyUrl: "",
    videoUrl: ""
  },
  algotrade: {
    problem: "Strategy teams need to manage, sweep, and execute user-authored trading code without coupling every run to one process.",
    ownership: "MongoEngine domain models, strategy-file workflows, parameter sweeps, execution workers, and live monitoring.",
    proofPoints: [
      "Built historical-data ingestion and isolated Docker/subprocess execution for parameterized strategy variants.",
      "Prototyped Kafka and threaded parallel execution with WebSocket updates for live run inspection."
    ],
    caseStudyUrl: "",
    videoUrl: ""
  },
  resshare: {
    problem: "Document sharing and retrieval need access isolation, provenance, and durable storage across user workflows.",
    ownership: "File and sharing APIs, document ingestion, per-user retrieval, source-attributed RAG, and agent tooling.",
    proofPoints: [
      "Integrated multiple data stores and added key features like document parsing, RAG embedding generation, retrieval, and cited answers.",
      "Added structured MCP tools for authentication, upload, sharing, and document chat workflows."
    ],
    caseStudyUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=DPMwRavPYkQ"
  }
};

export const skills = [
  { name: "Python", category: "Languages", icon: <img src="/skills/python-icon.svg" alt="Python" width="24" height="24" /> },
  { name: "C++", category: "Languages", icon: <img src="/skills/cplusplus-icon.svg" alt="C++" width="24" height="24" /> },
  { name: "C#", category: "Languages", icon: <img src="/skills/csharp_icon.png" alt="C#" width="24" height="24" /> },
  { name: "Java", category: "Languages", icon: <img src="/skills/java-icon.svg" alt="Java" width="24" height="24" /> },
  { name: "TypeScript", category: "Languages", icon: <img src="/skills/typescriptlang-icon.svg" alt="TypeScript" width="24" height="24" /> },
  { name: "JavaScript", category: "Languages", icon: <img src="/skills/javascript-icon.svg" alt="JavaScript" width="24" height="24" /> },
  { name: "Go", category: "Languages", icon: <img src="/skills/golang-icon.svg" alt="Go" width="24" height="24" /> },
  { name: "React", category: "Frameworks", icon: <img src="/skills/reactjs-icon.svg" alt="React" width="24" height="24" /> },
  { name: "FastAPI", category: "Frameworks", icon: <img src="/skills/fastapi-icon.svg" alt="FastAPI" width="24" height="24" /> },
  { name: "Flask", category: "Frameworks", icon: <img src="/skills/flask-icon.svg" alt="Flask" width="24" height="24" style={{ filter: "invert(1)" }} /> },
  { name: "Node.js", category: "Frameworks", icon: <img src="/skills/nodejs-icon.svg" alt="Node.js" width="24" height="24" /> },
  { name: "ASP.NET Core", category: "Frameworks", icon: <img src="/skills/dotnet-icon.svg" alt=".NET" width="24" height="24" /> },
  { name: "SQLModel", category: "Frameworks", icon: <img src="/skills/sqlalchemy-icon.svg" alt="SQLModel" width="24" height="24" /> },
  { name: "Alembic", category: "Frameworks", icon: <img src="/skills/sqlalchemy-icon.svg" alt="Alembic" width="24" height="24" /> },
  { name: "LangChain", category: "Frameworks", icon: <img src="/skills/langchain-icon.svg" alt="LangChain" width="24" height="24" /> },
  { name: "Tailwind CSS", category: "Frameworks", icon: <img src="/skills/tailwind-icon.svg" alt="Tailwind CSS" width="24" height="24" /> },
  { name: "Vite", category: "Frameworks", icon: <img src="/skills/vite-icon.svg" alt="Vite" width="24" height="24" /> },
  { name: "PyTorch", category: "Frameworks", icon: <img src="/skills/pytorch-icon.svg" alt="PyTorch" width="24" height="24" /> },
  { name: "Hugging Face", category: "Frameworks", icon: <img src="/hf-logo.png" alt="Hugging Face" width="24" height="24" /> },
  { name: "GCP", category: "Cloud", icon: <img src="/skills/google_cloud-icon.svg" alt="GCP" width="24" height="24" /> },
  { name: "AWS", category: "Cloud", icon: <img src="/skills/amazon_aws-icon.svg" alt="AWS" width="24" height="24" /> },
  { name: "OpenAI API", category: "Cloud", icon: <img src="/skills/openai-icon.svg" alt="OpenAI" width="24" height="24" style={{ filter: "invert(1)" }} /> },
  { name: "Anthropic API", category: "Cloud", icon: <img src="/skills/anthropic-icon.svg" alt="Anthropic" width="24" height="24" style={{ filter: "invert(1)" }} /> },
  { name: "Gemini API", category: "Cloud", icon: <img src="/skills/gemini-icon.svg" alt="Google Gemini" width="24" height="24" /> },
  { name: "OpenRouter", category: "Cloud", icon: <img src="/skills/openrouter-icon.svg" alt="OpenRouter" width="24" height="24" /> },
  { name: "OAuth 2.0", category: "Cloud", icon: <img src="/skills/oauth-icon.svg" alt="OAuth 2.0" width="24" height="24" /> },
  { name: "LLM Evaluations", category: "AI", icon: "EVAL" },
  { name: "Multi-Agent Systems", category: "AI", icon: "AG" },
  { name: "Multimodal AI", category: "AI", icon: "MM" },
  { name: "Prompt Engineering", category: "AI", icon: "PE" },
  { name: "Tool Calling", category: "AI", icon: "TC" },
  { name: "RAG", category: "AI", icon: "RAG" },
  { name: "Embeddings", category: "AI", icon: "EMB" },
  { name: "Benchmarking", category: "AI", icon: "BM" },
  { name: "Adversarial Testing", category: "AI", icon: "ADV" },
  { name: "AI Red-Teaming", category: "AI", icon: "RT" },
  { name: "Docker", category: "Tools", icon: <img src="/skills/docker-icon.svg" alt="Docker" width="24" height="24" /> },
  { name: "GitHub Actions", category: "Tools", icon: <img src="/skills/github-actions-icon.svg" alt="GitHub Actions" width="24" height="24" /> },
  { name: "CI/CD", category: "Tools", icon: "CI" },
  { name: "Jupyter", category: "Tools", icon: <img src="/skills/jupyter-icon.svg" alt="Jupyter" width="24" height="24" /> },
  { name: "SQL", category: "Database", icon: "SQL" },
  { name: "PostgreSQL", category: "Database", icon: <img src="/skills/postgresql-icon.svg" alt="PostgreSQL" width="24" height="24" /> },
  { name: "pgvector", category: "Database", icon: <img src="/skills/postgresql-icon.svg" alt="pgvector, a PostgreSQL extension" width="24" height="24" /> },
  { name: "MongoDB", category: "Database", icon: <img src="/skills/mongodb-icon.svg" alt="MongoDB" width="24" height="24" /> },
  { name: "Redis", category: "Database", icon: <img src="/skills/redis-icon.svg" alt="Redis" width="24" height="24" /> },
];

export const experiences = [
  {
    id: "pilotcrew",
    title: "Software Engineer",
    company: "PilotCrew AI",
    period: "October 2025 - Present",
    logo: "/experience/pilotcrew.png",
    logoAlt: "PilotCrew AI logo",
    logoPadding: 8,
    description: [
      "Built LLM-agent evaluation infrastructure spanning coding, RAG, interactive tool-use, deep-research, conversational, and prompt-optimization workflows.",
      "Built observability infrastructure for trace ingestion, span/session normalization, cost aggregation, ingest-key verification, and trace dashboard query APIs.",
      "Engineered agent runners, client-side tool traces, prompt/version tracking, deterministic graders, regression gates, and trace-driven instruction optimization."
    ],
    technologies: ["Python", "LLMs", "Agentic Workflows", "Adversarial Testing", "Prompt Engineering"]
  },
  {
    id: "learnhaus",
    title: "Software Engineer Intern",
    company: "LearnHaus AI",
    period: "June 2025 - August 2025",
    logo: "/experience/learnhaus.png",
    logoAlt: "LearnHaus AI logo",
    logoPadding: 8,
    description: [
      "Built a full-stack multimodal coaching application in React and Python, orchestrating video, audio, transcript, and multi-provider model analysis through asynchronous workflows.",
      "Developed an LLM-as-Judge workflow for cross-provider response evaluation and deployed the services on GCP Cloud Run.",
      "Integrated emotional analysis and feedback visualization for presentation-coaching workflows."
    ],
    technologies: ["React", "Python", "AsyncIO", "Multimodal AI", "GCP Cloud Run", "LLM Evaluation"]
  },
  {
    id: "uc-davis",
    title: "M.S. Computer Science",
    company: "UC Davis",
    period: "September 2024 - September 2026",
    logo: "/experience/uc-davis.svg",
    logoAlt: "UC Davis logo",
    logoBackground: "#022851",
    logoPadding: 7,
    description: [
      "Completed all degree coursework with a 3.91 graduate GPA; graduating in September 2026.",
      "Advanced coursework spans distributed databases, artificial intelligence, algorithms, numerical linear algebra, computer and information security, computer science theory, software engineering, and computer graphics.",
      "Conducted multi-quarter graduate research in computer science and published papers in top-tier conferences and journals."
    ],
    technologies: ["Distributed Databases", "Artificial Intelligence", "Algorithms", "Computer Security", "Graduate Research"]
  },
  {
    id: "hexaview",
    title: "Software Engineer",
    company: "Hexaview Technologies",
    period: "August 2022 - September 2024",
    logo: "/experience/hexaview.svg",
    logoAlt: "Hexaview Technologies logo",
    logoPadding: 9,
    description: [
      "Shipped 30 production features for a Fortune 500 wealth-management platform, building C#/.NET and SQL services in a cross-functional Agile team.",
      "Optimized a legacy backend serving 1M+ monthly requests and simplified critical service paths.",
      "Redesigned 50+ REST APIs with clearer contracts, modular service boundaries, and production-grade maintainability."
    ],
    technologies: ["C#", ".NET", "SQL", "REST APIs", "Microservices"]
  },
  {
    id: "sppu",
    title: "B.E. Computer Engineering",
    company: "Savitribai Phule Pune University (SPPU)",
    period: "August 2019 - June 2023",
    logo: "/experience/sppu.jpg",
    logoAlt: "Savitribai Phule Pune University emblem",
    logoPadding: 4,
    description: [
      "Graduated First Class with Distinction with a 9.13/10 CGPA.",
      "Completed an additional 20-credit Honors track in AIML.",
      "Coursework included data structures and algorithms, database systems, operating systems, computer networks and security, machine learning, deep learning, cloud computing, and software-defined networks."
    ],
    technologies: ["Computer Engineering", "AI/ML Honors", "Data Structures", "Database Systems", "Operating Systems"]
  }
];

export const socialLinks = [
  { 
    icon: <Email />, 
    label: 'Email Me', 
    href: 'mailto:devangborkar3@gmail.com', 
    primary: true 
  },
  { 
    icon: <img src="/hf-logo.png" alt="Hugging Face" width="24" height="24" />, 
    label: 'Hugging Face', 
    href: 'https://huggingface.co/devangb4', 
    primary: false 
  },
  { 
    icon: <LinkedIn />, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/devang-borkar-710b49201', 
    primary: false 
  },
  { 
    icon: <Twitter />, 
    label: 'X', 
    href: 'https://x.com/DevangBorkar', 
    primary: false 
  },
  { 
    icon: <GitHub />, 
    label: 'GitHub', 
    href: 'https://github.com/devangb3', 
    primary: false 
  }
];

export const heroSocialLinks = [
  { icon: <GitHub />, url: 'https://github.com/devangb3', label: 'GitHub' },
  { icon: <img src="/hf-logo.png" alt="Hugging Face" width="24" height="24" />, url: 'https://huggingface.co/devangb4', label: 'Hugging Face' },
  { icon: <LinkedIn />, url: 'https://linkedin.com/in/devang-borkar-710b49201', label: 'LinkedIn' },
  { icon: <Twitter />, url: 'https://x.com/DevangBorkar', label: 'X' },
  { icon: <Email />, url: 'mailto:devangborkar3@gmail.com', label: 'Email' },
  { icon: <LeetCodeIcon />, url: 'https://leetcode.com/u/devangborkar3/', label: 'LeetCode' }
];
