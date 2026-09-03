import React from 'react';
import {
  SiCloudflare,
  SiRust,
  SiPython,
  SiTypescript,
  SiGo,
  SiDocker,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiWebassembly,
  SiTailwindcss,
  SiRedis,
  SiSupabase,
  SiLinux
} from 'react-icons/si';

// Custom SVG for Paystack with dark/light mode compatibility
const PaystackIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4.5h16c.55 0 1 .45 1 1v1.8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5.5c0-.55.45-1 1-1zm0 6.1h11.5c.55 0 1 .45 1 1v1.8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.8c0-.55.45-1 1-1zm0 6.1h16c.55 0 1 .45 1 1v1.8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.8c0-.55.45-1 1-1z" />
  </svg>
);

// Real official icon from bachs.io
const BachsIcon = ({ className }) => (
  <img
    src="/bachs-icon.png"
    alt="Bachs"
    className="w-5 h-5 rounded object-contain border border-neutral-700/50 shadow-sm"
  />
);

const techItems = [
  {
    name: 'Cloudflare',
    role: 'Edge & Workers',
    icon: SiCloudflare,
    cdnFallback: 'https://cdn.simpleicons.org/cloudflare'
  },
  {
    name: 'Paystack',
    role: 'FinTech Rails',
    icon: PaystackIcon,
    cdnFallback: 'https://cdn.simpleicons.org/paystack'
  },
  {
    name: 'Bachs',
    role: 'Core BaaS Rails',
    icon: BachsIcon
  },
  {
    name: 'Rust',
    role: 'Systems & Tokio',
    icon: SiRust,
    cdnFallback: 'https://cdn.simpleicons.org/rust'
  },
  {
    name: 'Python',
    role: 'FastAPI & NumPy',
    icon: SiPython,
    cdnFallback: 'https://cdn.simpleicons.org/python'
  },
  {
    name: 'TypeScript',
    role: 'Strict Typing',
    icon: SiTypescript,
    cdnFallback: 'https://cdn.simpleicons.org/typescript'
  },
  {
    name: 'Golang',
    role: 'Microservices',
    icon: SiGo,
    cdnFallback: 'https://cdn.simpleicons.org/go'
  },
  {
    name: 'Docker',
    role: 'Containerization',
    icon: SiDocker,
    cdnFallback: 'https://cdn.simpleicons.org/docker'
  },
  {
    name: 'PostgreSQL',
    role: 'ACID Relational',
    icon: SiPostgresql,
    cdnFallback: 'https://cdn.simpleicons.org/postgresql'
  },
  {
    name: 'Dart & Flutter',
    role: 'Cross-Platform',
    icon: SiFlutter,
    cdnFallback: 'https://cdn.simpleicons.org/flutter'
  },
  {
    name: 'WebAssembly',
    role: 'In-Browser Core',
    icon: SiWebassembly,
    cdnFallback: 'https://cdn.simpleicons.org/webassembly'
  },
  {
    name: 'Next.js',
    role: 'Edge SSR Router',
    icon: SiNextdotjs,
    cdnFallback: 'https://cdn.simpleicons.org/nextdotjs'
  },
  {
    name: 'Redis',
    role: 'PubSub & Cache',
    icon: SiRedis,
    cdnFallback: 'https://cdn.simpleicons.org/redis'
  },
  {
    name: 'Supabase',
    role: 'Postgres Vault',
    icon: SiSupabase,
    cdnFallback: 'https://cdn.simpleicons.org/supabase'
  },
  {
    name: 'Tailwind CSS',
    role: 'Design Systems',
    icon: SiTailwindcss,
    cdnFallback: 'https://cdn.simpleicons.org/tailwindcss'
  },
  {
    name: 'Linux',
    role: 'Debian / Daemons',
    icon: SiLinux,
    cdnFallback: 'https://cdn.simpleicons.org/linux'
  }
];

const TechCarousel = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...techItems, ...techItems];

  return (
    <section className="py-14 border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-950/40 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            Core Toolchain &amp; Production Stack
          </span>
        </div>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
          Continuously Deployed in Production Systems
        </span>
      </div>

      {/* Marquee Viewport with Left & Right Gradient Vignettes */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafafa] dark:from-[#09090b] to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafafa] dark:from-[#09090b] to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex items-center gap-4 py-2 hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group inline-flex items-center gap-3.5 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-300 shrink-0"
              >
                {/* Icon with Light/Dark Mode CSS Adaptation */}
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200" />
                </div>

                {/* Tech Label & Production Context */}
                <div className="flex flex-col text-left">
                  <span className="font-sans font-medium text-xs text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 whitespace-nowrap">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;
