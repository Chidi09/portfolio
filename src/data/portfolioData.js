export const personalData = {
  name: "Nneji Chidi Ben",
  preferredName: "Chidi Ben",
  role: "Lead Software Engineer",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  status: "Available for select contracts & senior engineering roles",
  bioHeadline: "Architecting resilient backends, developer tools & precision web systems.",
  bioDescription:
    "Lead Software Engineer specializing in systems programming, high-throughput backend architecture, distributed protocols, and developer infrastructure. Author of Djangors (the Django of Rust) and Spryteo (local-first SVG engine). Currently leading engineering at Finnitrex (UK).",
  aboutDetailed:
    "I am a software engineer focused on systems architecture, compiler and framework design, and interface craftsmanship. Over the past four years, I have engineered batteries-included web frameworks in Rust (Djangors), local-first vectorization engines with WebAssembly and MCP agent protocols (Spryteo), non-custodial decentralized escrow protocols (SafeMeet), and enterprise multi-tenant platforms (School OS, Finnitrex UK). My philosophy is grounded in simplicity: performant code, zero runtime surprises, and software that feels effortless to use.",
  email: "chidinneji09@gmail.com",
  github: "https://github.com/Chidi09",
  linkedin: "https://linkedin.com/in/chidi-ben",
  whatsapp: "https://wa.me/+2347019008948",
  twitter: "https://twitter.com/Benimaru177",
  currentYear: new Date().getFullYear(),
  metrics: [
    { label: "Production Platforms", value: "20+" },
    { label: "Crates Published", value: "32 Crates" },
    { label: "Core Stack", value: "Rust · Go · Next.js · TypeScript" },
    { label: "Client Footprint", value: "UK & Pan-Africa" }
  ],
  experience: [
    {
      role: "Lead Developer",
      company: "Finnitrex",
      location: "London, UK (Remote)",
      period: "2024 — Present",
      description:
        "Solo-architected and engineered the entire web infrastructure and client portal. Built modular Next.js systems with sub-second time-to-interactive, international SEO optimization, and automated deployment pipelines.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      role: "Systems & Framework Engineer",
      company: "Open Source & Independent Practice",
      location: "Lagos, Nigeria",
      period: "2022 — Present",
      description:
        "Designed and released Djangors (32-crate batteries-included Rust web framework), Spryteo (Rust/WASM SVG engine & MCP agent server), Varian language runtime, and production fintech & educational platforms.",
      stack: ["Rust", "Golang", "WASM", "Tokio", "FastAPI", "React", "Analog.js", "PostgreSQL"]
    }
  ],
  education: {
    degree: "B.Sc., Computer Science",
    institution: "Crawford University",
    location: "Lagos, Nigeria",
    years: "2021 — 2025",
    focus: "Software Engineering, Distributed Systems & Applied Machine Learning"
  }
};

export const technicalCompetencies = [
  {
    domain: "Systems & Backend",
    summary: "High-concurrency microservices, async runtimes, type-safe frameworks, and robust APIs.",
    skills: ["Rust", "Golang", "Tokio/Hyper", "Python", "FastAPI", "Node.js", "Fastify", "Spring Boot"]
  },
  {
    domain: "Frontend & UI Engineering",
    summary: "Precision interfaces, responsive typography, cross-platform mobile architectures, and fluid interactions.",
    skills: ["TypeScript", "React", "Next.js", "Flutter", "Dart", "Angular", "Analog.js", "Tailwind CSS", "WASM"]
  },
  {
    domain: "Data & Storage",
    summary: "Relational modeling, document stores, realtime subscriptions, and caching layers.",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "Redis", "SQLite"]
  },
  {
    domain: "Protocols & Developer Tooling",
    summary: "MCP (Model Context Protocol), AST/Compilers, EVM smart contracts, GitOps, and CLI engineering.",
    skills: ["MCP Server", "EVM / Base", "Flow Protocol", "Docker", "Cargo", "Git/GitHub", "Vercel"]
  }
];

