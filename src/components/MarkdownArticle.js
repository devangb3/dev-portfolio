import React, { useState } from "react";
import { Close, ZoomIn } from "@mui/icons-material";
import { Box, Dialog, DialogContent, Divider, IconButton, Link, Typography } from "@mui/material";

const unescapeMarkdown = (text) =>
  text.replace(/\\([\\`*{}()#+\-.!_=])/g, "$1");

function renderInline(text, theme) {
  const tokenPattern = /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  const nodes = [];
  let cursor = 0;
  let match;

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(unescapeMarkdown(text.slice(cursor, match.index)));
    }

    if (match[2] && match[3]) {
      nodes.push(
        <Link
          key={`${match.index}-${match[3]}`}
          href={match[3]}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: theme.primary,
            fontWeight: 650,
            textDecorationColor: `${theme.primary}70`,
            textUnderlineOffset: "0.18em",
          }}
        >
          {renderInline(match[2], theme)}
        </Link>
      );
    } else if (match[4]) {
      nodes.push(
        <Box
          component="code"
          key={`${match.index}-code`}
          sx={{
            px: 0.7,
            py: 0.2,
            borderRadius: 1,
            border: `1px solid ${theme.border}`,
            bgcolor: `${theme.primary}0D`,
            color: theme.text,
            fontFamily: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
            fontSize: "0.88em",
          }}
        >
          {match[4]}
        </Box>
      );
    } else if (match[5]) {
      nodes.push(<strong key={`${match.index}-strong`}>{unescapeMarkdown(match[5])}</strong>);
    } else if (match[6]) {
      nodes.push(<em key={`${match.index}-em`}>{unescapeMarkdown(match[6])}</em>);
    }

    cursor = tokenPattern.lastIndex;
  }

  if (cursor < text.length) {
    nodes.push(unescapeMarkdown(text.slice(cursor)));
  }

  return nodes;
}

function parseBlocks(source) {
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks = [];
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)$/);
    if (image) {
      flushParagraph();
      blocks.push({ type: "image", alt: image[1], src: image[2], title: image[3] });
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      continue;
    }

    if (/^---+$/.test(line)) {
      flushParagraph();
      blocks.push({ type: "divider" });
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      blocks.push({ type: "quote", text: line.slice(2) });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      const items = [];
      let cursor = index;
      while (cursor < lines.length && /^[-*]\s+/.test(lines[cursor].trim())) {
        items.push(lines[cursor].trim().replace(/^[-*]\s+/, ""));
        cursor += 1;
      }
      blocks.push({ type: "list", items });
      index = cursor - 1;
      continue;
    }

    paragraph.push(line.replace(/\s{2,}$/, ""));
  }

  flushParagraph();
  return blocks;
}

export default function MarkdownArticle({ source, theme }) {
  const blocks = parseBlocks(source);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Box
        sx={{
          maxWidth: 760,
          mx: "auto",
          pb: 5,
          "& strong": { color: theme.text, fontWeight: 750 },
        }}
      >
        {blocks.map((block, index) => {
          if (block.type === "image") {
            return (
              <Box component="figure" key={`${block.src}-${index}`} sx={{ m: 0, my: { xs: 4, sm: 5 } }}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => setSelectedImage(block)}
                  aria-label={`Open full-size image: ${block.alt || "Article image"}`}
                  sx={{
                    display: "block",
                    width: "100%",
                    p: 0,
                    m: 0,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "zoom-in",
                    borderRadius: 1.5,
                    border: `1px solid ${theme.border}`,
                    bgcolor: "transparent",
                    color: "inherit",
                    "&:hover .image-zoom-indicator, &:focus-visible .image-zoom-indicator": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                    "&:hover img": { transform: "scale(1.01)" },
                  }}
                >
                  <Box
                    component="img"
                    src={block.src}
                    alt={block.alt}
                    title={block.title}
                    loading="lazy"
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      transition: "transform 220ms ease",
                    }}
                  />
                  <Box
                    className="image-zoom-indicator"
                    aria-hidden="true"
                    sx={{
                      position: "absolute",
                      right: 12,
                      bottom: 12,
                      width: 38,
                      height: 38,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      bgcolor: "rgba(4, 8, 15, 0.82)",
                      color: "#ffffff",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      opacity: 0,
                      transform: "translateY(5px)",
                      transition: "opacity 180ms ease, transform 180ms ease",
                    }}
                  >
                    <ZoomIn fontSize="small" />
                  </Box>
                </Box>
                {block.title && (
                  <Typography
                    component="figcaption"
                    variant="caption"
                    sx={{ display: "block", color: theme.textSecondary, mt: 1.25, textAlign: "center" }}
                  >
                    {block.title}
                  </Typography>
                )}
              </Box>
            );
          }

          if (block.type === "heading") {
            return (
            <Typography
              key={`${block.text}-${index}`}
              component={block.level === 3 ? "h3" : "h2"}
              variant={block.level === 3 ? "h5" : "h4"}
              sx={{
                color: theme.text,
                fontWeight: 750,
                fontSize: block.level === 3 ? { xs: "1.2rem", sm: "1.35rem" } : { xs: "1.55rem", sm: "1.85rem" },
                lineHeight: 1.25,
                mt: index === 0 ? 1 : 6,
                mb: 2,
              }}
            >
              {renderInline(block.text, theme)}
            </Typography>
            );
          }

          if (block.type === "list") {
            return (
            <Box
              component="ul"
              key={`list-${index}`}
              sx={{
                color: theme.textSecondary,
                pl: { xs: 2.5, sm: 3.5 },
                my: 2.5,
                "& li": { mb: 1.1, pl: 0.6 },
              }}
            >
              {block.items.map((item, itemIndex) => (
                <Typography
                  component="li"
                  key={`${item}-${itemIndex}`}
                  sx={{ fontSize: { xs: "1rem", sm: "1.06rem" }, lineHeight: 1.8 }}
                >
                  {renderInline(item, theme)}
                </Typography>
              ))}
            </Box>
            );
          }

          if (block.type === "quote") {
            return (
            <Box
              component="aside"
              key={`quote-${index}`}
              sx={{
                my: 3,
                px: { xs: 2, sm: 3 },
                py: 2,
                borderLeft: `3px solid ${theme.secondary}`,
                bgcolor: `${theme.secondary}0B`,
              }}
            >
              <Typography sx={{ color: theme.textSecondary, lineHeight: 1.7, fontStyle: "italic" }}>
                {renderInline(block.text, theme)}
              </Typography>
            </Box>
            );
          }

          if (block.type === "divider") {
            return <Divider key={`divider-${index}`} sx={{ my: 5, borderColor: theme.border }} />;
          }

          return (
            <Typography
              component="p"
              key={`paragraph-${index}`}
              sx={{
                color: theme.textSecondary,
                fontSize: { xs: "1rem", sm: "1.07rem" },
                lineHeight: 1.85,
                mb: 2.25,
              }}
            >
              {renderInline(block.text, theme)}
            </Typography>
          );
        })}
      </Box>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        fullScreen
        aria-label="Expanded article image"
        PaperProps={{
          sx: {
            bgcolor: "rgba(3, 6, 11, 0.97)",
            backgroundImage: "none",
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedImage(null)}
          aria-label="Close image viewer"
          sx={{
            position: "fixed",
            top: { xs: 12, sm: 22 },
            right: { xs: 12, sm: 22 },
            zIndex: 1,
            color: "#ffffff",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.18)" },
          }}
        >
          <Close />
        </IconButton>

        <DialogContent
          onClick={() => setSelectedImage(null)}
          sx={{
            p: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            cursor: "zoom-out",
          }}
        >
          {selectedImage && (
            <>
              <Box
                component="img"
                src={selectedImage.src}
                alt={selectedImage.alt}
                onClick={(event) => event.stopPropagation()}
                sx={{
                  display: "block",
                  width: "auto",
                  height: "auto",
                  maxWidth: "94vw",
                  maxHeight: "84vh",
                  objectFit: "contain",
                  borderRadius: 1,
                  boxShadow: "0 24px 90px rgba(0, 0, 0, 0.55)",
                  cursor: "default",
                }}
              />
              <Typography sx={{ color: "rgba(255, 255, 255, 0.74)", textAlign: "center", maxWidth: 760 }}>
                {selectedImage.title || selectedImage.alt}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
