import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import ProjectActions from "./ProjectActions";
import ProjectChips from "./ProjectChips";

const ArchiveProjectCard = ({ project, category, theme }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: theme.cardBg,
      border: `1px solid ${theme.border}`,
      borderRadius: 2.5,
      boxShadow: "none",
      transition: "transform 180ms ease, border-color 180ms ease",
      "&:hover": {
        transform: "translateY(-3px)",
        borderColor: `${theme.primary}70`,
      },
    }}
  >
    <CardContent sx={{ p: 2.5, flex: 1 }}>
      <Typography
        sx={{
          color: theme.primary,
          fontSize: "0.62rem",
          fontWeight: 800,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          mb: 0.75,
        }}
      >
        {category}
      </Typography>
      <Typography variant="h6" sx={{ color: theme.text, fontWeight: 740, lineHeight: 1.2, mb: 0.75 }}>
        {project.title}
      </Typography>
      <ProjectChips project={project} theme={theme} />
      <Typography
        sx={{
          color: theme.textSecondary,
          fontSize: "0.84rem",
          lineHeight: 1.55,
          my: 2,
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.65 }}>
        {project.technologies.slice(0, 4).map((technology) => (
          <Chip
            key={technology}
            label={technology}
            size="small"
            sx={{ height: 22, bgcolor: `${theme.primary}0A`, color: theme.textSecondary, fontSize: "0.66rem" }}
          />
        ))}
      </Box>
    </CardContent>
    <ProjectActions project={project} theme={theme} compact />
  </Card>
);

export default ArchiveProjectCard;
