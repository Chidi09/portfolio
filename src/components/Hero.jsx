import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import profilePic from "../59f8ca04-460f-4995-bd3d-96ab2b52648a.jpeg";

const Hero = ({ personalData, scrollToSection }) => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalData.status}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{personalData.location}</span>
            <span>{personalData.timezone}</span>
          </div>
        </div>

        {/* Hero Main: Editorial Headline + Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-12 pb-10">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-8">
              Architecting <span className="font-serif italic font-normal">resilient</span> backends <br className="hidden sm:inline" />
              &amp; precision web systems.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10">
              {personalData.bioDescription}
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("flagships")}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <span>Selected Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-mono text-xs uppercase tracking-wider hover:border-neutral-950 dark:hover:border-white transition-colors"
              >
                <span>Initiate Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => scrollToSection("archive")}
                className="font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors px-3 py-3"
              >
                Explore Full Index →
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Designer Portrait */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative group w-48 sm:w-56 lg:w-64">
              {/* Outer Minimalist Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-2 shadow-2xl transition-all duration-500 group-hover:border-neutral-400 dark:group-hover:border-neutral-600">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
                  <img
                    src={profilePic}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10">
                    <span className="truncate">{personalData.name}</span>
                    <span className="text-emerald-400 text-[9px] flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Crosshair Accents */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-neutral-400 dark:border-neutral-600 pointer-events-none" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-neutral-400 dark:border-neutral-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Metric / Spec Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 font-mono">
          {personalData.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-light text-neutral-950 dark:text-white">
                {m.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-neutral-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
