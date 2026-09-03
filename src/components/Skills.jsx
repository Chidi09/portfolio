import React from 'react';
import { technicalCompetencies } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="competencies" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Section 06 // Technical Domains
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
              Engineering <span className="font-serif italic font-normal">Competencies</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500 max-w-md">
            Languages, frameworks, data engines, and protocol tools utilized across production systems.
          </p>
        </div>

        {/* 4-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950 space-y-4"
            >
              <div className="flex items-baseline justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
                <h3 className="font-sans font-medium text-lg text-neutral-950 dark:text-white">
                  {comp.domain}
                </h3>
                <span className="font-mono text-xs text-neutral-400">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                {comp.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {comp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

