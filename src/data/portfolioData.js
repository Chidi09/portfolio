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
    "I am a software engineer focused on systems architecture, compiler and framework design, and interface craftsmanship. Over the past four years, I have engineered batteries-included web frameworks in Rust (Djangors), local-first vectorization engines with WebAssembly and MCP agent protocols (Spryteo), opinionated mobile platforms for Dart & Flutter (Bloom), non-custodial decentralized escrow protocols (SafeMeet), and enterprise web infrastructures (Finnitrex UK). My philosophy is grounded in simplicity: performant code, zero runtime surprises, and software that feels effortless to use.",
  email: "chidiisking7@gmail.com",
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
        "Designed and released Djangors (32-crate batteries-included Rust web framework), Spryteo (Rust/WASM SVG engine & MCP agent server), Bloom Platform (Dart & Flutter app platform), Varian language runtime, and production fintech platforms.",
      stack: ["Rust", "Golang", "Dart", "Flutter", "WASM", "Tokio", "FastAPI", "React", "PostgreSQL"]
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
    skills: ["TypeScript", "React", "Next.js", "Flutter", "Dart", "Nuxt.js", "Vue.js", "Angular", "Analog.js", "Tailwind CSS", "WASM"]
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
      "Engineered a full-featured, modular web framework for Rust comprising 32 published crates. Bridges Django developer velocity (ORM, auto-generated admin, migrations, forms, auth, and Paystack payments) with Rust memory safety, sub-millisecond execution, and single-binary deploys.",
    architecture: [
      "Workspace of 32 modular crates on crates.io built on Tokio and Hyper async runtimes",
      "Compile-time verified ORM query builder preventing runtime schema drift",
      "Auto-generated admin site with audit logging, multi-tenancy scoping, and dj CLI tool"
    ],
    tech: ["Rust", "Tokio", "Hyper", "PostgreSQL", "CLI"],
    projectUrl: "https://djangors.vercel.app/",
    githubUrl: "https://github.com/Chidi09/djangors",
    previewImage: "/previews/djangors.png",
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
    previewImage: "/previews/spryteo.png",
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
      "As the Lead Developer, I took complete ownership of Finnitrex digital presence from wireframe to production. Engineered a high-performance Next.js architecture with instant route transitions, dynamic service cataloging, and top-tier Core Web Vitals.",
    architecture: [
      "Modular Next.js App Router for dynamic localization and lightning-fast edge rendering",
      "Tailwind design system tuned for corporate elegance and typography hierarchy",
      "Strict zero-bloat asset pipeline achieving 98+ Google Lighthouse scores"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://www.finnitrex.com",
    githubUrl: "",
    previewImage: "/previews/finnitrex.png",
    badge: "Production Client"
  },
  {
    id: "bloom",
    index: "04",
    title: "Bloom Platform",
    category: "Mobile & Frameworks",
    year: "2024",
    tagline: "The opinionated application platform for Dart & Flutter.",
    description:
      "Architected an end-to-end full-stack platform for Dart and Flutter. Integrates the bloom_cli code generator, Signals reactive state management, GoRouter navigation, Bloom Server (Dart backend & relational ORM), Shorebird over-the-air (OTA) updates, and a modular UI design system.",
    architecture: [
      "Full CLI toolchain (bloom_cli) generating signals state, router trees, and typesafe RPCs",
      "Bloom Server lightweight relational ORM running natively on Dart runtime",
      "Instant hot-patching pipeline via Shorebird OTA and production UI block library"
    ],
    tech: ["Dart", "Flutter", "bloom_cli", "Signals", "Shorebird OTA", "ORM"],
    projectUrl: "https://bloom-platform-ten.vercel.app/",
    githubUrl: "",
    previewImage: "/previews/bloom.png",
    badge: "App Platform · Flutter"
  },
  {
    id: "variantrade",
    index: "05",
    title: "VarianTrade Engine",
    category: "FinTech & Systems",
    year: "2023",
    tagline: "Real-time market odds aggregation and sub-millisecond arbitrage engine.",
    description:
      "A high-concurrency calculation platform scanning market spreads and odds discrepancies in real time. Built with Go microservices consuming live persistent WebSocket feeds for mathematical spread analysis and sub-50ms automated alert dispatching.",
    architecture: [
      "Concurrent Go worker pools consuming live odds data over persistent WebSockets",
      "Python-driven mathematical model detecting cross-market spread anomalies",
      "Angular frontend with real-time streaming charts and rapid order execution UI"
    ],
    tech: ["Angular", "Golang", "Python", "PostgreSQL", "WebSockets"],
    projectUrl: "https://variantrades.com",
    githubUrl: "",
    previewImage: "/previews/variantrade.png",
    badge: "High-Frequency FinTech"
  },
  {
    id: "crush",
    index: "06",
    title: "Crush",
    category: "Developer Tooling & Systems",
    year: "2024",
    tagline: "Lightweight Docker Desktop alternative for native Windows (No WSL2).",
    description:
      "A fast, lightweight Docker Desktop alternative designed for native Windows development without the memory overhead of virtualized WSL2 environments. Run docker-compose dependencies like Postgres & Redis with sub-second daemon initialization.",
    architecture: [
      "Native Windows container orchestration bypassing WSL2 virtual machine memory footprint",
      "Instant sub-second daemon startup time with minimal idle RAM usage (<150MB)",
      "Streamlined developer UI with realtime log streaming and container health telemetry"
    ],
    tech: ["Go/Rust", "Containers", "Docker Compose", "Tailwind CSS", "Systems"],
    projectUrl: "https://crush-web-six.vercel.app/",
    githubUrl: "https://github.com/Chidi09/crush",
    previewImage: "/previews/crush.png",
    badge: "Developer Tooling · v1.0"
  },
  {
    id: "nigeriachina",
    index: "07",
    title: "Nigerian China Investment Club",
    category: "Cross-Border Commerce",
    year: "2023",
    tagline: "Bilateral investment portal with trade listings and transaction pipelines.",
    description:
      "International business platform facilitating bilateral trade and strategic ventures between Nigerian founders and Chinese manufacturing hubs. Features opportunity pipelines, verified investor vetting, and bilingual inquiry management.",
    architecture: [
      "High-performance React frontend with editorial responsive typography and showcase galleries",
      "Go microservices backend for investor vetting, enquiry routing, and audit logs",
      "Supabase database integration with document vault for cross-border deal compliance"
    ],
    tech: ["React", "Golang", "Supabase", "Tailwind CSS", "REST API"],
    projectUrl: "https://www.nigerianchinainvestmentclub.com",
    githubUrl: "",
    previewImage: "/previews/nigeriachina.png",
    badge: "International Commerce"
  },
  {
    id: "varianlang",
    index: "08",
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
    previewImage: "/previews/varianlang.png",
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
    githubUrl: "",
    previewImage: "/previews/bloom.png"
  },
  {
    title: "Djangors",
    category: "Systems & Web",
    year: "2024",
    role: "Framework Author",
    tech: ["Rust", "Tokio", "Hyper", "PostgreSQL", "CLI"],
    description: "Batteries-included web framework for Rust (32 crates): ORM, admin site, auth, forms, and Paystack.",
    projectUrl: "https://djangors.vercel.app/",
    githubUrl: "https://github.com/Chidi09/djangors",
    previewImage: "/previews/djangors.png"
  },
  {
    title: "Spryteo",
    category: "Developer Tooling",
    year: "2024",
    role: "Author & Architect",
    tech: ["Rust", "WASM", "Node.js (NAPI)", "MCP", "CLI"],
    description: "Local-first vectorization engine converting raster images into clean, animateable, semantically grouped SVGs.",
    projectUrl: "https://spryteo.vercel.app",
    githubUrl: "https://github.com/chidi09/spryteo",
    previewImage: "/previews/spryteo.png"
  },
  {
    title: "School OS",
    category: "EdTech & OS",
    year: "2024",
    role: "Lead Architect",
    tech: ["Analog.js", "Angular", "TypeScript", "Paystack", "Moodle"],
    description: "Comprehensive school management platform: automated CGPA, fee ledger, Moodle LMS sync, and report cards.",
    projectUrl: "https://schoolos-peach.vercel.app/",
    githubUrl: "",
    previewImage: "/previews/schoolos.png"
  },
  {
    title: "Varian Language",
    category: "Compilers",
    year: "2024",
    role: "Systems Designer",
    tech: ["Compilers", "Actors", "Runtime", "Zenith", "TypeScript"],
    description: "Fast, memory-safe language with native actors, channels, integrated web framework, and UI runtime.",
    projectUrl: "https://varian-lang.vercel.app/",
    githubUrl: "",
    previewImage: "/previews/varianlang.png"
  },
  {
    title: "NaijaJollof",
    category: "Commerce",
    year: "2024",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "React", "Tailwind CSS", "App Router"],
    description: "Production food ordering & delivery platform with real-time tracking operating across Lagos and Ota.",
    projectUrl: "https://jollofnaija.com/",
    githubUrl: "",
    previewImage: "/previews/jollofnaija.png"
  },
  {
    title: "GoGo Super-App",
    category: "FinTech & Civic",
    year: "2024",
    role: "Lead Systems Architect",
    tech: ["Next.js", "React", "Paystack", "KYC/BVN", "PostgreSQL", "Tailwind CSS"],
    description: "The all-Nigeria super-app connecting agricultural trade, digital wallets, KYC onboarding, and civic data across 774 LGAs.",
    projectUrl: "https://gogoapp.com.ng/",
    githubUrl: "",
    previewImage: "/previews/gogoapp.png"
  },
  {
    title: "Market Circle",
    category: "Marketplace & Commerce",
    year: "2023",
    role: "Frontend Engineer",
    tech: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Stripe", "Laravel API"],
    description: "Multi-sided commercial marketplace connecting buyers, sellers, and leaders, built with Nuxt.js, Stripe payments, and a Laravel API.",
    projectUrl: "",
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
    githubUrl: "",
    previewImage: "/previews/hebrewseleven.png"
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
  ,
    previewImage: "/previews/variantrade.png"},
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
  ,
    previewImage: "/previews/nigeriachina.png"},
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

