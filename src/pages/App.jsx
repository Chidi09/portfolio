import React, { useState, useEffect } from 'react';
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
  Sun,
  Moon,
  Twitter,
  Atom,
  Server,
  Terminal,
  GitBranch,
  Database,
  Cloud,
  MessageSquare,
  Palette,
  Bot,
  FileText,
  Cpu,
  LayoutDashboard,
  Key,
  Monitor,
  Globe,       // New: For general web
  TrendingUp,  // New: For Trading/Finance
  Building,    // New: For Real Estate
  ShoppingCart // New: For E-commerce
} from 'lucide-react';

// Define your personal and project data here
const personalData = {
  name: "Nneji Chidi Ben",
  tagline: "Software Engineer & Product Creator",
  fullTagline: "A passionate Full-Stack Developer crafting innovative and user-centric web solutions.",
  aboutMe: "Innovative and technically versatile software engineer with a B.Sc. in Computer Science and a strong record of building AI-driven platforms, full-stack web applications, and smart system tools. Creator of FluxPay, Smart Theming Engine, and multiple intelligent platforms across LMS, crypto, news, and education. Skilled in React, FastAPI, Node.js, Firebase, and cloud systems. Passionate about designing scalable architectures and building products that solve real-world problems.",
  email: "your.email@example.com", // Replace with your actual email
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
    standing: "",
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
  'React.js', 'Next.js', 'Angular', 'Tailwind CSS',
  'FastAPI', 'Node.js', 'Golang', 'Python',
  'Firebase', 'MongoDB', 'PostgreSQL', 'Supabase',
  'Gemini API', 'Prompt Engineering', 'Git/GitHub',
  'Smart Theming', 'AI-Checker Systems'
];

// Helper function to get skill icon based on skill name
const getSkillIcon = (skillName, className) => {
  switch (skillName) {
    case 'React.js': case 'Next.js': return <Atom className={className} />;
    case 'Angular': return <Code className={className} />;
    case 'Tailwind CSS': return <Palette className={className} />;
    case 'HTML': case 'JavaScript': return <Code className={className} />;
    case 'FastAPI': case 'Python': return <Server className={className} />;
    case 'Node.js': return <Server className={className} />;
    case 'Golang': return <Terminal className={className} />; // Represents backend power
    case 'Firebase': case 'Supabase': return <Cloud className={className} />;
    case 'MongoDB': case 'PostgreSQL': return <Database className={className} />;
    case 'Gemini API': return <Cpu className={className} />;
    case 'Prompt Engineering': return <FileText className={className} />;
    case 'Git/GitHub': return <GitBranch className={className} />;
    default: return <Code className={className} />;
  }
};

