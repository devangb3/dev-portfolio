import { Button, CardActions } from "@mui/material";
import { GitHub, Launch } from '@mui/icons-material';

const ProjectActions = ({ project, theme }) => (
  <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
    {project.hasPublicRepo && (
      <Button 
        variant="outlined"
        href={project.githubUrl} 
        target="_blank" 
        rel="noreferrer"
        startIcon={<GitHub />}
        sx={{ 
          color: theme.primary,
          borderColor: theme.primary,
          fontWeight: 600,
          flex: 1,
          '&:hover': { 
            borderColor: theme.primary,
            bgcolor: `${theme.primary}10`,
            transform: 'translateY(-2px)'
          }
        }}
      >
        Code
      </Button>
    )}
    {project.demoUrl !== "#" && (
      <Button 
        variant="contained"
        href={project.demoUrl} 
        target="_blank" 
        rel="noreferrer"
        startIcon={<Launch />}
        sx={{ 
          bgcolor: theme.primary,
          color: theme.background,
          fontWeight: 600,
          flex: 1,
          '&:hover': { 
            bgcolor: theme.primary,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 25px ${theme.primary}40`
          }
        }}
      >
        Demo
      </Button>
    )}
  </CardActions>
);

export default ProjectActions;
