import React, { useState, useEffect } from 'react';
// Import actual icons from lucide-react
import {
  Menu,
  X,
  Code,
  Briefcase,
  Mail,
  User,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Award,
  Sun, // For light mode icon
  Moon, // For dark mode icon
  Twitter, // Added: Twitter icon
  // MessageSquareText, // Removed: Replaced with inline SVG for WhatsApp
  // Specific icons for skills
  Atom, // Represents React
  Server, // Represents Node.js, Backend (FastAPI)
  Terminal, // Represents general coding, VS Code, Android Studio
  GitBranch, // Represents Git/GitHub
  Database, // Represents MongoDB, PostgreSQL, Firebase (as a database)
  Cloud, // Represents cloud systems like Firebase, AWS
  MessageSquare, // For NLP, Sentiment, Propaganda Detection
  Palette, // For Tailwind CSS, Smart Theming
  Bot, // For Discord Bot, AI-Checker Systems
  FileText, // For Prompt Engineering, Summarizer Model
  Cpu, // For AI/ML, Gemini API
  LayoutDashboard, // For LMS Customization, general systems
  Key, // For Crypto Wallet Generators
  Monitor // For Web App
} from 'lucide-react';


// Define your personal and project data here
const personalData = {
  name: "Nneji Chidi Ben",
  tagline: "Software Engineer & Product Creator",
  fullTagline: "A passionate Full-Stack Developer crafting innovative and user-centric web solutions.",
  aboutMe: "Innovative and technically versatile software engineer with a B.Sc. in Computer Science and a strong record of building AI-driven platforms, full-stack web applications, and smart system tools. Creator of FluxPay, Smart Theming Engine, and multiple intelligent platforms across LMS, crypto, news, and education. Skilled in React, FastAPI, Node.js, Firebase, and cloud systems. Passionate about designing scalable architectures and building products that solve real-world problems.",
  email: "your.email@example.com", // Replace with your actual email
  github: "https://github.com/Chidi09", // Replace with your actual GitHub URL
  linkedin: "https://linkedin.com/in/yourname", // Replace with your actual LinkedIn URL
  whatsapp: "https://wa.me/+2347019008948", // Your actual WhatsApp number
  twitter: "https://twitter.com/Benimaru177", // ADDED: Your Twitter URL
  currentYear: new Date().getFullYear(),
  education: {
    degree: "B.Sc., Computer Science",
    university: "Crawford University",
    location: "Lagos, Nigeria",
    years: "2021 – 2025",
    standing: "", // Removed "Second Class Upper"
    coursework: "Software Engineering, AI & ML, Web Architecture"
  },
  certifications: [
    "Full-Stack Web Development",
    "AI for Developers",
    "Python and API Automation",
    "Project Management in Practice"
  ]
};

const skills = [
  'React.js', 'Tailwind CSS', 'HTML', 'JavaScript',
  'FastAPI', 'Node.js', 'Firebase', 'MongoDB',
  'Gemini API', 'Sentiment & Propaganda Detection', 'Prompt Engineering',
  'Git', 'GitHub', 'VS Code', 'Discord API', 'Android Studio',
  'Smart Theming', 'LMS Customization', 'AI-Checker Systems', 'Crypto Wallet Generators'
];

// Helper function to get skill icon based on skill name
const getSkillIcon = (skillName, className) => {
  switch (skillName) {
    case 'React.js': return <Atom className={className} />;
    case 'Tailwind CSS': return <Palette className={className} />;
    case 'HTML': return <Code className={className} />;
    case 'JavaScript': return <Code className={className} />;
    case 'FastAPI': return <Server className={className} />;
    case 'Node.js': return <Server className={className} />;
    case 'Firebase': return <Cloud className={className} />;
    case 'MongoDB': return <Database className={className} />;
    case 'Gemini API': return <Cpu className={className} />;
    case 'Sentiment & Propaganda Detection': return <MessageSquare className={className} />;
    case 'Prompt Engineering': return <FileText className={className} />;
    case 'Git': return <GitBranch className={className} />;
    case 'GitHub': return <GitBranch className={className} />;
    case 'VS Code': return <Terminal className={className} />;
    case 'Discord API': return <Bot className={className} />;
    case 'Android Studio': return <Terminal className={className} />;
    case 'Smart Theming': return <Palette className={className} />;
    case 'LMS Customization': return <LayoutDashboard className={className} />;
    case 'AI-Checker Systems': return <Bot className={className} />;
    case 'Crypto Wallet Generators': return <Key className={className} />; // Using Key for wallet generation
    default: return <Code className={className} />; // Fallback icon
  }
};


