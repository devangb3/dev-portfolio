import { Box, Typography, Paper } from "@mui/material";

// Utility Functions
const groupSkillsByCategory = (skills) => {
  const categories = ['Languages', 'Frameworks', 'Cloud', 'AI', 'Tools', 'Database'];
  return categories.map(category => ({
    name: category,
    skills: skills.filter(skill => skill.category === category)
  })).filter(group => group.skills.length > 0);
};

const SkillsSection = ({ skills, theme, isVisible }) => {
  const skillCategories = groupSkillsByCategory(skills);
  
  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: theme.primary,
          fontWeight: 700,
          mb: 4,
          textAlign: 'center'
        }}
      >
        Technical Skills
      </Typography>
      
      {skillCategories.map((category) => (
        <Box key={category.name} sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.text,
              fontWeight: 600,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Box sx={{ 
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: theme.primary
            }} />
            {category.name}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {category.skills.map((skill, index) => (
              <Paper 
                key={skill.name}
                className="skill-card"
                sx={{ 
                  p: 2,
                  bgcolor: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  minWidth: 120,
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: `all 0.6s ease-in-out ${index * 0.2}s`,
                  '&:hover': {
                    bgcolor: `${theme.primary}10`,
                    borderColor: theme.primary
                  }
                }}
              >
                <Typography sx={{ fontSize: '1.2rem' }}>
                  {skill.icon}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme.text,
                    fontWeight: 500
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsSection;
