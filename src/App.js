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
  CardActions,
  IconButton,
  Chip,
  Grid,
  Avatar,
  Divider,
  Paper,
  TextField
} from "@mui/material";
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Download, 
  ArrowDownward,
  Description,
  Launch,
  Code,
  Psychology,
  Rocket,
  Star,
  Send,
  Phone,
  LocationOn,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';

// Add this new component after the imports
const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.337 1.494 3.834 1.494 1.498 0 2.853-.513 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
);

const projects = [
  {
    id: "algotrade",
    title: "HammerTrade (Stock Prediction Platform for HFTs)",
    description: "Developed a platform allowing end-users to view which predictive model performs best on a given asset at a specific time and implemented continuous model retraining and updating to improve prediction accuracy over time.",
    technologies: ["Flask", "MongoDB", "ReactJS", "Docker", "Pytorch", "Scikit-learn", "Pandas", "Deep Learning"],
    highlights: [
      "Implemented continuous model retraining",
      "Built predictive model comparison system",
      "Improved prediction accuracy over time",
      "Integrated multiple ML frameworks"
    ],
    demoUrl: "http://hammertrade.tradnomic.com/",
    githubUrl: "https://github.com/devangb3",
    isOpenSource: false,
    hasPublicRepo: false
  },
  {
    "id": "lh-multimodal-svc",
    "title": "Emotion-Aware Feedback System for Public Speaking",
    "description": "This project involved creating a service to process and analyze multimodal data (video, audio, text) to provide feedback on presentation skills. It uses Hume AI for emotional analysis and includes a coaching and visualization system.",
    "technologies": ["Python", "Hume AI", "Multimodal Data Processing", "AI Development", "Data Visualization"],
    "highlights": [
      "Engineered a pipeline for processing video, audio, and text data.",
      "Integrated Hume AI for emotional analysis of presentations.",
      "Developed a coaching and visualization system to provide actionable feedback.",
      "Created a system for one AI to judge the responses of another, ensuring high-quality feedback."
    ],
    "demoUrl": "https://multimodal-svc-frontend-277660335430.us-central1.run.app/",
    "githubUrl": "#",
    "isOpenSource": false,
    "hasPublicRepo": false
  },
  {
    id: "drug-condition-classifier",
    title: "Drug Condition Classifier (BERT Fine-Tuning)",
    description: "Developed and fine-tuned a BERT-based model for multi-class text classification to predict a patient's medical condition from drug review text. The project involved data cleaning, preprocessing, and training on over 126,000 samples.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "BERT", "Scikit-learn", "W&B", "Hugging Face Hub"],
    highlights: [
      "Built a data preprocessing pipeline to clean and prepare a large dataset of drug reviews for training, handling HTML artifacts and noisy entries.",
      "Fine-tuned a `bert-base-cased` model for a complex multi-class classification task with 821 unique medical conditions.",
      "Achieved 75.9% accuracy and a weighted F1-score of 0.75 on a test set containing over 52,000 samples.",
      "Published the final model and tokenizer to the Hugging Face Hub, making it accessible for inference via the `pipeline` API."
    ],
    demoUrl: "https://huggingface.co/devangb4/bert-drug-classification",
    githubUrl: "https://github.com/devangb3/HF-Transformers/blob/main/Drug_dataset_finetuning.ipynb",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "75Hard",
    title: "Tracker App for 75 Hard Challenge",
    description: "Developed a platform allowing end-users to track their progress for the 75 Hard Challenge.",
    technologies: ["Flask", "MongoDB", "ReactJS", "Docker", "Google Cloud Platform", "Tailwind CSS", "Python", "CI/CD"],
    highlights: [
      "Developed a full-stack application with a modular, service-oriented architecture.",
      "Built an interactive and responsive UI with React and Tailwind CSS, featuring data visualizations with Recharts.",
      "Integrated Google Cloud Platform for scalable and reliable cloud services",
      "Containerized both frontend and backend services with Docker for consistent deployment on Google Cloud Run."
    ],
    demoUrl: "https://hard-tracker-frontend-75-424176252593.us-west1.run.app/",
    githubUrl: "https://github.com/devangb3/75-Hard-Tracker",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "reschat",
    title: "ResChat (Decentralized Chatting System)",
    description: "Built a robust blockchain-based chatting system on top of ResilientDB using IPFS for private and high-performance messaging with file distribution capabilities, ensuring data integrity and availability; part of the Apache Software Foundation Incubator Project..",
    technologies: ["Python", "Flask", "IPFS", "ResilientDB", "ReactJS", "GraphQL", "Distributed Systems", "C++", "Bazel"],
    highlights: [
      "Implemented end-to-end encryption and IPFS-based distributed storage",
      "Built a blockchain-based chat system using ResilientDB and IPFS to ensure data integrity and censorship resistance.",
      "Contributed to the Apache Software Foundation Incubator Project, promoting decentralized messaging innovation."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ResilientApp/ResChat",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "ai-code-analyzer",
    title: "AI-Powered Code Analysis Tool (GitHub Action)",
    description: "Engineered a comprehensive code analysis system using a Python CLI and a GitHub Action. The tool leverages Google's Gemini AI to automatically analyze codebases, provide intelligent feedback on pull requests, and suggest architectural improvements.",
    technologies: ["Python", "Node.js", "GitHub Actions", "Gemini AI API", "Git", "CI/CD", "REST APIs"],
    highlights: [
      "Built an event-driven GitHub Action that analyzes code on pull requests, pushes, and issues.",
      "Integrated Google's Gemini AI to identify cross-file patterns, security vulnerabilities, and refactoring opportunities.",
      "Implemented intelligent change detection using multiple git diff strategies to focus analysis on relevant code changes.",
      "Designed a dual-system with a Python CLI for local analysis and a Node.js-based GitHub Action for CI/CD integration."
    ],
    demoUrl: "#",
    githubUrl: "#",
    isOpenSource: false,
    hasPublicRepo: false
  },
  {
    id: "dc-menu-analyzer",
    title: "DC Menu Analyzer",
    description: "Developed a web application that helps UC Davis students analyze Tercero Dining Commons menu items based on their dietary restrictions and preferences. The application uses AI to provide personalized menu recommendations while considering dietary restrictions, allergies, and caloric requirements.",
    technologies: ["Web Scraping", "Python", "FastAPI", "Gemini AI API", "BeautifulSoup4", "ReactJS", "LLMs"],
    highlights: [
      "Built a web scraping pipeline using BeautifulSoup4 to automatically extract and parse dining commons menu data",
      "Integrated Google's Gemini AI API for intelligent menu analysis and personalized recommendations",
      "Implemented real-time dietary restriction validation and menu filtering system",
      "Developed responsive React frontend with Material-UI for seamless user interaction",
      "Created efficient data storage and caching system for quick menu retrieval and analysis"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/DC-Menu-Analyzer",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "quiz",
    title: "LLM Quiz Generator",
    description: "Developed a full-stack web application that converts study materials into interactive quizzes.",
    technologies: ["Python", "FastAPI", "Uvicorn", "APIs", "Deepseek", "AI Development", "Vibe Coding", "Cursor", "Vite", "Deepseek-API"],
    highlights: [
      "File Upload & Processing: Supports various file formats (TXT, PDF, DOC, DOCX) with dynamic encoding detection and PDF content extraction.",
      "Quiz Generation: Generates multiple choice questions based on user-provided study materials. Integrates with Deepseek API to create context-aware quiz questions.",
      "Interactive Quiz Interface: Provides a dynamic quiz experience with real-time evaluation. Uses a progress indicator, immediate feedback on answers, and final score reporting."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLM-Quiz",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    "id": "mm-hilton-sprint",
    "title": "Multi-Provider AI Integration for Presentation Analysis",
    "description": "A project focused on developing a sophisticated multimodal system for presentation skills analysis. It integrates various AI providers (OpenAI, Anthropic, Google, Perplexity) and features a dual-database architecture with a seamless migration path from Firebase to a scalable Node.js backend with PostgreSQL.",
    "technologies": ["Python", "Node.js", "PostgreSQL", "Firebase", "REST APIs", "AI Development"],
    "highlights": [
      "Integrated four different AI providers for comprehensive analysis.",
      "Implemented a Service Factory Pattern for efficient AI provider management.",
      "Designed a dual-database system with a migration path to a more scalable solution.",
      "Developed a robust logging and monitoring system using the Composite and Observer patterns."
    ],
    "demoUrl": "#",
    "githubUrl": "#",
    "isOpenSource": false,
    "hasPublicRepo": false
  },
  {
    id: "synthetic-data-generator",
    title: "Synthetic Data Generator",
    description: "Developed a full-stack web application designed for financial analysts, developers, and researchers to generate high-quality, realistic synthetic stock market data.",
    technologies: ["Python", "FastAPI", "Uvicorn", "APIs", "AI Development","AWS Amplify", "React", "Vite"],
    highlights: [
      "Generate synthetic financial data mimicking real-world market conditions",
      "Fine-tune the data generation by controlling parameters like initial price, number of days, volatility, and the intensity and probability of 'black swan' events to simulate various market conditions.",
      "Provide a user-friendly interface for visualizing and generating synthetic data"
      ],
    demoUrl: "https://main.d1jhxtwybbezfy.amplifyapp.com/",
    githubUrl: "#",
    isOpenSource: false,
    hasPublicRepo: false
  },
  {
    id : "cover-letter-generator",
    title : "Cover Letter Generator",
    description : "Developed a full-stack web application that generates cover letters for job applications.",
    technologies : ["Python", "Flask", "APIs", "AI Development", "LLMs", "Cloud Run", "React", "Vite"],
    highlights : [
      "Generate customized cover letters for job applications",
      "Fine-tune the cover letter generation by controlling parameters like job title, company name, and job description",
      "Provide a user-friendly interface for visualizing and generating cover letters"
    ],
    demoUrl : "https://cover-letter-generator-424176252593.us-central1.run.app",
    githubUrl : "https://github.com/devangb3/Cover-Letter-Generator",
    isOpenSource : true,
    hasPublicRepo : true
  },
  {
    id : "rag-context",
    title: "RAG Client",
    description: "AI assistant designed to enable users to quickly find answers within their local documents (including PDFs, notes, and code files)",
    technologies: ["Python", "LangChain", "FAISS", "Gemini AI API", "Vector Databases", "Tokenization", "Retrieval Augmented Generation(RAG)"],
    highlights: [
      "Implemented Retrieval-Augmented Generation (RAG) techniques to create a context-aware search engine for personal document collections and codebases.",
      "Leveraged Python and LangChain to orchestrate interactions between large language models and vector databases, enhancing document retrieval and response generation.​",
      "Integrated the Gemini 2.5 Pro model via the Gemini AI API to generate embeddings, with flexibility to substitute alternative models as needed"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/RAG-Client",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "daily-digest",
    title: "Daily Digest - Calendar Gmail Summary",
    description: "A full-stack application providing smart summaries of Google Calendar events and Gmail messages using Gemini AI, featuring text/audio summaries and smart replies.",
    technologies: ["Python", "Flask", "React", "Node.js", "MongoDB", "Google Calendar API", "Gmail API", "Gemini AI API", "OAuth2", "SSL/TLS", "Google Cloud"],
    highlights: [
      "Generated AI-powered daily summaries for Google Calendar events and Gmail messages.",
      "Implemented secure Google OAuth2 authentication for Calendar and Gmail access.",
      "Integrated Text-to-Speech functionality for accessible audio summaries.",
      "Provided AI-driven smart reply suggestions for emails to improve productivity."
    ],
    demoUrl: "https://calendar-gmail-summary-frontend.onrender.com/",
    githubUrl: "https://github.com/devangb3/Calendar-Gmail-Summary",
    isOpenSource: true,
    hasPublicRepo: true
  },
  {
    id: "llm-chatbot",
    title: "LLM Self-Chat",
    description: "A framework for LLMs to converse with themselves or other LLMs, where an auditor can assign custom system prompts to each agent. Useful for prompt engineering, behavior analysis, and multi-agent simulations.",
    technologies: ["Python", "Websockets", "Gemini API", "Deepseek API",  "Claude API", "OpenAI API", "LLMs", "ReactJS", "Flask", "MongoDB"],
    highlights: [
      "Implemented a multi-agent system for LLMs to converse with each other.",
      "Utilized websockets for real-time communication between the frontend and backend.",
      "Implemented a custom system prompt for each agent to enable behavior analysis and prompt engineering."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/devangb3/LLM-Self-Chat",
    isOpenSource: true,
    hasPublicRepo: true
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
    githubUrl: "https://github.com/ResilientApp/ResShare-Backend",
    isOpenSource: true,
    hasPublicRepo: true
  },
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
    githubUrl: "https://github.com/devangb3",
    isOpenSource: true,
    hasPublicRepo: true
  }
];

const skills = [
  { name: "Java", category: "Languages", icon: "☕" },
  { name: "Python3", category: "Languages", icon: "🐍" },
  { name: "JavaScript", category: "Languages", icon: "⚡" },
  { name: "C#", category: "Languages", icon: "🎯" },
  { name: "C++", category: "Languages", icon: "⚔️" },
  { name: "React", category: "Frameworks", icon: "⚛️" },
  { name: "Node.js", category: "Frameworks", icon: "🟢" },
  { name: "Flask", category: "Frameworks", icon: "🌶️" },
  { name: "AWS", category: "Cloud", icon: "🌩️" },
  { name: "GCP", category: "Cloud", icon: "🌈" },
  { name: "Azure", category: "Cloud", icon: "💠" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  { name: "Git", category: "Tools", icon: "🌿" },
  { name: "Kubernetes", category: "Tools", icon: "⚓" },
  { name: "Linux", category: "Tools", icon: "🐧" },
  { name: "Hugging Face", category: "Tools", icon: "🤗" },
  { name: "Machine Learning", category: "AI", icon: "🤖" },
  { name: "LLMs", category: "AI", icon: "🧠" },
  { name: "RAG", category: "AI", icon: "📚" },
  { name: "Prompt Engineering", category: "AI", icon: "⌨️" },
  { name: "Deep Learning", category: "AI", icon: "🔮" },
  { name: "Model Fine Tuning", category: "AI", icon: "🎯" },
  { name: "Reinforcement Learning", category: "AI", icon: "🎮" },
  { name: "SQL", category: "Database", icon: "📊" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "Redis", category: "Database", icon: "⚡" },
  { name: "Kafka", category: "Database", icon: "📨" },
  
  
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Hexaview Technologies",
    period: "2022 - 2024",
    description: "Enhanced user experience by implementing new features and improving system performance",
    technologies: ["C#", "Angular", "Azure", "SQL", "Dot Net Core 6.0", "Git"]
  },
  {
    title: "Graduate Student",
    company: "UC Davis",
    period: "2024 - Present",
    description: "Pursuing Master's in Computer Science with focus on AI and Distributed Systems",
    technologies: ["Python", "Machine Learning", "Distributed Systems"]
  },
  {
    "title": "Lead Software Engineering Intern - AI",
    "company": "LearnHaus AI",
    "period": "June 2025 - August 2025",
    "description": [
      "Developed a complete data processing pipeline utilizing AI Services for advanced emotional analysis and created a user-facing coaching and data visualization system to deliver insights."
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "GCP",
      "REST APIs",
      "LLMs",
      "Emotional Analysis",
      "Multimodal AI",
      "LLM-as-a-Judge"
    ]
  }
];

// Project Card Components
const ProjectChips = ({ project, theme }) => (
  <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
    {project.demoUrl !== "#" && (
      <Chip 
        label="Live Demo" 
        size="small" 
        sx={{ 
          bgcolor: `${theme.secondary}20`,
          color: theme.secondary,
          fontWeight: 600,
          height: 20,
          fontSize: '0.7rem'
        }}
      />
    )}
    {project.isOpenSource && (
      <Chip 
        label="Open Source" 
        size="small" 
        sx={{ 
          bgcolor: `${theme.primary}20`,
          color: theme.primary,
          fontWeight: 600,
          height: 20,
          fontSize: '0.7rem'
        }}
      />
    )}
  </Box>
);

const ProjectActions = ({ project, theme }) => (
  <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
    {project.hasPublicRepo && (
      <Button 
        variant="outlined"
        href={project.githubUrl} 
        target="_blank" 
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

// Utility Functions
const groupSkillsByCategory = (skills) => {
  const categories = ['Languages', 'Frameworks', 'Cloud', 'AI', 'Tools', 'Database'];
  return categories.map(category => ({
    name: category,
    skills: skills.filter(skill => skill.category === category)
  })).filter(group => group.skills.length > 0);
};

// Skills Section Component
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

// Contact Data
const contactInfo = [
  { 
    icon: <Email />, 
    label: 'Email', 
    value: 'devangborkar3@gmail.com', 
    href: 'mailto:devangborkar3@gmail.com',
    isClickable: true 
  },
  { 
    icon: <Phone />, 
    label: 'Phone', 
    value: 'Available on request', 
    href: '#',
    isClickable: false 
  },
  { 
    icon: <LocationOn />, 
    label: 'Location', 
    value: 'San Francisco Bay Area', 
    href: '#',
    isClickable: false 
  }
];

const socialLinks = [
  { 
    icon: <Email />, 
    label: 'Email Me', 
    href: 'mailto:devangborkar3@gmail.com', 
    primary: true 
  },
  { 
    icon: <LinkedIn />, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/devang-borkar-710b49201', 
    primary: false 
  },
  { 
    icon: <GitHub />, 
    label: 'GitHub', 
    href: 'https://github.com/devangb3', 
    primary: false 
  }
];

// Contact Components
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

const SocialLinks = ({ links, theme, isVisible }) => (
  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
    {links.map((social, index) => (
      <Button 
        key={social.label}
        variant={social.primary ? 'contained' : 'outlined'}
        startIcon={social.icon}
        href={social.href}
        target="_blank"
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

// Hero Social Links Data
const heroSocialLinks = [
  { icon: <GitHub />, url: 'https://github.com/devangb3', label: 'GitHub' },
  { icon: <LinkedIn />, url: 'https://linkedin.com/in/devang-borkar-710b49201', label: 'LinkedIn' },
  { icon: <Email />, url: 'mailto:devangborkar3@gmail.com', label: 'Email' },
  { icon: <LeetCodeIcon />, url: 'https://leetcode.com/u/devangborkar3/', label: 'LeetCode' }
];

// Hero Social Links Component
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
        title={social.label}
      >
        {social.icon}
      </IconButton>
    ))}
  </Box>
);

// Footer Data
const footerSocialLinks = [
  { icon: <GitHub />, url: 'https://github.com/devangb3' },
  { icon: <LinkedIn />, url: 'https://linkedin.com/in/devang-borkar-710b49201' },
  { icon: <Email />, url: 'mailto:devangborkar3@gmail.com' }
];

// Footer Component
const Footer = ({ theme }) => (
  <Box sx={{ 
    py: 6,
    bgcolor: theme.cardBg,
    borderTop: `1px solid ${theme.border}`,
    textAlign: 'center'
  }}>
    <Container maxWidth="lg">
      <Typography 
        variant="body1" 
        sx={{ 
          color: theme.textSecondary,
          mb: 3
        }}
      >
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
        {footerSocialLinks.map((social, index) => (
          <IconButton 
            key={index}
            href={social.url}
            target="_blank"
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
        © 2025 Devang Borkar. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

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
                  href="BorkarDevang.pdf"
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
                      <Typography variant="body2" sx={{ color: theme.textSecondary, mt: 1 }}>
                        {exp.description}
                      </Typography>
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
                  
                  <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: theme.text,
                          '& fieldset': {
                            borderColor: theme.border
                          },
                          '&:hover fieldset': {
                            borderColor: theme.primary
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.primary
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.textSecondary,
                          '&.Mui-focused': {
                            color: theme.primary
                          }
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: theme.text,
                          '& fieldset': {
                            borderColor: theme.border
                          },
                          '&:hover fieldset': {
                            borderColor: theme.primary
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.primary
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.textSecondary,
                          '&.Mui-focused': {
                            color: theme.primary
                          }
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: theme.text,
                          '& fieldset': {
                            borderColor: theme.border
                          },
                          '&:hover fieldset': {
                            borderColor: theme.primary
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.primary
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.textSecondary,
                          '&.Mui-focused': {
                            color: theme.primary
                          }
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: theme.text,
                          '& fieldset': {
                            borderColor: theme.border
                          },
                          '&:hover fieldset': {
                            borderColor: theme.primary
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.primary
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: theme.textSecondary,
                          '&.Mui-focused': {
                            color: theme.primary
                          }
                        }
                      }}
                    />
                    
                    <Button 
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        bgcolor: theme.primary,
                        color: theme.background,
                        fontWeight: 600,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: theme.primary,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${theme.primary}40`
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                  
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: theme.textSecondary,
                      textAlign: 'center',
                      display: 'block',
                      mt: 2
                    }}
                  >
                    I'll get back to you within 24 hours! 🚀
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Scroll to Top Button */}
      {isMounted && showScroll && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            zIndex: 1000,
            opacity: showScroll ? 1 : 0,
            transform: showScroll ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: showScroll ? 'auto' : 'none'
          }}
        >
          <IconButton
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            sx={{
              width: 60,
              height: 60,
              bgcolor: theme.primary,
              color: theme.background,
              boxShadow: `0 8px 25px ${theme.primary}40`,
              border: `2px solid ${theme.primary}`,
              backdropFilter: 'blur(10px)',
              '&:hover': {
                bgcolor: theme.primary,
                transform: 'translateY(-8px) scale(1.1)',
                boxShadow: `0 15px 40px ${theme.primary}60`
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: 'pulse 2s infinite'
            }}
          >
            <ArrowDownward sx={{ transform: 'rotate(180deg)', fontSize: 28 }} />
          </IconButton>
        </Box>
      )}
      
      {/* Footer */}
      <Footer theme={theme} />
    </Box>
  );
}

export default App;