const projects = [
  {
    title: "FluxPay – Crypto Payment Provider",
    tech: ['React', 'Node.js', 'MongoDB'], // Keeping original as no specific repo was given for this
    description: "Built an automated payment gateway supporting USDT, Solana, BTC, and ETH. Generated unique wallets per transaction and disbursed payments post admin review. Implemented real-time Naira conversion display for user confidence.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=FluxPay",
    projectUrl: "", // Empty string means no live demo
    githubUrl: "https://github.com/Chidi09/fluxpay-repo-link-if-any" // Placeholder, user didn't provide specific repo for FluxPay
  },
  {
    title: "Smart Theming Engine (ChromaShift)",
    tech: ['Python', 'HTML', 'JavaScript', 'CSS', 'Tailwind CSS'], // UPDATED
    description: "Created an AI-powered theming engine analyzing visual elements to generate UI themes. Extracted color palettes, calculated symmetry, and built responsive components. Integrated into LMS platforms with institutional theming marketplace.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=ChromaShift",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/smart-theming-engine"
  },
  {
    title: "AI Fake News Detection Website",
    tech: ['HTML', 'CSS', 'Firebase', 'Tailwind CSS', 'Gemini API', 'NLP'], // UPDATED
    description: "Built a bias and sentiment checker using NLP. Designed an interactive news platform to verify content truthfulness. Added user report rewards and community moderation features.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=AI+News",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/fake-news-detector"
  },
  {
    title: "AI-Powered Student Advisory System",
    tech: ['Python', 'JavaScript', 'HTML', 'CSS', 'Firebase'], // UPDATED
    description: "Sent academic updates to parents and analyzed per-course student performance. Issued certificates and tracked learning outcomes per semester.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Student+Advisory",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/StudentAdvisingSystem"
  },
  {
    title: "Project Topic Picker (AI System)",
    tech: ['JavaScript', 'Python', 'HTML', 'CSS', 'React', 'AI APIs'], // UPDATED
    description: "Detected duplicate final year project topics using semantic search and prompt chains. Allowed students to submit viable, unique topics with validation.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Topic+Picker",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/project_approval_system_root"
  },
  {
    title: "Discord Assignment Bot System",
    tech: ['Node.js', 'MongoDB', 'Discord API'], // Keeping original as no specific repo was given for this
    description: "Built a workflow management bot for task posting, status updates, and payment release. Enabled admin approval-based payout and user tracking with admin: true flags.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Discord+Bot",
    projectUrl: "",
    githubUrl: "" // No specific GitHub link provided for this one
  },
  // New projects from the provided GitHub links
  {
    title: "Campus Event Manager",
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'HTML', 'CSS', 'JavaScript'], // UPDATED
    description: "A system for managing campus events, enabling task posting, status updates, and more.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Campus+Event",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/campus-event-manager"
  },
  {
    title: "Audio LMS",
    tech: ['Python', 'WebRTC', 'Flask-SocketIO'], // UPDATED
    description: "An audio-based Learning Management System for flexible learning.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Audio+LMS",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/audiolms"
  },
  {
    title: "Summarizer Model",
    tech: ['JavaScript', 'NLP'], // UPDATED
    description: "A text summarization model for condensing information efficiently.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Summarizer",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/summarizer-model"
  },
  {
    title: "Course Model",
    tech: ['Python'], // UPDATED
    description: "A system for structuring and managing course data.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Course+Model",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/course_model"
  },
  {
    title: "EduAuth",
    tech: ['Python'], // UPDATED
    description: "An authentication system designed for educational platforms.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=EduAuth",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/eduauth"
  },
  {
    title: "Web App",
    tech: ['TypeScript', 'HTML', 'CSS'], // UPDATED
    description: "A general web application project.",
    imageUrl: "https://placehold.co/600x400/e2e8f0/4a5568?text=Web+App",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/web-app"
  },
];


