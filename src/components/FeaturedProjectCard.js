import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import {
  ArrowOutward,
  GitHub,
  Launch,
  MenuBookOutlined,
  PlayCircleOutline,
} from "@mui/icons-material";
import ProjectChips from "./ProjectChips";

const MediaSlot = ({ icon, label, url, theme }) => {
  const available = Boolean(url);

  return (
    <Box
      component={available ? "a" : "div"}
      href={available ? url : undefined}
      target={available ? "_blank" : undefined}
      rel={available ? "noreferrer" : undefined}
      aria-label={available ? `Open ${label}` : `${label} coming soon`}
      sx={{
        minHeight: 84,
        p: 1.5,
        border: `1px ${available ? "solid" : "dashed"} ${available ? theme.primary : theme.border}`,
        borderRadius: 2,
        color: available ? theme.primary : theme.textSecondary,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: available
          ? `${theme.primary}0D`
          : `repeating-linear-gradient(135deg, transparent, transparent 8px, ${theme.grid} 8px, ${theme.grid} 9px)`,
        transition: "transform 180ms ease, border-color 180ms ease, background 180ms ease",
        "&:hover": available
          ? {
              transform: "translateY(-2px)",
              background: `${theme.primary}14`,
            }
          : {},
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
        {icon}
        <Typography
          component="span"
          sx={{
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: available ? theme.primary : theme.textSecondary,
          }}
        >
          
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ color: theme.text, fontWeight: 700, fontSize: "0.82rem" }}>{label}</Typography>
        <Typography sx={{ color: theme.textSecondary, fontSize: "0.72rem", mt: 0.25 }}>
          {available ? "" : "Coming soon"}
        </Typography>
      </Box>
    </Box>
  );
};

const FeaturedProjectCard = ({ project, details, category, index, theme }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: theme.cardBg,
      border: `1px solid ${theme.border}`,
      borderRadius: 3,
      overflow: "hidden",
      position: "relative",
      boxShadow: "none",
      transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: "0 auto 0 0",
        width: 3,
        bgcolor: index % 2 === 0 ? theme.primary : theme.secondary,
      },
      "&:hover": {
        transform: "translateY(-5px)",
        borderColor: `${theme.primary}80`,
        boxShadow: theme.shadow,
      },
    }}
  >
    <CardContent sx={{ p: { xs: 2.5, md: 3.25 }, flex: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 2.5 }}>
        <Box>
          <Typography
            sx={{
              color: index % 2 === 0 ? theme.primary : theme.secondary,
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 0.75,
            }}
          >
            {category}
          </Typography>
          <Typography variant="h5" sx={{ color: theme.text, fontWeight: 760, lineHeight: 1.15 }}>
            {project.title}
          </Typography>
          <ProjectChips project={project} theme={theme} />
        </Box>
        <Typography
          aria-hidden="true"
          sx={{
            color: theme.border,
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: { xs: "2rem", md: "2.6rem" },
            fontWeight: 700,
            lineHeight: 0.9,
          }}
        >
          {/* {String(index + 1).padStart(2, "0")} */}
        </Typography>
      </Box>

      <Box sx={{ mb: 2.5 }}>
        <Typography sx={{ color: theme.textSecondary, fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", mb: 0.7 }}>
          The problem
        </Typography>
        <Typography sx={{ color: theme.text, fontSize: "0.98rem", lineHeight: 1.55 }}>
          {details.problem}
        </Typography>
      </Box>

      <Box sx={{ p: 1.75, mb: 2.5, bgcolor: `${theme.primary}08`, borderLeft: `2px solid ${theme.primary}` }}>
        <Typography sx={{ color: theme.primary, fontSize: "0.64rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", mb: 0.6 }}>
          My lane
        </Typography>
        <Typography sx={{ color: theme.textSecondary, fontSize: "0.86rem", lineHeight: 1.5 }}>
          {details.ownership}
        </Typography>
      </Box>

      <Box sx={{ mb: 2.5 }}>
        <Typography sx={{ color: theme.textSecondary, fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", mb: 1 }}>
          Proof of work
        </Typography>
        {details.proofPoints.map((point) => (
          <Box key={point} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start", mb: 1 }}>
            <Box sx={{ width: 6, height: 6, bgcolor: theme.secondary, mt: 0.75, flexShrink: 0 }} />
            <Typography sx={{ color: theme.textSecondary, fontSize: "0.84rem", lineHeight: 1.48 }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
        {project.technologies.slice(0, 6).map((technology) => (
          <Chip
            key={technology}
            label={technology}
            size="small"
            sx={{
              height: 24,
              bgcolor: "transparent",
              color: theme.textSecondary,
              border: `1px solid ${theme.border}`,
              fontSize: "0.7rem",
            }}
          />
        ))}
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 1 }}>
        <MediaSlot
          icon={<MenuBookOutlined sx={{ fontSize: 19 }} />}
          label="Case study"
          url={details.caseStudyUrl}
          theme={theme}
        />
        <MediaSlot
          icon={<PlayCircleOutline sx={{ fontSize: 20 }} />}
          label="Walkthrough video"
          url={details.videoUrl}
          theme={theme}
        />
      </Box>
    </CardContent>

    {(project.isOpenSource || project.demoUrl !== "#") && (
      <CardActions sx={{ px: { xs: 2.5, md: 3.25 }, pb: 3, pt: 0, gap: 1 }}>
        {project.isOpenSource && project.githubUrl !== "#" && (
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<GitHub />}
            endIcon={<ArrowOutward sx={{ fontSize: 15 }} />}
            sx={{ color: theme.primary, border: `1px solid ${theme.border}`, px: 1.5 }}
          >
            Code
          </Button>
        )}
        {project.demoUrl !== "#" && (
          <Button
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            startIcon={<Launch />}
            endIcon={<ArrowOutward sx={{ fontSize: 15 }} />}
            sx={{ color: theme.text, border: `1px solid ${theme.border}`, px: 1.5 }}
          >
            Live
          </Button>
        )}
      </CardActions>
    )}
  </Card>
);

export default FeaturedProjectCard;
