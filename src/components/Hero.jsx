import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero = ({ personalData, scrollToSection }) => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>{personalData.status}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{personalData.location}</span>
            <span>{personalData.timezone}</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="pt-12 pb-8 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-8">
            Architecting <span className="font-serif italic font-normal">resilient</span> backends <br className="hidden sm:inline" />
            & precision web systems.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mb-12">
            {personalData.bioDescription}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('flagships')}
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
              onClick={() => scrollToSection('archive')}
              className="font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors px-3 py-3"
            >
              Explore Full Index →
            </button>
          </div>
        </div>

        {/* Metric / Spec Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 font-mono">
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

