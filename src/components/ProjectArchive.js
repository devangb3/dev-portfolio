import { useMemo, useState } from "react";
import { Box, Button, Chip, Collapse, Grid, Typography } from "@mui/material";
import { ExpandMore, FilterList } from "@mui/icons-material";
import ArchiveProjectCard from "./ArchiveProjectCard";

const ProjectArchive = ({ projects, categories, categoryById, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => categoryById[project.id] === activeCategory);
  }, [activeCategory, categoryById, projects]);

  return (
    <Box sx={{ mt: { xs: 7, md: 10 } }}>
      <Button
        fullWidth
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="project-archive-content"
        sx={{
          p: { xs: 2, md: 2.5 },
          borderTop: `1px solid ${theme.border}`,
          borderBottom: `1px solid ${theme.border}`,
          borderRadius: 0,
          color: theme.text,
          justifyContent: "space-between",
          textAlign: "left",
          "&:hover": { bgcolor: `${theme.primary}08` },
        }}
      >
        <Box>
          <Typography sx={{ color: theme.primary, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", mb: 0.4 }}>
            Project archive
          </Typography>
          <Typography sx={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: { xs: "1.35rem", md: "1.75rem" }, fontWeight: 700 }}>
            Browse the other {projects.length} builds
          </Typography>
        </Box>
        <ExpandMore
          sx={{
            color: theme.primary,
            fontSize: 32,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
        />
      </Button>

      <Collapse in={isOpen} timeout={280} unmountOnExit>
        <Box id="project-archive-content" sx={{ pt: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1, mb: 1.25 }}>
            <FilterList sx={{ color: theme.textSecondary, mr: 0.5 }} />
            {["All", ...categories].map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "filled" : "outlined"}
                sx={{
                  color: activeCategory === category ? theme.background : theme.textSecondary,
                  bgcolor: activeCategory === category ? theme.primary : "transparent",
                  borderColor: activeCategory === category ? theme.primary : theme.border,
                  fontWeight: activeCategory === category ? 750 : 550,
                  "&:hover": { bgcolor: activeCategory === category ? theme.primary : `${theme.primary}12` },
                }}
              />
            ))}
          </Box>
          <Typography sx={{ color: theme.textSecondary, fontSize: "0.78rem", mb: 3 }}>
            Showing {filteredProjects.length} of {projects.length} archived projects
          </Typography>

          <Grid container spacing={2.5}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <ArchiveProjectCard project={project} category={categoryById[project.id]} theme={theme} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ProjectArchive;