// Main App component for the portfolio design preview
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for dark mode, initialized from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // If no saved preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply/remove 'dark' class to HTML element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Smooth scroll effect for navigation links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close menu on click
    }
  };

  useEffect(() => {
    // Add smooth scroll behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    // The 'dark' class on the html element (managed by useEffect) will enable Tailwind's dark mode variants
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter text-gray-800 dark:text-gray-200 antialiased transition-colors duration-500">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Optional: Google Fonts for Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header Section */}
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50 dark:bg-gray-800 dark:bg-opacity-80">
        <nav className="container mx-auto flex justify-between items-center">
          <a
            href="#hero"
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-extrabold text-gray-900 dark:text-indigo-300 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors tracking-tight"
          >
            Chidi.jsx
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#hero"
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => scrollToSection('education')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => scrollToSection('certifications')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-md py-4 mt-2 rounded-lg mx-4 dark:bg-gray-800 dark:bg-opacity-90">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a
                  href="#hero"
                  onClick={() => scrollToSection('hero')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={() => scrollToSection('education')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={() => scrollToSection('certifications')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => scrollToSection('skills')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => scrollToSection('projects')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 text-center overflow-hidden
        dark:from-gray-800 dark:to-gray-950 transition-colors duration-500">
        {/* Background elements for visual interest */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-1/4 left-1/4 dark:bg-indigo-700"></div>
          <div className="absolute w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-1/2 right-1/4 dark:bg-purple-700"></div>
          <div className="absolute w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-1/4 left-1/3 dark:bg-pink-700"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-300 rounded-full mx-auto mb-8 overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105 animate-fade-in-up dark:bg-gray-700 dark:border-gray-800">
            {/*
              ACTION REQUIRED: Replace the 'src' attribute below with your actual profile picture URL.
              Example: src="/images/your-profile-pic.jpg" or src="https://your-cdn.com/profile.png"
              Ensure the image is publicly accessible.
            */}
            <img
              src="https://placehold.co/192x192/cbd5e1/4a5568?text=Profile" // REPLACE THIS URL
              alt="Profile Picture"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/cbd5e1/4a5568?text=Profile'; }}
            />
          </div>

          {/* Name and Tagline */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-fade-in-up delay-100 drop-shadow-md">
            Hi, I'm <span className="text-indigo-700 dark:text-indigo-400">{personalData.name.split(' ')[0]}</span>.
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            {personalData.fullTagline}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 group dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 flex items-center justify-center
              dark:bg-gray-700 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-600 dark:focus:ring-indigo-600"
            >
              <Mail className="w-5 h-5 mr-2" /> Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up delay-100">
              {/*
                ACTION REQUIRED: Replace the 'src' attribute below with a relevant image for your About section.
                Example: src="/images/about-me.jpg" or src="https://your-cdn.com/about.png"
                Ensure the image is publicly accessible.
              */}
              <img
                src="https://placehold.co/600x400/e2e8f0/4a5568?text=About+Image" // REPLACE THIS URL
                alt="About Me"
                className="rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-102"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=About+Image'; }}
              />
            </div>
            <div className="md:w-1/2 text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-200">
              <p className="mb-4">
                {personalData.aboutMe}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Education
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up delay-100 dark:bg-gray-700 dark:text-gray-200">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{personalData.education.degree}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{personalData.education.university} | {personalData.education.location}</p>
                <p className="text-md text-gray-600 dark:text-gray-400">{personalData.education.years}</p>
              </div>
            </div>
            {personalData.education.coursework && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Relevant Coursework:</span> {personalData.education.coursework}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start transform transition-transform duration-300 hover:scale-102 hover:shadow-xl animate-fade-in-up dark:bg-gray-700 dark:text-gray-200"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <Award className="w-8 h-8 text-teal-600 dark:text-teal-400 mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up dark:bg-gray-700 dark:text-gray-200"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                {getSkillIcon(skill, "w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4")}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-50 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-transform duration-300 group animate-fade-in-up
                dark:bg-gray-700 dark:bg-opacity-80 dark:text-gray-200"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/*
                  ACTION REQUIRED: Replace the 'src' attribute below with your actual project screenshot URL.
                  Example: src="/images/fluxpay-screenshot.jpg" or src="https://your-cdn.com/project-screenshot.png"
                  Ensure the image is publicly accessible.
                */}
                <img
                  src={project.imageUrl} // REPLACE THIS URL
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Project'; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* Conditional rendering for project link: "View Project", "View Code", or "Coming Soon" */}
                    {project.projectUrl && project.projectUrl !== "" ? (
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors group dark:text-indigo-400 dark:hover:text-indigo-300">
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    ) : project.githubUrl && project.githubUrl !== "" ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors group dark:text-indigo-400 dark:hover:text-indigo-300">
                        View Code
                        <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-gray-500 dark:text-gray-400 font-semibold">
                        Coming Soon
                      </span>
                    )}

                    {project.githubUrl && project.githubUrl !== "" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors dark:text-gray-400 dark:hover:text-gray-300" aria-label="GitHub Repository">
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 animate-fade-in-up delay-100">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form
            action="https://formspree.io/f/xdkdzqwd"
            method="POST"
            className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up delay-200 dark:bg-gray-700 dark:text-gray-200"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-indigo-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-indigo-400"
                placeholder={personalData.email}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 resize-y dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-indigo-400"
                placeholder="Tell me about your project or inquiry..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center space-x-6 mt-10 animate-fade-in-up delay-300">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-200" aria-label="GitHub Profile">
              <Github className="w-8 h-8" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors dark:text-blue-400 dark:hover:text-blue-300" aria-label="LinkedIn Profile">
              <Linkedin className="w-8 h-8" />
            </a>
            {/* WhatsApp Icon (Inline SVG) */}
            <a href={personalData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors dark:text-green-400 dark:hover:text-green-300" aria-label="WhatsApp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0" // Set strokeWidth to 0 for a solid fill
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-whatsapp"
              >
                <path d="M23 12a11 11 0 0 0-11-11A11 11 0 0 0 1 12a11 11 0 0 0 11 11c.01 0 .02 0 .03 0a10.95 10.95 0 0 0 6.31-2.02l3.66 1.15a1 1 0 0 0 1.25-1.25l-1.15-3.66A10.95 10.95 0 0 0 23 12zM12 21a9 9 0 0 1-7.8-4.57l-.54-.92-3.11 1-.95-3.08a9 9 0 0 1 17.4-3.8c0 0 0 0 0 0V12a9 9 0 0 1-9 9z" />
                <path d="M17.5 14.5a.5.5 0 0 0-.25-.43l-3.5-2a.5.5 0 0 0-.5-.07l-2.5 1.5a.5.5 0 0 0-.25.43v1.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-1l2-1.2 3 1.75a.5.5 0 0 0 .5-.43v-.5z" />
              </svg>
            </a>
            {/* New Twitter Link */}
            <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300" aria-label="Twitter Profile">
              <Twitter className="w-8 h-8" />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
        <p className="text-sm">
          &copy; {personalData.currentYear} {personalData.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed and Developed with <span className="text-red-500">&hearts;</span>
        </p>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        `}
      </style>
    </div>
  );
};

export default App;
