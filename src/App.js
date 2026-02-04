import React, { useEffect, useMemo, useRef, useState } from "react";
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
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import {
  Download,
  ArrowDownward,
  Description,
  Code,
  Psychology,
  Rocket,
  Star,
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
import { applyThemeToCssVars, getMuiTheme, getThemeTokens } from "./theme";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);
  const theme = useMemo(() => getThemeTokens(darkMode ? "dark" : "light"), [darkMode]);
  const muiTheme = useMemo(() => getMuiTheme(theme), [theme]);

  useEffect(() => {
    applyThemeToCssVars(theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 120);

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      setShowScroll(window.scrollY < 120);

      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const raf =
      typeof window.requestAnimationFrame === "function"
        ? window.requestAnimationFrame.bind(window)
        : (cb) => window.setTimeout(cb, 16);
    const caf =
      typeof window.cancelAnimationFrame === "function"
        ? window.cancelAnimationFrame.bind(window)
        : (id) => window.clearTimeout(id);

    let rafId = null;
    const handleMouseMove = (e) => {
      if (!e) return;
      const x = e.clientX;
      const y = e.clientY;
      if (rafId != null) return;
      rafId = raf(() => {
        document.documentElement.style.setProperty("--mx", `${x}px`);
        document.documentElement.style.setProperty("--my", `${y}px`);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId != null) caf(rafId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Box sx={{ 
        bgcolor: theme.background,
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}>

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
                aria-current={activeSection === section.toLowerCase() ? 'location' : undefined}
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
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
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
            rel="noreferrer"
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
                      backgroundSize: '200% 200%',
                      backgroundPosition: '0% 50%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 34px var(--glow-primary)',
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
            </Grid>
            
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </Container>
        {/* Social Links & CTA */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 6 }}>
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
        </Container>
        {/* Scroll Indicator */}
        {showScroll && (
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: 1,
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
          <Grid container spacing={6} alignItems="flex-start">
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
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-in-out',
              mb: 4
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
                mb: 3
              }}
            >
              Get in Touch
            </Typography>
          </Box>

          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              color: theme.textSecondary,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              mb: 6,
              maxWidth: '100%'
            }}
          >
            I'm currently open to new opportunities in the Bay Area and remote positions. 
            Whether you have a project in mind, want to collaborate, or just want to say hi, 
            I'd love to hear from you!
          </Typography>

          <Grid container spacing={6} alignItems="flex-start">
            {/* Left side - Contact Info */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-in-out'
                }}
              >
                {/* Contact Information Cards */}
                <ContactInfo contacts={contactInfo} theme={theme} isVisible={isVisible} />
              </Box>
            </Grid>
            {/* Right side - Social Links */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease-in-out',
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', lg: 'flex-end' }
                }}
              >
                <SocialLinks links={socialLinks} theme={theme} isVisible={isVisible} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer theme={theme} />
    </Box>
    </ThemeProvider>
  );
}

export default App;
