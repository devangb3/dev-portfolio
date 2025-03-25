import React, { useState, useEffect } from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Container, 
  Typography, 
  Box,
  Card,
  CardContent,
  CardActions,
  Fade,
  IconButton,
  Chip
} from "@mui/material";
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Download, 
  ArrowDownward,
  Description 
} from '@mui/icons-material';

// Add this new component after the imports
const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.337 1.494 3.834 1.494 1.498 0 2.853-.513 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
);

const projects = [
  {
    id: "atom",
    title: "Atom (Portfolio Management Software)",
    description: "Engineered scalable backend architectures for a high-traffic wealth management platform, enabling real-time trading capabilities and enhancing performance through cloud infrastructure optimization and modular system upgrades.",
    technologies: ["Dot Net Core 6.0", "C#", "JavaScript", "Azure", "AWS", "Angular", "TypeScript", "SQL"],
    highlights: [
      "Reduced data retrieval times by 40%",
      "Implemented real-time trading capabilities",
      "Optimized cloud infrastructure",
      "Built scalable backend architecture"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3"
  },
  {
    id: "algotrade",
    title: "AlgoTrade (Stock Prediction Platform for HFTs)",
    description: "Developed a platform allowing end-users to view which predictive model performs best on a given asset at a specific time and implemented continuous model retraining and updating to improve prediction accuracy over time.",
    technologies: ["Flask", "MongoDB", "ReactJS", "Docker", "Pytorch", "Scikit-learn", "Pandas", "Deep Learning"],
    highlights: [
      "Implemented continuous model retraining",
      "Built predictive model comparison system",
      "Improved prediction accuracy over time",
      "Integrated multiple ML frameworks"
    ],
    demoUrl: "https://rapidapi.com/tradnomic-tradnomic-default/api/crypto-real-time-indicators-and-probabilities",
    githubUrl: "https://github.com/devangb3"
  },
  {
    id: "resshare",
    title: "ResShare (Decentralized File Sharing System)",
    description: "Built a robust blockchain based file sharing system on top of the ResilientDB using IPFS for secure and efficient file distribution that ensures data integrity and availability.",
    technologies: ["Python", "Flask", "IPFS", "ResilientDB", "ReactJS", "GraphQL", "Distributed Systems"],
    highlights: [
      "Implemented blockchain-based security",
      "Integrated IPFS for file distribution",
      "Ensured data integrity and availability",
      "Built distributed system architecture"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ResilientApp/ResShare-Backend"
  },
  {
    id: "reschat",
    title: "ResChat (Decentralized Chatting System)",
    description: "Built a robust blockchain-based chatting system on top of ResilientDB using IPFS for private and high-performance messaging with file distribution capabilities, ensuring data integrity and availability; part of the Apache Software Foundation Incubator Project..",
    technologies: ["Python", "Flask", "IPFS", "ResilientDB", "ReactJS", "GraphQL", "Distributed Systems", "C++", "Bazel"],
    highlights: [
      "Implemented end-to-end encryption and IPFS-based distributed storage",
      "Built a blockchain-based chat system using ResilientDB and IPFS to ensure data integrity and censorship resistance.",
      ": Contributed to the Apache Software Foundation Incubator Project, promoting decentralized messaging innovation."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ResilientApp/ResChat"
  },
  {
    id: "quiz",
    title: "LLM Quiz Generator",
    description: "Built a Quiz Generator where learners can upload their study material and instantly get Quiz questions that would help them assess their strengths and weaknesses.",
    technologies: ["Python", "Flask", "React", "APIs", "Deepseek", "AI Development", "Vibe Coding", "Cursor"],
    highlights: [
      "Leveraged Cursor to build an efficient platform that would be helpful for students."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLM-Quiz"
  }
];

const skills = [
  "Java", "C#", "C++", "Python3", "Javascript", 
  "SQL", "React Native", "NodeJS", "AWS", 
  "Docker", "Flask", "Machine Learning", "LLMs",
  "ChatGPT API", "Vision Language Models(VLM), Vibe Coding, Github Copilot, Cursor"
];
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ 
      bgcolor: '#121212',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      '& *': {
        boxSizing: 'border-box'
      }
    }}>
      {/* Add CSS reset styles */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-color: #121212;
          }
        `}
      </style>

      {/* Fixed Navigation - Updated */}
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'rgba(18, 18, 18, 0.8)', 
        backdropFilter: 'blur(8px)',
        borderBottom: 'none' // Remove any possible border
      }}>
        <Toolbar>
          {['About', 'Projects', 'Contact'].map((section) => (
            <Button 
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              sx={{ 
                color: 'white', 
                mx: 1,
                '&:hover': {
                  color: '#00ff88',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              {section}
            </Button>
          ))}
          <Button 
            variant="outlined" 
            startIcon={<Description />}
            sx={{ 
              ml: 'auto',
              color: '#00ff88',
              borderColor: '#00ff88',
              '&:hover': {
                borderColor: '#00ff88',
                backgroundColor: 'rgba(0, 255, 136, 0.1)'
              }
            }}
            href={process.env.PUBLIC_URL + "/BorkarDevang.pdf"}
            target="_blank"
          >
            View Resume
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section - Updated */}
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(45deg, #121212 0%, #1a1a1a 100%)',
          margin: 0,
          padding: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
          }
        }}
      >
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                color: 'white',
                textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
                fontWeight: 'bold'
              }}
            >
              Hello, I'm Devang Borkar
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: '#00ff88' }}>
              Software Engineer
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: '#ffffff80' }}>
              UC Davis Graduate Student | Full Stack Developer | AI Enthusiast
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
              <IconButton 
                sx={{ 
                  color: '#00ff88',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                  }
                }}
                href="https://github.com/devangb3" 
                target="_blank"
              >
                <GitHub />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#00ff88',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                  }
                }}
                href="https://linkedin.com/in/devang-borkar-710b49201" 
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#00ff88',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                  }
                }}
                href="mailto:devangborkar3@gmail.com"
              >
                <Email />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#00ff88',
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                  }
                }}
                href="https://leetcode.com/u/devangborkar3/"  // Replace with your LeetCode profile URL
                target="_blank"
              >
                <LeetCodeIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              href="BorkarDevang.pdf"
              download
              startIcon={<Download />}
              sx={{
                bgcolor: '#00ff88',
                color: '#121212',
                '&:hover': {
                  bgcolor: '#00cc6a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(0, 255, 136, 0.4)'
                },
                transition: 'all 0.3s'
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Fade>
        <Fade in={isVisible} timeout={2000}>
          <IconButton 
            onClick={() => scrollToSection('about')}
            sx={{ 
              position: 'absolute',
              bottom: 40,
              color: '#00ff88',
              animation: 'bounce 2s infinite'
            }}
          >
            <ArrowDownward />
          </IconButton>
        </Fade>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ 
        py: 8, 
        bgcolor: '#121212',
        borderTop: 'none',
        borderBottom: 'none'
      }}>
          <Container>
          <Typography variant="h3" gutterBottom sx={{ color: '#00ff88' }}>About Me</Typography>
          <Typography variant="body1" paragraph sx={{ color: 'white' }}>
            I am a AI Enthusiast currently pursuing my Master's in Computer Science at UC Davis with a focus on Artificial Intelligence, Distributed Systems 
            and Software Engineering. I bring over 2 years of experience as a Software Engineer, 
            where I enhanced user experience by implementing new features and improving system performance. 
            I'm passionate about building scalable solutions and optimizing system architecture.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4, color: '#00ff88' }}>Technical Skills</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {skills.map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                sx={{ 
                  color: 'white',
                  borderColor: '#00ff88',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s'
                }}
                variant="outlined" 
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ 
        py: 8, 
        bgcolor: '#121212',
        borderTop: 'none',
        borderBottom: 'none'
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h3" gutterBottom sx={{ color: '#00ff88' }}>Projects</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {projects.map((project) => (
              <Card 
                key={project.id}
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s',
                  bgcolor: '#1a1a1a',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px rgba(0, 255, 136, 0.2)'
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#00ff88' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ffffff80' }} paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech} 
                        size="small"
                        sx={{ 
                          color: 'white',
                          bgcolor: 'rgba(0, 255, 136, 0.1)',
                          '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.2)' }
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="subtitle2" gutterBottom sx={{ color: '#00ff88' }}>
                    Key Highlights:
                  </Typography>
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>
                        <Typography variant="body2" sx={{ color: '#ffffff80' }}>
                          {highlight}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href={project.githubUrl} 
                    target="_blank" 
                    startIcon={<GitHub />}
                    sx={{ 
                      color: '#00ff88',
                      '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.1)' }
                    }}
                  >
                    View Source
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ 
        py: 8, 
        bgcolor: '#121212',
        borderTop: 'none',
        borderBottom: 'none'
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h3" gutterBottom sx={{ color: '#00ff88' }}>Get in Touch</Typography>
          <Typography variant="body1" paragraph sx={{ color: 'white' }}>
            I'm currently open to new opportunities in the Bay Area. Feel free to reach out!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<Email />}
              href="mailto:devangborkar3@gmail.com"
              sx={{
                bgcolor: '#00ff88',
                color: '#121212',
                '&:hover': {
                  bgcolor: '#00cc6a',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Email Me
            </Button>
            <Button 
              variant="outlined"
              startIcon={<LinkedIn />}
              href="https://linkedin.com/in/devang-borkar-710b49201"
              target="_blank"
              sx={{
                color: '#00ff88',
                borderColor: '#00ff88',
                '&:hover': {
                  borderColor: '#00ff88',
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Connect on LinkedIn
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Scroll to top button */}
       {/* Scroll to top button - Updated */}
       <Fade in={showScroll}>
        <IconButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            bgcolor: '#00ff88',
            color: '#121212',
            '&:hover': {
              bgcolor: '#00cc6a',
              transform: 'translateY(-2px)'
            },
            zIndex: 2,
            border: 'none'
          }}
        >
          <ArrowDownward sx={{ transform: 'rotate(180deg)' }} />
        </IconButton>
      </Fade>
    </Box>
  );
}

export default App;