const projects = [
  {
    title: "VarianTrade",
    tech: ['Angular', 'Python', 'Node.js', 'Golang', 'PostgreSQL'],
    description: "A comprehensive AI-Powered Trading & Betting Platform. Features real-time algorithmic trading, arbitrage detection across bookmakers, and portfolio management. Built with a microservices architecture including a high-performance matching engine.",
    // Dark tech blue background, white text
    imageUrl: "https://placehold.co/800x500/0f172a/ffffff?text=VarianTrade+AI+Platform&font=roboto", 
    projectUrl: "https://variantrades.com",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "Nigerian China Investment Club",
    tech: ['React', 'Vite', 'Golang', 'Supabase'],
    description: "A robust investment and e-commerce portal. Features member-only dashboards, trade opportunity postings, investment pitch submission systems, and cart-based ordering with multiple item support.",
    // Red and dark background (Flag colors hint)
    imageUrl: "https://placehold.co/800x500/991b1b/ffffff?text=Investment+Club+Portal&font=roboto",
    projectUrl: "https://www.nigerianchinainvestmentclub.com",
    githubUrl: "",
    category: "E-Commerce"
  },
  {
    title: "Grandkonsul Gardens",
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    description: "A premium real estate website featuring smooth animations and SEO optimization. Implements a 'Grand Green' and 'Gold' aesthetic with responsive galleries to showcase luxury properties.",
    // Emerald green background, Gold text
    imageUrl: "https://placehold.co/800x500/004d40/c5a059?text=Grandkonsul+Properties&font=playfair-display",
    projectUrl: "https://grandkonsulgardens.com",
    githubUrl: "",
    category: "Real Estate"
  },
  {
    title: "Cliftonville Gardens",
    tech: ['React', 'Vite', 'Tailwind v4', 'Framer Motion'],
    description: "A modern multi-page website for a supported living community. Features a mobile-first design, smooth page transitions, and a clean professional UI matching the Royal Blue & Orange brand identity.",
    // Royal Blue background, White text
    imageUrl: "https://placehold.co/800x500/003399/ffffff?text=Cliftonville+Gardens&font=roboto",
    projectUrl: "https://www.cliftonvillegardens.com",
    githubUrl: "https://github.com/Chidi09/Clifton-ville-website",
    category: "Healthcare"
  },
  {
    title: "Cliftonville Farms",
    tech: ['React', 'Vite', 'Tailwind CSS'],
    description: "Digital presence for the agricultural arm of Cliftonville. Showcases sustainable farming practices and produce availability with a focus on accessibility and performance.",
    // Green/Nature background
    imageUrl: "https://placehold.co/800x500/166534/ffffff?text=Cliftonville+Farms&font=roboto",
    projectUrl: "https://www.cliftonvillefarms.com",
    githubUrl: "",
    category: "Agriculture"
  },
  {
    title: "Finnitrex",
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    description: "A high-performance financial technology interface built with Next.js for server-side rendering and optimal SEO. Designed for speed and scalability.",
    // Modern Purple/Blue gradient feel
    imageUrl: "https://placehold.co/800x500/4f46e5/ffffff?text=Finnitrex+Finance&font=roboto",
    projectUrl: "https://www.finnitrex.com",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "FluxPay – Crypto Payment",
    tech: ['React', 'Node.js', 'MongoDB'], 
    description: "Automated payment gateway supporting USDT, Solana, BTC, and ETH. Generated unique wallets per transaction with real-time currency conversion.",
    imageUrl: "https://placehold.co/800x500/e2e8f0/4a5568?text=FluxPay+Crypto",
    projectUrl: "", 
    githubUrl: "https://github.com/Chidi09/fluxpay-repo-link-if-any",
    category: "Web3"
  },
  {
    title: "Smart Theming Engine",
    tech: ['Python', 'AI/ML', 'Tailwind CSS'],
    description: "AI-powered engine analyzing visual elements to extract color palettes and calculate symmetry, generating automatic UI themes for LMS platforms.",
    imageUrl: "https://placehold.co/800x500/7c3aed/ffffff?text=ChromaShift+Engine",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/smart-theming-engine",
    category: "AI Tool"
  },
  {
    title: "Campus Event Manager",
    tech: ['Python', 'Flask', 'SQLAlchemy'],
    description: "A comprehensive system for managing campus events, enabling task posting, status updates, and administrative oversight.",
    imageUrl: "https://placehold.co/800x500/f59e0b/ffffff?text=Campus+Events",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/campus-event-manager",
    category: "Management"
  }
];


