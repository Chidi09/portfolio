import React from 'react';
import { 
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiFastapi, 
  SiNodedotjs, SiGo, SiPython, SiFirebase, SiMongodb, 
  SiPostgresql, SiSupabase, SiGit, SiGithub, SiGooglegemini,
  SiFlutter, SiSpringboot, SiFastify
} from 'react-icons/si';
import { 
  TrendingUp, Building, ShoppingCart, Globe, Key, Palette, Sparkles
} from 'lucide-react';

export const personalData = {
  name: "Nneji Chidi Ben",
  tagline: "Lead Software Engineer",
  fullTagline: "Building digital experiences that merge high-performance engineering with exquisite design.",
  aboutMe: "I am a Software Engineer who bridges the gap between raw code and human experience. Currently, I serve as the Lead Developer for Finnitrex, a UK-based tech solutions company, where I solo-architected and developed their entire web infrastructure. With a portfolio spanning FinTech, Real Estate, and AI, I don't just build websites—I engineer ecosystems.",
  email: "your.email@example.com",
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

export const skills = [
  'React.js', 'Next.js', 'Angular', 'Tailwind CSS',
  'FastAPI', 'Node.js', 'Golang', 'Python',
  'Firebase', 'MongoDB', 'PostgreSQL', 'Supabase',
  'Gemini API', 'Git/GitHub', 'Smart Theming'
];

export const getSkillIcon = (skillName, className) => {
  switch (skillName) {
    case 'React.js': return <SiReact className={className} />;
    case 'Next.js': return <SiNextdotjs className={className} />;
    case 'Angular': return <SiAngular className={className} />;
    case 'Tailwind CSS': return <SiTailwindcss className={className} />;
    case 'FastAPI': return <SiFastapi className={className} />;
    case 'Node.js': return <SiNodedotjs className={className} />;
    case 'Golang': return <SiGo className={className} />;
    case 'Python': return <SiPython className={className} />;
    case 'Firebase': return <SiFirebase className={className} />;
    case 'MongoDB': return <SiMongodb className={className} />;
    case 'PostgreSQL': return <SiPostgresql className={className} />;
    case 'Supabase': return <SiSupabase className={className} />;
    case 'Gemini API': return <SiGooglegemini className={className} />;
    case 'Git/GitHub': return <SiGithub className={className} />;
    case 'Smart Theming': return <Palette className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export const projects = [
  {
    title: "Anna Digital Academy",
    tech: ['Next.js', 'React', 'Tailwind'],
    description: "A specialized incubator platform for African founders, providing practical business education from validation to market launch.",
    fallbackImage: "https://placehold.co/1280x800/10b981/ffffff?text=Anna+Digital+Academy&font=roboto",
    projectUrl: "https://www.annadigitalacademy.com/",
    githubUrl: "",
    category: "Education"
  },
  {
    title: "Heaven 11 Rewrite",
    tech: ['Next.js', 'React', 'Tailwind'],
    description: "A high-performance rewrite of the Heaven 11 platform, leveraging Next.js for optimized rendering, speed, and modern user experience.",
    fallbackImage: "https://placehold.co/1280x800/0f172a/ffffff?text=Heaven+11&font=roboto",
    projectUrl: "https://heaven-11-nextjs-rewrite.vercel.app/",
    githubUrl: "",
    category: "Real Estate"
  },
  {
    title: "SafeMeet",
    tech: ['Next.js', 'Fastify', 'Base', 'Flow'],
    description: "A non-custodial escrow protocol facilitating trustless P2P trades and commitment pacts via decentralized smart contracts and QR handshakes.",
    fallbackImage: "https://placehold.co/1280x800/0052FF/ffffff?text=SafeMeet&font=roboto",
    projectUrl: "https://app.safe-meet.click",
    githubUrl: "",
    category: "Web3"
  },
  {
    title: "Finnitrex (UK)",
    tech: ['Next.js', 'React', 'Tailwind'],
    description: "As the Lead Developer, I built this UK tech solutions platform solo using Next.js. Optimized for speed, SEO, and scalability.",
    fallbackImage: "https://placehold.co/1280x800/4f46e5/ffffff?text=Finnitrex+UK&font=roboto",
    projectUrl: "https://www.finnitrex.com",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "SolexPay",
    tech: ['Analog.js', 'Flutter', 'Spring Boot'],
    description: "A specialized digital wallet designed for Nigerian students to manage campus finances seamlessly, offering peer-to-peer transfers and bill payments.",
    fallbackImage: "https://placehold.co/1280x800/059669/ffffff?text=SolexPay&font=roboto",
    projectUrl: "https://solexpay.com.ng",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "Gazillion CRI",
    tech: ['Next.js', 'FastAPI', 'Tailwind'],
    description: "A Communication Research Intelligence platform helping organizations eliminate communication breakdowns through real-time data insights.",
    fallbackImage: "https://placehold.co/1280x800/0f172a/ffffff?text=Gazillion+CRI&font=roboto",
    projectUrl: "https://gazillioncri.com",
    githubUrl: "",
    category: "AI Tool"
  },
  {
    title: "Naijas Pride",
    tech: ['Angular', 'Fastify', 'Tailwind'],
    description: "A vibrant cultural platform celebrating Nigerian heritage, built with a high-performance Angular frontend and a robust Fastify backend.",
    fallbackImage: "https://placehold.co/1280x800/166534/ffffff?text=Naijas+Pride&font=roboto",
    projectUrl: "https://naijaspride.com",
    githubUrl: "",
    category: "Community"
  },
  {
    title: "VarianTrade",
    tech: ['Angular', 'Python', 'Go', 'PostgreSQL'],
    description: "A comprehensive AI-Powered Trading & Betting Platform with real-time arbitrage detection, built solo.",
    fallbackImage: "https://placehold.co/1280x800/0f172a/ffffff?text=VarianTrade+Platform&font=roboto",
    projectUrl: "https://variantrades.com",
    githubUrl: "",
    category: "FinTech"
  },
  {
    title: "Nigerian China Invest",
    tech: ['React', 'Vite', 'Golang', 'Supabase'],
    description: "Robust investment portal with trade opportunities and cart-based ordering systems, architected and developed solo.",
    fallbackImage: "https://placehold.co/1280x800/991b1b/ffffff?text=Investment+Portal&font=roboto",
    projectUrl: "https://www.nigerianchinainvestmentclub.com",
    githubUrl: "",
    category: "E-Commerce"
  },
  {
    title: "Grandkonsul Gardens",
    tech: ['React', 'Tailwind', 'Framer Motion'],
    description: "Premium real estate platform with smooth animations and SEO optimization, built solo using React.",
    fallbackImage: "https://placehold.co/1280x800/004d40/c5a059?text=Grandkonsul+Estates&font=playfair-display",
    projectUrl: "https://grandkonsulgardens.com",
    githubUrl: "",
    category: "Real Estate"
  },
  {
    title: "Cliftonville Gardens",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "Modern supported living community website with mobile-first design, developed solo.",
    fallbackImage: "https://placehold.co/1280x800/003399/ffffff?text=Cliftonville+Gardens&font=roboto",
    projectUrl: "https://www.cliftonvillegardens.com",
    githubUrl: "https://github.com/Chidi09/Clifton-ville-website",
    category: "Healthcare"
  },
  {
    title: "Cliftonville Farms",
    tech: ['React', 'Vite', 'Tailwind'],
    description: "Digital presence for agricultural operations showcasing sustainable produce, built solo.",
    fallbackImage: "https://placehold.co/1280x800/166534/ffffff?text=Cliftonville+Farms&font=roboto",
    projectUrl: "https://www.cliftonvillefarms.com",
    githubUrl: "",
    category: "Agriculture"
  },
  {
    title: "Smart Theming Engine",
    tech: ['Python', 'AI/ML'],
    description: "AI-powered engine analyzing visuals to generate automatic UI themes, built solo.",
    fallbackImage: "https://placehold.co/1280x800/7c3aed/ffffff?text=AI+Theming+Engine",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/smart-theming-engine",
    category: "AI Tool"
  },
  {
    title: "Campus Manager",
    tech: ['Python', 'Flask'],
    description: "Comprehensive system for managing campus events and tasks, developed solo using Flask.",
    fallbackImage: "https://placehold.co/1280x800/f59e0b/ffffff?text=Campus+Manager",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/campus-event-manager",
    category: "Management"
  }
];

export const getCategoryIcon = (category) => {
  switch (category) {
    case 'FinTech': return <TrendingUp className="w-3 h-3" />;
    case 'Real Estate': return <Building className="w-3 h-3" />;
    case 'E-Commerce': return <ShoppingCart className="w-3 h-3" />;
    case 'Web3': return <Key className="w-3 h-3" />;
    default: return <Globe className="w-3 h-3" />;
  }
};
