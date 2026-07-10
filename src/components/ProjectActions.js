import { Button, CardActions } from "@mui/material";
import { GitHub, Launch } from '@mui/icons-material';

const ProjectActions = ({ project, theme, compact = false }) => {
  const hasCode = project.isOpenSource && project.githubUrl !== "#";
  const hasDemo = project.demoUrl !== "#";

  if (!hasCode && !hasDemo) return null;

  return (
    <CardActions sx={{ p: compact ? 2.5 : 3, pt: 0, gap: 1 }}>
      {hasCode && (
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
      {hasDemo && (
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
};

export default ProjectActions;
