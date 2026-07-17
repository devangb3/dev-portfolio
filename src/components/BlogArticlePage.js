import React, { useEffect, useState } from "react";
import {
  ArrowBack,
  ArrowOutward,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import MarkdownArticle from "./MarkdownArticle";

export default function BlogArticlePage({ blog, theme, darkMode, onToggleTheme }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog?.slug]);

  useEffect(() => {
    if (!blog) return undefined;

    const previousTitle = document.title;
    document.title = `${blog.title} — Devang Borkar`;

    return () => {
      document.title = previousTitle;
    };
  }, [blog]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog?.body]);

  if (!blog) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: theme.background, color: theme.text, display: "grid", placeItems: "center", px: 3 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: theme.primary, letterSpacing: "0.18em" }}>
            404
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 760, my: 2 }}>
            That article does not exist.
          </Typography>
          <Link href={`${process.env.PUBLIC_URL}/#blogs`} sx={{ color: theme.primary, fontWeight: 700 }}>
            Back
          </Link>
        </Box>
      </Box>
    );
  }

  return (
    <Box component="main" sx={{ minHeight: "100vh", bgcolor: theme.background, color: theme.text }}>
      <Box
        aria-hidden="true"
        sx={{
          position: "fixed",
          zIndex: 1300,
          top: 0,
          left: 0,
          width: `${readingProgress * 100}%`,
          height: 3,
          bgcolor: theme.primary,
          transition: "width 80ms linear",
        }}
      />

      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          bgcolor: `${theme.background}E8`,
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: 72 }}>
            <Link
              href={`${process.env.PUBLIC_URL}/#blogs`}
              underline="none"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: theme.text, fontWeight: 700 }}
            >
              <ArrowBack fontSize="small" /> Portfolio
            </Link>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Typography variant="caption" sx={{ color: theme.textSecondary, display: { xs: "none", sm: "block" } }}>
                Devang Borkar
              </Typography>
              <IconButton
                onClick={onToggleTheme}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                sx={{ color: theme.text }}
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="article">
        <Box sx={{ borderBottom: `1px solid ${theme.border}`, position: "relative", overflow: "hidden" }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, sm: 10, md: 13 }, position: "relative", zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{ color: theme.secondary, fontWeight: 750, letterSpacing: "0.16em" }}
            >
              {blog.kicker}
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: theme.text,
                fontWeight: 780,
                fontSize: { xs: "2.75rem", sm: "4.25rem", md: "5.4rem" },
                lineHeight: 0.98,
                maxWidth: 1050,
                mt: 2,
                mb: 4,
              }}
            >
              {blog.title}
            </Typography>
            <Typography
              sx={{
                color: theme.textSecondary,
                fontSize: { xs: "1.08rem", sm: "1.25rem" },
                lineHeight: 1.65,
                maxWidth: 760,
                mb: 4,
              }}
            >
              {blog.excerpt}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              spacing={2}
              sx={{ maxWidth: 900 }}
            >
              <Typography variant="body2" sx={{ color: theme.textSecondary }}>
                By Devang Borkar&nbsp;&nbsp;·&nbsp;&nbsp;{blog.publishedLabel}&nbsp;&nbsp;·&nbsp;&nbsp;{blog.readTime}
              </Typography>
              <Link
                href={blog.sourceUrl}
                target="_blank"
                rel="noreferrer"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.7, color: theme.primary, fontWeight: 700 }}
              >
                Original on X <ArrowOutward sx={{ fontSize: 18 }} />
              </Link>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 9, md: 11 } }}>
          <MarkdownArticle source={blog.body} theme={theme} />
        </Container>
      </Box>

      <Box component="footer" sx={{ borderTop: `1px solid ${theme.border}` }}>
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2}>
            <Link href={`${process.env.PUBLIC_URL}/#blogs`} sx={{ color: theme.text, fontWeight: 700 }}>
              ← Back
            </Link>
            <Typography variant="caption" sx={{ color: theme.textSecondary }}>
              © {new Date().getFullYear()} Devang Borkar
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
