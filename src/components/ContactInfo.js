import { Box, Typography, Paper, Avatar } from "@mui/material";

const ContactInfo = ({ contacts, theme, isVisible }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
    {contacts.map((contact, index) => (
      <Paper 
        key={contact.label}
        sx={{ 
          p: 3,
          bgcolor: theme.cardBg,
          border: `1px solid ${theme.border}`,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          cursor: contact.isClickable ? 'pointer' : 'default',
          transition: 'all 0.3s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
          transitionDelay: `${index * 0.3}s`,
          '&:hover': {
            ...(contact.isClickable && {
              transform: 'translateX(10px)',
              bgcolor: `${theme.primary}10`,
              borderColor: theme.primary
            })
          }
        }}
        onClick={() => contact.isClickable && window.open(contact.href, '_blank')}
      >
        <Avatar 
          sx={{ 
            bgcolor: `${theme.primary}20`,
            color: theme.primary,
            width: 50,
            height: 50
          }}
        >
          {contact.icon}
        </Avatar>
        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.text,
              fontWeight: 600
            }}
          >
            {contact.label}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.textSecondary
            }}
          >
            {contact.value}
          </Typography>
        </Box>
      </Paper>
    ))}
  </Box>
);

export default ContactInfo;
