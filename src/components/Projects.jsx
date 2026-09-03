import React from 'react';
import FlagshipCard from './FlagshipCard';
import { flagshipProjects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="flagships" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Section 02 // Engineering Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
              Flagship <span className="font-serif italic font-normal">Architectures</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500 max-w-md">
            Selected systems, frameworks, and protocols demonstrating architectural ownership, systems programming, and production scale.
          </p>
        </div>

        {/* Flagship Case Studies List */}
        <div className="space-y-16">
          {flagshipProjects.map((project) => (
            <FlagshipCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