export const flagshipProjects = [
  {
    id: "djangors",
    index: "01",
    title: "Djangors",
    category: "Systems & Web Framework",
    year: "2024",
    tagline: "The batteries-included Django-inspired web framework for Rust.",
    description:
      "Engineered a full-featured, modular web framework for Rust comprising 32 published crates. Bridges Django's developer velocity (ORM, auto-generated admin, migrations, forms, auth, and Paystack payments) with Rust's memory safety, sub-millisecond execution, and single-binary deploys.",
    architecture: [
      "Workspace of 32 modular crates on crates.io built on Tokio and Hyper async runtimes",
      "Compile-time verified ORM query builder preventing runtime schema drift",
      "Auto-generated admin site with audit logging, multi-tenancy scoping, and dj CLI tool"
    ],
    tech: ["Rust", "Tokio", "Hyper", "PostgreSQL", "CLI"],
    projectUrl: "https://djangors.vercel.app/",
    githubUrl: "https://github.com/Chidi09/djangors",
    badge: "Framework · 32 Crates"
  },
  {
    id: "spryteo",
    index: "02",
    title: "Spryteo",
    category: "Developer Tooling & WASM",
    year: "2024",
    tagline: "Local-first vectorization engine converting rasters into animateable SVGs.",
    description:
      "Designed a deterministic raster-to-SVG vectorizer engine. Rather than generating a single flattened blob, Spryteo generates semantic <g> group trees with stable blake3 content-hashed IDs. Ships as a standalone CLI, Node.js NAPI-rs library, in-browser WebAssembly runtime, and MCP server for AI agents.",
    architecture: [
      "Deterministic edge-tracing and Bézier curve fitting engine written in core Rust",
      "Compiled to WebAssembly for zero-server client-side conversion in the browser",
      "Model Context Protocol (MCP) server integration allowing LLM agents to vectorize assets"
    ],
    tech: ["Rust", "WebAssembly", "Node.js (NAPI)", "MCP", "TypeScript"],
    projectUrl: "https://spryteo.vercel.app",
    githubUrl: "https://github.com/chidi09/spryteo",
    badge: "Open Source · v1.0"
  },
  {
    id: "finnitrex",
    index: "03",
    title: "Finnitrex (UK)",
    category: "Enterprise Infrastructure",
    year: "2024",
    tagline: "Solo-architected web platform and digital systems for a UK tech consultancy.",
    description:
      "As the Lead Developer, I took complete ownership of Finnitrex's digital presence from wireframe to production. Engineered a high-performance Next.js architecture with instant route transitions, dynamic service cataloging, and top-tier Core Web Vitals.",
    architecture: [
      "Modular Next.js App Router for dynamic localization and lightning-fast edge rendering",
      "Tailwind design system tuned for corporate elegance and typography hierarchy",
      "Strict zero-bloat asset pipeline achieving 98+ Google Lighthouse scores"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://www.finnitrex.com",
    githubUrl: "",
    badge: "Production Client"
  },
  {
    id: "schoolos",
    index: "04",
    title: "School OS",
    category: "EdTech & Enterprise OS",
    year: "2024",
    tagline: "Comprehensive intelligent operating system for schools and universities.",
    description:
      "Multi-tenant institutional operating platform engineered for the Nigerian academic structure. Integrates automated 5-point GPA/CGPA computations, financial fee ledgers with Paystack & offline bank reconciliations, Moodle LMS roster syncing, and automated report card generation.",
    architecture: [
      "Analog.js / Angular SSR frontend with role-based portals for admins, lecturers, and students",
      "Paystack gateway integration with double-entry fee ledger and clearance slip issuance",
      "Bidirectional LMS synchronization with dedicated Moodle tenant instances"
    ],
    tech: ["Analog.js", "Angular", "TypeScript", "Tailwind CSS", "Paystack", "Moodle"],
    projectUrl: "https://schoolos-peach.vercel.app/",
    githubUrl: "",
    badge: "Enterprise Platform"
  },
  {
    id: "safemeet",
    index: "05",
    title: "SafeMeet Protocol",
    category: "Web3 & P2P Escrow",
    year: "2024",
    tagline: "Non-custodial escrow protocol facilitating trustless trades and commitment pacts.",
    description:
      "Engineered a decentralized security layer for peer-to-peer exchanges. SafeMeet utilizes smart contract escrows on Base and Flow with QR-code cryptographic handshakes to eliminate counterparty risk without third-party custodians.",
    architecture: [
      "Decentralized smart contract state machine handling fund lock, dispute, and release",
      "QR cryptographic handshake protocol for physical and digital verification",
      "High-throughput Fastify backend indexing blockchain transactions and events"
    ],
    tech: ["Next.js", "Fastify", "Base", "Flow", "EVM"],
    projectUrl: "https://app.safe-meet.click",
    githubUrl: "",
    badge: "Protocol"
  },
  {
    id: "varianlang",
    index: "06",
    title: "Varian Language",
    category: "Compilers & Languages",
    year: "2024",
    tagline: "A fast, memory-safe language with native actors and full-stack runtime.",
    description:
      "An experimental language designed for full-stack unification. Features native actor-based concurrency, channels, an integrated batteries-included web framework (Zenith), server-driven UI framework (Lumen), and package management tooling.",
    architecture: [
      "Actor-model runtime with message-passing channels for lock-free concurrency",
      "Zenith web framework module compiling directly into optimized binary handlers",
      "Interactive browser-based live execution playground and AST explorer"
    ],
    tech: ["Compilers", "Systems", "Actors", "Runtime", "TypeScript"],
    projectUrl: "https://varian-lang.vercel.app/",
    githubUrl: "",
    badge: "Language Design"
  }
];

export const allProjects = [
  {
    title: "Bloom Platform",
    category: "Mobile & Frameworks",
    year: "2024",
    role: "Platform Architect",
    tech: ["Dart", "Flutter", "bloom_cli", "Signals", "Shorebird OTA", "Backend ORM"],
    description: "Opinionated application platform for Dart & Flutter: client architecture, CLI tooling, server ORM, and Shorebird OTA.",
    projectUrl: "https://bloom-platform-ten.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Djangors",
    category: "Systems & Web",
    year: "2024",
    role: "Framework Author",
    tech: ["Rust", "Tokio", "Hyper", "PostgreSQL", "CLI"],
    description: "Batteries-included web framework for Rust (32 crates): ORM, admin site, auth, forms, and Paystack.",
    projectUrl: "https://djangors.vercel.app/",
    githubUrl: "https://github.com/Chidi09/djangors"
  },
  {
    title: "Spryteo",
    category: "Developer Tooling",
    year: "2024",
    role: "Author & Architect",
    tech: ["Rust", "WASM", "Node.js (NAPI)", "MCP", "CLI"],
    description: "Local-first vectorization engine converting raster images into clean, animateable, semantically grouped SVGs.",
    projectUrl: "https://spryteo.vercel.app",
    githubUrl: "https://github.com/chidi09/spryteo"
  },
  {
    title: "School OS",
    category: "EdTech & OS",
    year: "2024",
    role: "Lead Architect",
    tech: ["Analog.js", "Angular", "TypeScript", "Paystack", "Moodle"],
    description: "Comprehensive school management platform: automated CGPA, fee ledger, Moodle LMS sync, and report cards.",
    projectUrl: "https://schoolos-peach.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Varian Language",
    category: "Compilers",
    year: "2024",
    role: "Systems Designer",
    tech: ["Compilers", "Actors", "Runtime", "Zenith", "TypeScript"],
    description: "Fast, memory-safe language with native actors, channels, integrated web framework, and UI runtime.",
    projectUrl: "https://varian-lang.vercel.app/",
    githubUrl: ""
  },
  {
    title: "NaijaJollof",
    category: "Commerce",
    year: "2024",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "React", "Tailwind CSS", "App Router"],
    description: "Production food ordering & delivery platform with real-time tracking operating across Lagos and Ota.",
    projectUrl: "https://jollofnaija.com/",
    githubUrl: ""
  },
  {
    title: "Hebrews Eleven",
    category: "AI & Advisory",
    year: "2024",
    role: "Lead Web Engineer",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    description: "UK AI governance consultancy platform featuring the proprietary CLARITY Framework™ diagnostic.",
    projectUrl: "https://www.hebrewseleven.com/",
    githubUrl: ""
  },
  {
    title: "Finnitrex (UK)",
    category: "Enterprise",
    year: "2024",
    role: "Lead Developer",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Enterprise tech solutions platform with sub-second page loads and custom service catalog.",
    projectUrl: "https://www.finnitrex.com",
    githubUrl: ""
  },
  {
    title: "SafeMeet Protocol",
    category: "Web3",
    year: "2024",
    role: "Full-Stack Architect",
    tech: ["Next.js", "Fastify", "Base", "Flow"],
    description: "Non-custodial P2P escrow protocol with smart contracts and QR handshake verification.",
    projectUrl: "https://app.safe-meet.click",
    githubUrl: ""
  },
  {
    title: "SolexPay",
    category: "FinTech",
    year: "2023",
    role: "Full-Stack Developer",
    tech: ["Analog.js", "Flutter", "Spring Boot", "PostgreSQL"],
    description: "Closed-loop digital wallet for student peer-to-peer campus transfers and merchant checkouts.",
    projectUrl: "https://solexpay.com.ng",
    githubUrl: ""
  },
  {
    title: "VarianTrade",
    category: "FinTech",
    year: "2023",
    role: "Systems Engineer",
    tech: ["Angular", "Golang", "Python", "PostgreSQL"],
    description: "Real-time sports and trading market arbitrage detection engine powered by Go microservices.",
    projectUrl: "https://variantrades.com",
    githubUrl: ""
  },
  {
    title: "Gazillion CRI",
    category: "AI & Data",
    year: "2024",
    role: "Lead Engineer",
    tech: ["Next.js", "FastAPI", "Tailwind CSS"],
    description: "Communication Research Intelligence system diagnosing organizational information bottlenecks.",
    projectUrl: "https://gazillioncri.com",
    githubUrl: ""
  },
  {
    title: "Anna Digital Academy",
    category: "EdTech",
    year: "2023",
    role: "Full-Stack Developer",
    tech: ["Next.js", "React", "Tailwind CSS"],
    description: "Digital incubator portal for early-stage African founders validating business models.",
    projectUrl: "https://www.annadigitalacademy.com/",
    githubUrl: ""
  },
  {
    title: "Nigerian China Invest",
    category: "Commerce",
    year: "2023",
    role: "Lead Developer",
    tech: ["React", "Golang", "Supabase"],
    description: "Cross-border investment portal with bilateral trade listings and escrow order tracking.",
    projectUrl: "https://www.nigerianchinainvestmentclub.com",
    githubUrl: ""
  },
  {
    title: "Grandkonsul Gardens",
    category: "Real Estate",
    year: "2023",
    role: "Frontend Engineer",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description: "Luxury architectural real estate showcase with editorial typography and responsive galleries.",
    projectUrl: "https://grandkonsulgardens.com",
    githubUrl: ""
  },
  {
    title: "Dpee Network",
    category: "Civic & NGO",
    year: "2023",
    role: "Web Engineer",
    tech: ["React", "Vite", "Tailwind CSS"],
    description: "Community platform for youth education, rehabilitation outreach, and donor tracking.",
    projectUrl: "https://www.dpeenetwork.com/",
    githubUrl: ""
  },
  {
    title: "Cliftonville Gardens",
    category: "Healthcare",
    year: "2023",
    role: "Full-Stack Developer",
    tech: ["React", "Vite", "Tailwind CSS"],
    description: "Supported living community website with patient accessibility-first layouts.",
    projectUrl: "https://www.cliftonvillegardens.com",
    githubUrl: "https://github.com/Chidi09/Clifton-ville-website"
  },
  {
    title: "Cliftonville Farms",
    category: "Agriculture",
    year: "2023",
    role: "Frontend Developer",
    tech: ["React", "Vite", "Tailwind CSS"],
    description: "Digital presence for agricultural operations showcasing sustainable farm produce.",
    projectUrl: "https://www.cliftonvillefarms.com",
    githubUrl: ""
  },
  {
    title: "Naijas Pride",
    category: "Media",
    year: "2023",
    role: "Frontend Developer",
    tech: ["Angular", "Fastify", "Tailwind CSS"],
    description: "Cultural editorial platform celebrating African creative arts and community archives.",
    projectUrl: "https://naijaspride.com",
    githubUrl: ""
  },
  {
    title: "2-Gees Business",
    category: "Business",
    year: "2023",
    role: "Web Developer",
    tech: ["React", "Vite", "Tailwind CSS"],
    description: "High-conversion business landing page featuring optimized consultation booking flows.",
    projectUrl: "https://2-gees-website.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Smart Theming Engine",
    category: "AI Tools",
    year: "2023",
    role: "Author",
    tech: ["Python", "Computer Vision", "AI/ML"],
    description: "Automated color theory and palette extraction engine generating cohesive UI themes.",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/smart-theming-engine"
  },
  {
    title: "Campus Manager",
    category: "Systems",
    year: "2022",
    role: "Author",
    tech: ["Python", "Flask", "SQLite"],
    description: "Campus-wide event scheduler, attendee management, and notification dispatch system.",
    projectUrl: "",
    githubUrl: "https://github.com/Chidi09/campus-event-manager"
  }
];

