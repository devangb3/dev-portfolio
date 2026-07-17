import React from "react";
import { ArrowOutward, East } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function BlogSection({ blogs, theme, isVisible }) {
  return (
    <Box
      id="blogs"
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        bgcolor: theme.surface,
        borderTop: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: theme.text,
            fontWeight: 780,
            fontSize: { xs: "2.5rem", md: "3.4rem" },
            mb: { xs: 4, md: 6 },
          }}
        >
          Blogs
        </Typography>
        <Box sx={{ borderTop: `1px solid ${theme.border}` }}>
              {blogs.map((blog, index) => (
                <Box
                  component="article"
                  key={blog.id}
                  sx={{
                    position: "relative",
                    borderBottom: `1px solid ${theme.border}`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 450ms ease ${index * 90}ms, transform 450ms ease ${index * 90}ms, background-color 220ms ease`,
                    "&:hover": { bgcolor: `${theme.primary}07` },
                  }}
                >
                  <Link
                    href={`${process.env.PUBLIC_URL}/blog/${blog.slug}`}
                    underline="none"
                    aria-label={`Read ${blog.title}`}
                    sx={{
                      display: "block",
                      color: "inherit",
                      px: { xs: 0, sm: 2.5 },
                      py: { xs: 4.5, sm: 5.5 },
                      "&:hover .blog-arrow": { transform: "translateX(7px)" },
                      "&:focus-visible": { outlineOffset: 4 },
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                      <Typography
                        variant="overline"
                        sx={{ color: theme.secondary, fontWeight: 750, letterSpacing: "0.13em" }}
                      >
                        {blog.kicker}
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.textSecondary, whiteSpace: "nowrap" }}>
                        {blog.publishedLabel} · {blog.readTime}
                      </Typography>
                    </Stack>

                    <Box sx={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 3, alignItems: "start" }}>
                      <Box>
                        <Typography
                          variant="h3"
                          sx={{
                            color: theme.text,
                            fontWeight: 730,
                            fontSize: { xs: "1.85rem", sm: "2.35rem" },
                            lineHeight: 1.12,
                            mb: 2,
                          }}
                        >
                          {blog.title}
                        </Typography>
                        <Typography sx={{ color: theme.textSecondary, lineHeight: 1.72, maxWidth: 690 }}>
                          {blog.excerpt}
                        </Typography>
                      </Box>
                      <East
                        className="blog-arrow"
                        sx={{ color: theme.primary, mt: 0.8, transition: "transform 220ms ease" }}
                      />
                    </Box>

                    <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3 }}>
                      {blog.topics.map((topic) => (
                        <Typography key={topic} variant="caption" sx={{ color: theme.textSecondary }}>
                          #{topic.replace(/\s+/g, "").toLowerCase()}
                        </Typography>
                      ))}
                    </Stack>
                  </Link>

                  <Link
                    href={blog.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open the original ${blog.title} post on X`}
                    sx={{
                      position: "absolute",
                      right: { xs: 0, sm: 20 },
                      bottom: { xs: 15, sm: 20 },
                      display: "inline-flex",
                      alignItems: "center",
                      color: theme.textSecondary,
                      opacity: 0.7,
                      "&:hover": { color: theme.primary, opacity: 1 },
                    }}
                  >
                    <ArrowOutward sx={{ fontSize: 17 }} />
                  </Link>
                </Box>
              ))}
        </Box>
      </Container>
    </Box>
  );
}
