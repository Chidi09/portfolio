import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = ({ personalData }) => {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Section 04 // Track Record & Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
              Experience & <span className="font-serif italic font-normal">Practice</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500 max-w-md">
            Solo-architecting commercial platforms, decentralized protocols, and resilient infrastructure.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Narrative Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-light text-neutral-950 dark:text-white">
              Engineering philosophy grounded in rigor and simplicity.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {personalData.aboutDetailed}
            </p>
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-3">
                Academic Background
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
                <div className="font-sans font-medium text-sm text-neutral-950 dark:text-white">
                  {personalData.education.degree}
                </div>
                <div className="text-xs text-neutral-500 font-mono mt-1">
                  {personalData.education.institution} · {personalData.education.years}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                  {personalData.education.focus}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Right Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">
              Career Timeline
            </div>

            <div className="space-y-6">
              {personalData.experience.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 bg-white dark:bg-neutral-950 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
                    <div>
                      <h4 className="text-base font-medium text-neutral-950 dark:text-white font-sans">
                        {item.role}
                      </h4>
                      <div className="text-xs font-mono text-neutral-500 mt-0.5">
                        {item.company} · {item.location}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

