import { Box, IconButton } from "@mui/material";

const HeroSocialLinks = ({ links, theme, isVisible }) => (
  <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 6 }}>
    {links.map((social, index) => (
      <IconButton 
        key={social.label}
        sx={{ 
          width: 60,
          height: 60,
          color: theme.primary,
          bgcolor: `${theme.primary}10`,
          border: `2px solid ${theme.primary}30`,
          backdropFilter: 'blur(10px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
          transition: `all 0.6s ease-in-out ${index * 0.2}s`,
          '&:hover': { 
            transform: 'translateY(-8px) scale(1.1)',
            bgcolor: `${theme.primary}20`,
            boxShadow: `0 10px 30px ${theme.primary}40`,
            border: `2px solid ${theme.primary}60`
          },
        }}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        title={social.label}
      >
        {social.icon}
      </IconButton>
    ))}
  </Box>
);

export default HeroSocialLinks;
