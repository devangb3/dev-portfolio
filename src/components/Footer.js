import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const footerSocialLinks = [
  { icon: <GitHub />, url: 'https://github.com/devangb3' },
  { icon: <LinkedIn />, url: 'https://linkedin.com/in/devang-borkar-710b49201' },
  { icon: <Email />, url: 'mailto:devangborkar3@gmail.com' }
];

const Footer = ({ theme }) => (
  <Box sx={{ 
    py: 6,
    bgcolor: theme.cardBg,
    borderTop: `1px solid ${theme.border}`,
    textAlign: 'center'
  }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
        {footerSocialLinks.map((social, index) => (
          <IconButton 
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            sx={{ 
              color: theme.textSecondary,
              '&:hover': {
                color: theme.primary,
                transform: 'translateY(-2px)'
              }
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
      
      <Divider sx={{ bgcolor: theme.border, mb: 3 }} />
      
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.textSecondary,
          opacity: 0.8
        }}
      >
        © {new Date().getFullYear()} Devang Borkar. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
