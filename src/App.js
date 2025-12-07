import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Chip,
  Grid,
  Avatar,
  Paper,
  TextField
} from "@mui/material";
import {
  Download,
  ArrowDownward,
  Description,
  Code,
  Psychology,
  Rocket,
  Star,
  Send,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import ProjectChips from "./components/ProjectChips";
import ProjectActions from "./components/ProjectActions";
import SkillsSection from "./components/SkillsSection";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import HeroSocialLinks from "./components/HeroSocialLinks";
import Footer from "./components/Footer";
import { projects, skills, experiences, contactInfo, socialLinks, heroSocialLinks } from "./constants";

// Theme Configuration
const createTheme = (darkMode) => ({
  primary: darkMode ? '#00ff88' : '#00cc6a',
  secondary: darkMode ? '#ff6b6b' : '#ff5252',
  background: darkMode ? '#0a0a0a' : '#fafafa',
  surface: darkMode ? '#121212' : '#ffffff',
  cardBg: darkMode ? '#1a1a1a' : '#ffffff',
  text: darkMode ? '#ffffff' : '#000000',
  textSecondary: darkMode ? '#ffffff80' : '#666666',
  border: darkMode ? '#333333' : '#e0e0e0'
});

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  const theme = createTheme(darkMode);

  useEffect(() => {
    // Set mounted state immediately
    setIsMounted(true);
    
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      // Add safety check for window object
      if (typeof window !== 'undefined') {
        setShowScroll(window.scrollY > 100);
        
        // Update active section based on scroll position
        const sections = ['home', 'about', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && element.offsetTop !== undefined && element.offsetHeight !== undefined) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    const handleMouseMove = (e) => {
      if (e && typeof e.clientX !== 'undefined' && typeof e.clientY !== 'undefined') {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    // Initial scroll check after a delay
    const scrollTimer = setTimeout(handleScroll, 150);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box sx={{ 
      bgcolor: theme.background,
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      '& *': {
        boxSizing: 'border-box'
      },
      // Animated background particles
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.primary}15 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'background 0.3s ease'
      }
    }}>
      {/* Enhanced CSS with animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            background: ${theme.background};
            color: ${theme.text};
            overflow-x: hidden;
          }
          
          .gradient-text {
            background: linear-gradient(45deg, ${theme.primary}, ${theme.secondary});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 3s ease-in-out infinite;
          }
          
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes slideInUp {
            from {
              transform: translateY(100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
          }
          
          .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          .pulse-element {
            animation: pulse 2s infinite;
          }
          
          .skill-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
          }
          
          .skill-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
          }
          
          .project-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .project-card:hover {
            transform: translateY(-12px) rotateY(5deg);
            box-shadow: 0 25px 50px rgba(0, 255, 136, 0.3);
          }
          
          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid ${theme.primary};
            white-space: nowrap;
            margin: 0 auto;
            animation: typing 4s steps(40, end), blink-caret 0.75s step-end infinite;
          }
          
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: ${theme.primary} }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
          }
          
          .scroll-animate.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .neon-border {
            border: 2px solid ${theme.primary};
            box-shadow: 0 0 20px ${theme.primary}40;
          }
          
          .sparkle {
            animation: sparkle 1.5s infinite;
          }
          
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* Enhanced Navigation */}
      <AppBar position="fixed" sx={{ 
        background: `linear-gradient(135deg, ${theme.surface}95 0%, ${theme.cardBg}90 100%)`,
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.border}`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('home')}
          >
            DB
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {['Home', 'About', 'Projects', 'Contact'].map((section) => (
              <Button 
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                sx={{ 
                  color: activeSection === section.toLowerCase() ? theme.primary : theme.text,
                  fontWeight: activeSection === section.toLowerCase() ? 600 : 400,
                  position: 'relative',
                  '&:hover': {
                    color: theme.primary,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: '50%',
                    width: activeSection === section.toLowerCase() ? '100%' : '0%',
                    height: 2,
                    background: theme.primary,
                    transform: 'translateX(-50%)',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                {section}
              </Button>
            ))}
            
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              sx={{ 
                color: theme.text,
                ml: 1,
                '&:hover': {
                  color: theme.primary,
                  transform: 'rotate(180deg)',
                  transition: 'all 0.3s'
                }
              }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
          <Button 
            variant="outlined" 
            startIcon={<Description />}
            sx={{ 
              color: theme.primary,
              borderColor: theme.primary,
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': {
                borderColor: theme.primary,
                backgroundColor: `${theme.primary}20`,
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 25px ${theme.primary}40`
              }
            }}
            href={process.env.PUBLIC_URL + "/Devang_Resume.pdf"}
            target="_blank"
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>

      {/* Revolutionary Hero Section */}
      <Box 
        id="home"
        ref={heroRef}
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          background: `linear-gradient(135deg, ${theme.background} 0%, ${theme.surface} 100%)`,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 70%, ${theme.primary}15 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${theme.secondary}15 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              {isMounted && (
                <Box
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1s ease-in-out'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: theme.primary,
                      fontWeight: 600,
                      mb: 2,
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                      opacity: 0.9
                    }}
                  >
                    Welcome to my world
                  </Typography>
                  
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 800,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                      lineHeight: 1.1,
                      mb: 3,
                      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
                      animation: 'gradient-shift 3s ease-in-out infinite'
                    }}
                  >
                    I'm Devang
                    <br />
                    <span className="typewriter">Borkar</span>
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: theme.primary,
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}
                    >
                      Software Engineer
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: theme.textSecondary,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', md: '1.2rem' }
                      }}
                    >
                      UC Davis Graduate Student • Full Stack Developer • AI Engineer
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.textSecondary,
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      mb: 4,
                      maxWidth: 600
                    }}
                  >
                    Passionate about creating innovative solutions with cutting-edge technology. 
                    Specializing in Generative & Multimodal AI, Distributed systems, and scalable software architecture.
                  </Typography>
                </Box>
              )}
            </Grid>
            
            <Grid item xs={12} md={6}>
              {isMounted && (
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    position: 'relative',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1.5s ease-in-out'
                  }}
                >
                  <Box 
                    className="floating-element"
                    sx={{
                      width: { xs: 250, md: 350 },
                      height: { xs: 250, md: 350 },
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, ${theme.primary}40, ${theme.secondary}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `conic-gradient(from 0deg, ${theme.primary}40, ${theme.secondary}40, ${theme.primary}40)`,
                        animation: 'spin 10s linear infinite'
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        right: 10,
                        bottom: 10,
                        background: theme.surface,
                        borderRadius: '50%',
                        zIndex: 1
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 200, md: 280 },
                        height: { xs: 200, md: 280 },
                        fontSize: { xs: '4rem', md: '6rem' },
                        background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                        zIndex: 2,
                        position: 'relative',
                        fontWeight: 800
                      }}
                    >
                      DB
                    </Avatar>
                  </Box>
                  
                  {/* Floating Tech Icons */}
                  <Box sx={{ position: 'absolute', top: '10%', left: '10%', animation: 'float 6s ease-in-out infinite' }}>
                    <Chip icon={<Code />} label="Agentic AI" size="small" sx={{ bgcolor: theme.primary, color: theme.background }} />
                  </Box>
                  <Box sx={{ position: 'absolute', top: '20%', right: '10%', animation: 'float 6s ease-in-out infinite 2s' }}>
                    <Chip icon={<Psychology />} label="Machine Learning" size="small" sx={{ bgcolor: theme.secondary, color: theme.background }} />
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: '20%', left: '20%', animation: 'float 6s ease-in-out infinite 4s' }}>
                    <Chip icon={<Rocket />} label="Distributed Systems" size="small" sx={{ bgcolor: theme.primary, color: theme.background }} />
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
        {/* Social Links & CTA */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 6 }}>
          {isMounted && (
            <Box 
              sx={{ 
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 2s ease-in-out'
              }}
            >
              <HeroSocialLinks links={heroSocialLinks} theme={theme} isVisible={isVisible} />
              
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  href={process.env.PUBLIC_URL + "/Devang_Resume.pdf"}
                  download
                  startIcon={<Download />}
                  sx={{
                    bgcolor: theme.primary,
                    color: theme.background,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      bgcolor: theme.primary,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 40px ${theme.primary}60`
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection('contact')}
                  startIcon={<Send />}
                  sx={{
                    color: theme.primary,
                    borderColor: theme.primary,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: theme.primary,
                      bgcolor: `${theme.primary}20`,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 25px ${theme.primary}40`
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          )}
        </Container>
        {/* Scroll Indicator */}
        {isMounted && showScroll && (
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            onClick={() => scrollToSection('about')}
          >
            <Typography 
              variant="caption" 
              sx={{ 
                color: theme.textSecondary,
                display: 'block',
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              Scroll to explore
            </Typography>
            <IconButton 
              sx={{ 
                color: theme.primary,
                animation: 'bounce 2s infinite',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: theme.secondary
                }
              }}
            >
              <ArrowDownward />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Revolutionary About Section */}
      <Box id="about" sx={{ 
        py: 12, 
        bgcolor: theme.surface,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${theme.primary}05, ${theme.secondary}05)`,
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left side - Content */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-in-out'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.primary,
                    fontWeight: 600,
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: 2
                  }}
                >
                  Get to know me
                </Typography>
                
                <Typography 
                  variant="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '3rem' },
                    background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 4
                  }}
                >
                  About Me
                </Typography>
                
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: theme.textSecondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  I'm an AI Enthusiast currently pursuing my Master's in Computer Science at UC Davis 
                  with a focus on Artificial Intelligence, Distributed Systems, and Software Engineering. 
                </Typography>
                
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: theme.textSecondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4
                  }}
                >
                  I bring over 2 years of experience as a Software Engineer, where I enhanced user experience 
                  by implementing new features and improving system performance. I'm passionate about building 
                  scalable solutions and optimizing system architecture.
                </Typography>
                
                {/* Experience Timeline */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: theme.primary, fontWeight: 600 }}>
                    Experience Timeline
                  </Typography>
                  {experiences.map((exp, index) => (
                    <Box key={index} sx={{ mb: 3, pl: 3, borderLeft: `3px solid ${theme.primary}30`, position: 'relative' }}>
                      <Box sx={{ 
                        position: 'absolute',
                        left: -8,
                        top: 8,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: theme.primary,
                        boxShadow: `0 0 0 4px ${theme.surface}`
                      }} />
                      <Typography variant="h6" sx={{ color: theme.text, fontWeight: 600 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: theme.primary, fontWeight: 500 }}>
                        {exp.company} • {exp.period}
                      </Typography>
                      {Array.isArray(exp.description) ? (
                        <Box sx={{ mt: 1, pl: 2 }}>
                          {exp.description.map((desc, i) => (
                            <Typography 
                              key={i} 
                              variant="body2" 
                              sx={{ 
                                color: theme.textSecondary,
                                display: 'list-item', 
                                listStyleType: 'disc',
                                mb: 0.5 
                              }}
                            >
                              {desc}
                            </Typography>
                          ))}
                        </Box>
                      ) : (
                        <Typography variant="body2" sx={{ color: theme.textSecondary, mt: 1 }}>
                          {exp.description}
                        </Typography>
                      )}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {exp.technologies.map((tech, techIndex) => (
                          <Chip 
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{ 
                              bgcolor: `${theme.primary}15`,
                              color: theme.primary,
                              fontWeight: 500
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            
            {/* Right side - Skills */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1.5s ease-in-out'
                }}
              >
                <SkillsSection skills={skills} theme={theme} isVisible={isVisible} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Spectacular Projects Section */}
      <Box id="projects" sx={{ 
        py: 12, 
        bgcolor: theme.background,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 8,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-in-out'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: theme.primary,
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: 2
              }}
            >
              My Work
            </Typography>
            
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '3rem' },
                background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Featured Projects
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.textSecondary,
                fontSize: '1.1rem',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Explore my latest projects showcasing cutting-edge technologies and innovative solutions
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Box
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    transition: `all 0.6s ease-in-out ${index * 0.1}s`,
                    height: '100%'
                  }}
                >
                  <Card 
                    className="project-card"
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: theme.cardBg,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 4,
                        background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                        zIndex: 1
                      }
                    }}
                  >
                    <CardContent sx={{ flex: 1, p: 3 }}>
                      {/* Project Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: `${theme.primary}20`,
                            color: theme.primary,
                            width: 50,
                            height: 50
                          }}
                        >
                          <Code />
                        </Avatar>
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: theme.text,
                              fontWeight: 700,
                              fontSize: '1.1rem'
                            }}
                          >
                            {project.title}
                          </Typography>
                          <ProjectChips project={project} theme={theme} />
                        </Box>
                      </Box>
                      
                      {/* Project Description */}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.textSecondary,
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          mb: 3
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      {/* Technologies */}
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: theme.text,
                            fontWeight: 600,
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <Rocket sx={{ fontSize: 16 }} />
                          Technologies
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.slice(0, 6).map((tech) => (
                            <Chip 
                              key={tech} 
                              label={tech} 
                              size="small"
                              sx={{ 
                                bgcolor: `${theme.primary}10`,
                                color: theme.primary,
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                height: 24,
                                '&:hover': { 
                                  bgcolor: `${theme.primary}20`,
                                  transform: 'scale(1.05)'
                                }
                              }}
                            />
                          ))}
                          {project.technologies.length > 6 && (
                            <Chip 
                              label={`+${project.technologies.length - 6} more`}
                              size="small"
                              sx={{ 
                                bgcolor: `${theme.textSecondary}20`,
                                color: theme.textSecondary,
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                height: 24
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                      
                      {/* Key Highlights */}
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: theme.text,
                            fontWeight: 600,
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <Star sx={{ fontSize: 16 }} />
                          Key Highlights
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                            <Typography 
                              key={highlightIndex}
                              component="div"
                              variant="body2" 
                              sx={{ 
                                color: theme.textSecondary,
                                fontSize: '0.85rem',
                                lineHeight: 1.5,
                                mb: 1,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1
                              }}
                            >
                              <Box sx={{ 
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                bgcolor: theme.primary,
                                mt: 0.75,
                                flexShrink: 0
                              }} />
                              {highlight}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                    
                    <ProjectActions project={project} theme={theme} />
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Interactive Contact Section */}
      <Box id="contact" sx={{ 
        py: 12, 
        bgcolor: theme.surface,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.primary}05, ${theme.secondary}05)`,
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            {/* Left side - Contact Info */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-in-out'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.primary,
                    fontWeight: 600,
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: 2
                  }}
                >
                  Let's Connect
                </Typography>
                
                <Typography 
                  variant="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '3rem' },
                    background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 4
                  }}
                >
                  Get in Touch
                </Typography>
                
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: theme.textSecondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 6
                  }}
                >
                  I'm currently open to new opportunities in the Bay Area and remote positions. 
                  Whether you have a project in mind, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </Typography>
                
                {/* Contact Information Cards */}
                <ContactInfo contacts={contactInfo} theme={theme} isVisible={isVisible} />
                
                {/* Social Links */}
                <SocialLinks links={socialLinks} theme={theme} isVisible={isVisible} />
              </Box>
            </Grid>
            
            {/* Right side - Interactive Form */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1.5s ease-in-out'
                }}
              >
                <Paper 
                  sx={{ 
                    p: 4,
                    bgcolor: theme.cardBg,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 3,
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 20px 40px ${theme.primary}10`
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: theme.text,
                      fontWeight: 700,
                      mb: 3,
                      textAlign: 'center'
                    }}
                  >
                    Send me a message
                  </Typography>
                  <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': { 
                              '&.Mui-focused fieldset': { borderColor: theme.primary },
                              '& fieldset': { borderColor: theme.border },
                              '&:hover fieldset': { borderColor: theme.primary },
                            },
                            '& .MuiInputLabel-root.Mui-focused': { color: theme.primary },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': { 
                              '&.Mui-focused fieldset': { borderColor: theme.primary },
                              '& fieldset': { borderColor: theme.border },
                              '&:hover fieldset': { borderColor: theme.primary },
                            },
                            '& .MuiInputLabel-root.Mui-focused': { color: theme.primary },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleFormChange}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': { 
                              '&.Mui-focused fieldset': { borderColor: theme.primary },
                              '& fieldset': { borderColor: theme.border },
                              '&:hover fieldset': { borderColor: theme.primary },
                            },
                            '& .MuiInputLabel-root.Mui-focused': { color: theme.primary },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleFormChange}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': { 
                              '&.Mui-focused fieldset': { borderColor: theme.primary },
                              '& fieldset': { borderColor: theme.border },
                              '&:hover fieldset': { borderColor: theme.primary },
                            },
                            '& .MuiInputLabel-root.Mui-focused': { color: theme.primary },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          startIcon={<Send />}
                          sx={{
                            bgcolor: theme.primary,
                            color: theme.background,
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            py: 1.5,
                            borderRadius: 2,
                            '&:hover': {
                              bgcolor: theme.primary,
                              transform: 'translateY(-4px)',
                              boxShadow: `0 12px 40px ${theme.primary}60`
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer theme={theme} />
    </Box>
  );
}

export default App;
