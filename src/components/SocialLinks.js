import { Box, Button } from "@mui/material";

const SocialLinks = ({ links, theme, isVisible }) => (
  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
    {links.map((social, index) => (
      <Button 
        key={social.label}
        variant={social.primary ? 'contained' : 'outlined'}
        startIcon={social.icon}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          transition: `all 0.6s ease-in-out ${index * 0.2}s`,
          ...(social.primary ? {
            bgcolor: theme.primary,
            color: theme.background,
            fontWeight: 600,
            px: 4,
            py: 1.5,
            '&:hover': {
              bgcolor: theme.primary,
              transform: 'translateY(-4px)',
              boxShadow: `0 12px 40px ${theme.primary}60`
            }
          } : {
            color: theme.primary,
            borderColor: theme.primary,
            fontWeight: 600,
            px: 4,
            py: 1.5,
            '&:hover': {
              borderColor: theme.primary,
              bgcolor: `${theme.primary}10`,
              transform: 'translateY(-4px)'
            }
          }),
        }}
      >
        {social.label}
      </Button>
    ))}
  </Box>
);

export default SocialLinks;
