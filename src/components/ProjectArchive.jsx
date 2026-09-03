import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Github } from 'lucide-react';
import { allProjects } from '../data/portfolioData';

const ProjectArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const set = new Set(allProjects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="archive" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Section 03 // Complete Project Index
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
              Production <span className="font-serif italic font-normal">Archive</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-500 max-w-md">
            Full catalogue of commercial platforms, open-source frameworks, developer tools, and protocols engineered to date.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-neutral-950 dark:border-white'
                    : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 font-mono text-xs bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Tabular Archive */}
        <div className="border border-neutral-200 dark:border-neutral-800 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800 font-mono text-[11px] uppercase tracking-widest text-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/50">
                <th className="py-3 px-4 font-normal">Year</th>
                <th className="py-3 px-4 font-normal">Project</th>
                <th className="py-3 px-4 font-normal hidden sm:table-cell">Category</th>
                <th className="py-3 px-4 font-normal hidden md:table-cell">Role</th>
                <th className="py-3 px-4 font-normal hidden lg:table-cell">Stack</th>
                <th className="py-3 px-4 font-normal text-right">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-xs">
              {filteredProjects.map((p, i) => (
                <tr
                  key={i}
                  className="group hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 transition-colors"
                >
                  {/* Year */}
                  <td className="py-4 px-4 text-neutral-400 text-[11px] whitespace-nowrap">
                    {p.year}
                  </td>

                  {/* Title & Description */}
                  <td className="py-4 px-4 max-w-xs">
                    <div className="font-sans font-medium text-sm text-neutral-950 dark:text-white group-hover:underline underline-offset-4 decoration-neutral-400">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-sans">
                      {p.description}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4 text-neutral-500 text-[11px] hidden sm:table-cell uppercase tracking-wider whitespace-nowrap">
                    {p.category}
                  </td>

                  {/* Role */}
                  <td className="py-4 px-4 text-neutral-500 text-[11px] hidden md:table-cell whitespace-nowrap">
                    {p.role}
                  </td>

                  {/* Stack */}
                  <td className="py-4 px-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-1.5 py-0.5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-white/50 dark:bg-black/40 whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Action Link */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-3">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source for ${p.title}`}
                          className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {p.projectUrl ? (
                        <a
                          href={p.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-neutral-400 text-[11px]">Private</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center text-neutral-500 font-mono text-xs">
              No matching projects located for "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;
