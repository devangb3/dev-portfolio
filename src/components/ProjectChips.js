import { Box, Chip } from "@mui/material";

const ProjectChips = ({ project, theme }) => (
  <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
    {project.demoUrl !== "#" && (
      <Chip 
        label="Live Demo" 
        size="small" 
        sx={{ 
          bgcolor: `${theme.secondary}20`,
          color: theme.secondary,
          fontWeight: 600,
          height: 20,
          fontSize: '0.7rem'
        }}
      />
    )}
    {project.isOpenSource && (
      <Chip 
        label="Open Source" 
        size="small" 
        sx={{ 
          bgcolor: `${theme.primary}20`,
          color: theme.primary,
          fontWeight: 600,
          height: 20,
          fontSize: '0.7rem'
        }}
      />
    )}
  </Box>
);

export default ProjectChips;
