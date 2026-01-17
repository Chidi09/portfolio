import React, { useState, useEffect } from 'react';
import {
  Menu, X, Mail, Github, Linkedin, ExternalLink, GraduationCap, Award,
  Sun, Moon, Twitter, Atom, Server, Terminal, GitBranch,
  Database, Cloud, Palette, FileText, Cpu, Key, Globe,
  TrendingUp, Building, ShoppingCart, ArrowRight
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const personalData = {
  name: "Nneji Chidi Ben",
  tagline: "Software Engineer",
  fullTagline: "Building digital experiences that merge high-performance engineering with exquisite design.",
  aboutMe: "I am a Software Engineer who bridges the gap between raw code and human experience. With a B.Sc. in Computer Science and a portfolio spanning FinTech, Real Estate, and AI, I don't just build websites—I engineer ecosystems. Creator of FluxPay and VarianTrade, I specialize in scalable architectures (React, Go, Python) that feel magical to use.",
  email: "chidiisking7@gmail.com",
  github: "https://github.com/Chidi09",
  linkedin: "https://linkedin.com/in/yourname",
  whatsapp: "https://wa.me/+2347019008948",
  twitter: "https://twitter.com/Benimaru177",
  currentYear: new Date().getFullYear(),
  education: {
    degree: "B.Sc., Computer Science",
    university: "Crawford University",
    location: "Lagos, Nigeria",
    years: "2021 – 2025",
    coursework: "Software Engineering, AI & ML, Web Architecture"
  },
  certifications: [
    "Full-Stack Web Development",
    "AI for Developers",
    "Python and API Automation"
  ]
};

const skills = [
  'React.js', 'Next.js', 'Angular', 'Tailwind CSS',
  'FastAPI', 'Node.js', 'Golang', 'Python',
  'Firebase', 'MongoDB', 'PostgreSQL', 'Supabase',
  'Gemini API', 'Git/GitHub', 'Smart Theming'
];

// --- ICONS HELPER ---
const getSkillIcon = (skillName, className) => {
  switch (skillName) {
    case 'React.js': case 'Next.js': return <Atom className={className} />;
    case 'Angular': return <CodeIcon className={className} />; // Custom wrapper below
    case 'Tailwind CSS': return <Palette className={className} />;
    case 'FastAPI': case 'Python': return <Server className={className} />;
    case 'Node.js': return <Server className={className} />;
    case 'Golang': return <Terminal className={className} />;
    case 'Firebase': case 'Supabase': return <Cloud className={className} />;
    case 'MongoDB': case 'PostgreSQL': return <Database className={className} />;
    case 'Gemini API': return <Cpu className={className} />;
    case 'Prompt Engineering': return <FileText className={className} />;
    case 'Git/GitHub': return <GitBranch className={className} />;
    default: return <CodeIcon className={className} />;
  }
};

// Simple wrapper for the default code icon to avoid conflicts
const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const projects = [
  {
    title: "EG Group",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "A diversified conglomerate redefining standards in Agriculture, Construction, and Media. Leveraging global partnerships to drive economic growth.",
    fallbackImage: "https://placehold.co/1280x800/0f172a/ffffff?text=EG+Group&font=roboto",
    projectUrl: "https://erstegraceland.net/",
    githubUrl: "",
    category: "Agriculture"
  },
  {
    title: "2GEES Impacts",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "Luxury real estate and hospitality management platform. Crafting bespoke identities for global brands, including the Urum Integrated Resort.",
    fallbackImage: "https://placehold.co/1280x800/1e293b/ffffff?text=2GEES+Impacts&font=roboto",
    projectUrl: "https://2-gees-website.vercel.app/",
    githubUrl: "",
    category: "Real Estate"
  },
  {
    title: "VarianTrade",
    tech: ['Angular', 'Python', 'Go', 'PostgreSQL'],
    description: "A comprehensive AI-Powered Trading & Betting Platform with real-time arbitrage detection.",
    fallbackImage: "https://placehold.co/1280x800/0f172a/ffffff?text=VarianTrade+Platform&font=roboto",
    projectUrl: "https://variantrades.com",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "Nigerian China Invest",
    tech: ['React', 'Vite', 'Golang', 'Supabase'],
    description: "Robust investment portal with trade opportunities and cart-based ordering systems.",
    fallbackImage: "https://placehold.co/1280x800/991b1b/ffffff?text=Investment+Portal&font=roboto",
    projectUrl: "https://www.nigerianchinainvestmentclub.com",
    githubUrl: "",
    category: "E-Commerce"
  },
  {
    title: "Grandkonsul Gardens",
    tech: ['React', 'Tailwind', 'Framer Motion'],
    description: "Premium real estate platform with smooth animations and SEO optimization.",
    fallbackImage: "https://placehold.co/1280x800/004d40/c5a059?text=Grandkonsul+Estates&font=playfair-display",
    projectUrl: "https://grandkonsulgardens.com",
    githubUrl: "",
    category: "Real Estate"
  },
  {
    title: "Cliftonville Gardens",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "Modern supported living community website with mobile-first design.",
    fallbackImage: "https://placehold.co/1280x800/003399/ffffff?text=Cliftonville+Gardens&font=roboto",
    projectUrl: "https://www.cliftonvillegardens.com",
    githubUrl: "https://github.com/Chidi09/Clifton-ville-website",
    category: "Healthcare"
  },
  {
    title: "Cliftonville Farms",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "Digital presence for agricultural operations showcasing sustainable produce.",
    fallbackImage: "https://placehold.co/1280x800/166534/ffffff?text=Cliftonville+Farms&font=roboto",
    projectUrl: "https://www.cliftonvillefarms.com",
    githubUrl: "",
    category: "Agriculture"
  },
  {
    title: "Finnitrex",
    tech: ['Next.js', 'React', 'Tailwind'],
    description: "High-performance financial technology interface designed for speed.",
    fallbackImage: "https://placehold.co/1280x800/4f46e5/ffffff?text=Finnitrex+Finance&font=roboto",
    projectUrl: "https://www.finnitrex.com",
    githubUrl: "",
    category: "FinTech"
  },

  {
    title: "Smart Theming Engine",
    tech: ['Python', 'AI/ML'],
    description: "AI-powered engine analyzing visuals to generate automatic UI themes.",
    fallbackImage: "https://placehold.co/1280x800/7c3aed/ffffff?text=AI+Theming+Engine",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/smart-theming-engine",
    category: "AI Tool"
  },
  {
    title: "Campus Manager",
    tech: ['Python', 'Flask'],
    description: "Comprehensive system for managing campus events and tasks.",
    fallbackImage: "https://placehold.co/1280x800/f59e0b/ffffff?text=Campus+Manager",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/campus-event-manager",
    category: "Management"
  },
  {
    title: "School Management SaaS",
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    description: "Multi-tenant SaaS platform empowering schools with digital governance and online learning capabilities.",
    fallbackImage: "https://placehold.co/1280x800/1e293b/ffffff?text=School+SaaS&font=roboto",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/school-management-saas-",
    category: "Education"
  },
  {
    title: "Summarizer AI Model",
    tech: ['JavaScript', 'GPT API', 'Node.js'],
    description: "AI-powered text summarization engine for distilling complex documents into readable summaries.",
    fallbackImage: "https://placehold.co/1280x800/7c3aed/ffffff?text=AI+Summarizer&font=roboto",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/summarizer-model",
    category: "AI Tool"
  },
  {
    title: "Fake News Detector",
    tech: ['Python', 'TensorFlow', 'NLP'],
    description: "Machine learning classifier designed to analyze linguistic patterns and identify misinformation.",
    fallbackImage: "https://placehold.co/1280x800/991b1b/ffffff?text=Truth+Engine&font=roboto",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/fake-news-detector",
    category: "AI Tool"
  },
  {
    title: "Crawford Podcast App",
    tech: ['TypeScript', 'React', 'Firebase'],
    description: "Digital audio ecosystem for university broadcasting and educational content delivery.",
    fallbackImage: "https://placehold.co/1280x800/0369a1/ffffff?text=Podcast+App&font=roboto",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/crawford-podcast-app",
    category: "Media"
  }
];

// --- MAIN COMPONENT ---
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Dark mode initialization
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return JSON.parse(savedMode);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  // --- OPTIMIZED SCREENSHOT GENERATOR ---
  const getProjectImage = (project) => {
    if (project.projectUrl && project.projectUrl !== "") {
      const encodedUrl = encodeURIComponent(project.projectUrl);
      // Added parameters:
      // waitFor=3000 (waits 3s for animations/loading)
      // viewport.width=1280 (ensures desktop layout)
      return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000&viewport.width=1280&viewport.height=800`;
    }
    return project.fallbackImage;
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'FinTech': return <TrendingUp className="w-3 h-3" />;
      case 'Real Estate': return <Building className="w-3 h-3" />;
      case 'E-Commerce': return <ShoppingCart className="w-3 h-3" />;
      case 'Web3': return <Key className="w-3 h-3" />;
      case 'Agriculture': return <Server className="w-3 h-3" />;
      case 'Education': return <GraduationCap className="w-3 h-3" />;
      case 'AI Tool': return <Cpu className="w-3 h-3" />;
      default: return <Globe className="w-3 h-3" />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] font-inter text-gray-800 dark:text-gray-200 transition-colors duration-500 overflow-x-hidden selection:bg-indigo-500 selection:text-white">

      {/* --- GRID BACKGROUND EFFECT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px] dark:opacity-20"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold tracking-tighter flex items-center gap-2 text-gray-900 dark:text-white group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Chidi</span>.jsx
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-indigo-500 ${activeSection === item.toLowerCase() ? 'text-indigo-500' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-400">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 md:hidden flex flex-col items-center gap-4 shadow-xl">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full py-3 text-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-block mb-6 p-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-blob">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-black bg-gray-200">
              <img src="https://placehold.co/192x192/cbd5e1/4a5568?text=CN" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            I Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Digital Ecosystems</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {personalData.fullTagline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Me
            </button>
          </div>

          {/* Tech Stack Marquee (Static for simplicity, makes it look pro) */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Powering Applications With</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <Atom className="w-8 h-8 hover:text-blue-400" />
              <Server className="w-8 h-8 hover:text-green-500" />
              <Terminal className="w-8 h-8 hover:text-cyan-400" />
              <Database className="w-8 h-8 hover:text-green-600" />
              <Cloud className="w-8 h-8 hover:text-yellow-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (The Star Show) --- */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Selected Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Platforms I've architected from zero to production. Click any card to visit the live platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* CLICKABLE AREA FOR LIVE DEMO 
                   Using anchor tag around image for better UX 
                */}
                <a
                  href={project.projectUrl || '#'}
                  target={project.projectUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`block relative aspect-[16/10] overflow-hidden ${!project.projectUrl && 'cursor-default'}`}
                >
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" /> {/* Loading Skeleton Placeholder */}
                  <img
                    src={getProjectImage(project)}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = project.fallbackImage;
                      e.target.classList.remove('object-top'); // Fallback might center better
                    }}
                  />

                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {project.projectUrl ? (
                      <span className="text-white text-sm font-bold flex items-center gap-2">
                        Visit Live Site <ExternalLink className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="text-white/70 text-sm font-bold">Coming Soon</span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-sm">
                    {getCategoryIcon(project.category)} {project.category}
                  </div>
                </a>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT & EDUCATION (Bento Grid Style) --- */}
      <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-[#080808]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Text */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Engineering with Purpose</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalData.aboutMe}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {personalData.certifications.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-start gap-3">
                    <Award className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{personalData.education.degree}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{personalData.education.university}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium dark:text-gray-200">{personalData.education.years}</span>
                </div>
                <div className="flex justify-between text-sm py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium dark:text-gray-200">{personalData.education.location}</span>
                </div>
                <div className="pt-2">
                  <span className="text-sm text-gray-500 block mb-2">Focus Areas</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                    {personalData.education.coursework}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS (Minimalist) --- */}
      <section id="skills" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Technical Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill} className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 hover:shadow-lg dark:hover:shadow-indigo-900/20 transition-all cursor-default">
                <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                  {getSkillIcon(skill, "w-5 h-5")}
                </span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 px-6 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have an idea?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
            I am currently open to new opportunities and collaborations. Let's build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${personalData.email}`} className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:shadow-xl transition-transform hover:-translate-y-1">
              Send an Email
            </a>
            <div className="flex gap-6">
              {[
                { icon: Github, link: personalData.github },
                { icon: Linkedin, link: personalData.linkedin },
                { icon: Twitter, link: personalData.twitter }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-500 rounded-full hover:bg-indigo-400 transition-colors">
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
              <a href={personalData.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] text-gray-500 py-8 text-center border-t border-gray-800 text-sm">
        <p>&copy; {personalData.currentYear} {personalData.name}. All rights reserved.</p>
        <p className="mt-2">Engineered with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