// Main App component
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Helper to determine Project Category Icon
  const getCategoryIcon = (category) => {
      switch(category) {
          case 'FinTech': return <TrendingUp className="w-4 h-4" />;
          case 'Real Estate': return <Building className="w-4 h-4" />;
          case 'E-Commerce': return <ShoppingCart className="w-4 h-4" />;
          case 'Web3': return <Key className="w-4 h-4" />;
          default: return <Globe className="w-4 h-4" />;
      }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter text-gray-800 dark:text-gray-200 antialiased transition-colors duration-500">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header Section */}
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50 dark:bg-gray-800 dark:bg-opacity-80 transition-colors duration-500">
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
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors rounded-lg p-2 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full transition-colors"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-md py-4 mt-2 rounded-lg mx-4 dark:bg-gray-800 dark:bg-opacity-95">
            <ul className="flex flex-col items-center space-y-4">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="w-full">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-700 hover:text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-gray-700 w-full text-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 text-center overflow-hidden dark:from-gray-800 dark:to-gray-950 transition-colors duration-500">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-1/4 left-1/4 dark:bg-indigo-700"></div>
          <div className="absolute w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-1/2 right-1/4 dark:bg-purple-700"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-300 rounded-full mx-auto mb-8 overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105 animate-fade-in-up dark:bg-gray-700 dark:border-gray-800">
             {/* Replace with actual image */}
            <img
              src="https://placehold.co/192x192/cbd5e1/4a5568?text=Profile"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-fade-in-up delay-100">
            Hi, I'm <span className="text-indigo-700 dark:text-indigo-400">{personalData.name.split(' ')[0]}</span>.
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            {personalData.fullTagline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
              View My Work
            </button>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center dark:bg-gray-700 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-600"
            >
              <Mail className="w-5 h-5 mr-2" /> Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in-up delay-100">
              <img
                src="https://placehold.co/600x400/e2e8f0/4a5568?text=Working+On+Code"
                alt="About Me"
                className="rounded-xl shadow-lg transform transition-transform hover:scale-102"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-200">
              <p>{personalData.aboutMe}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">Education</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up delay-100 dark:bg-gray-700 dark:text-gray-200 border-l-4 border-indigo-500">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{personalData.education.degree}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{personalData.education.university} | {personalData.education.location}</p>
                <p className="text-md text-gray-500 dark:text-gray-400 font-mono mt-1">{personalData.education.years}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Core Focus:</span> {personalData.education.coursework}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">My Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-500 flex flex-col items-center justify-center text-center animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill, "w-10 h-10 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400")}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A selection of live platforms, full-stack applications, and architectural solutions I've engineered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up dark:bg-gray-700 dark:text-gray-200 border border-transparent dark:border-gray-600 hover:border-indigo-100 dark:hover:border-indigo-500"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-500 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Project+Preview'; }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 dark:text-indigo-300 shadow-sm flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-[10px] uppercase font-bold px-2 py-1 rounded border border-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                    {project.projectUrl && (
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                        Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ml-auto">
                        <Github className="w-4 h-4 mr-1" /> Code
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
      <section id="contact" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 animate-fade-in-up">Let's Connect</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
             Ready to bring your next project to life?
          </p>
          <form action="https://formspree.io/f/xdkdzqwd" method="POST" className="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100 animate-fade-in-up delay-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Name</label>
                <input type="text" name="name" className="w-full mt-2 p-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="John Doe" required />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email</label>
                <input type="email" name="email" className="w-full mt-2 p-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder={personalData.email} required />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Message</label>
                <textarea name="message" rows="4" className="w-full mt-2 p-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
                Send Message
              </button>
            </div>
          </form>

          <div className="flex justify-center space-x-8 mt-12 animate-fade-in-up delay-300">
            {[
              { icon: Github, link: personalData.github, color: "text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white" },
              { icon: Linkedin, link: personalData.linkedin, color: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200" },
              { icon: Twitter, link: personalData.twitter, color: "text-blue-400 hover:text-blue-600" }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className={`${social.color} transition-colors transform hover:scale-110`}>
                <social.icon className="w-8 h-8" />
              </a>
            ))}
             <a href={personalData.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="feather feather-whatsapp">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center border-t border-gray-800">
        <p className="text-sm">&copy; {personalData.currentYear} {personalData.name}. All rights reserved.</p>
        <p className="text-xs mt-2">Built with React, Tailwind & <span className="text-red-500">&hearts;</span></p>
      </footer>

      {/* Styles for animation */}
      <style>
        {`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </div>
  );
};

export default App;
