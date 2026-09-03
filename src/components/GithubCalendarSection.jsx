import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ArrowUpRight, GitCommit } from 'lucide-react';

const GithubCalendarSection = ({ darkMode }) => {
  // Pure monochrome grayscale palette - strictly NO hues / NO greens
  const monochromeTheme = {
    light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#52525b', '#18181b'],
    dark: ['#18181b', '#27272a', '#52525b', '#a1a1aa', '#f4f4f5']
  };

  return (
    <section id="activity" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Section 05 // Open Source Cadence
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-950 dark:text-white tracking-tight">
              Commit <span className="font-serif italic font-normal">Telemetry</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href="https://github.com/Chidi09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-950 dark:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:opacity-70 transition-opacity"
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>github.com/Chidi09</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Calendar Card (Pure Monochrome) */}
        <div className="border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 bg-white dark:bg-neutral-950 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-8 border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
              <span className="uppercase tracking-wider">Year-to-Date Activity Spectrum</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Monochrome Visualizer</span>
          </div>

          <div className="overflow-x-auto pb-2 flex justify-center">
            <GitHubCalendar
              username="Chidi09"
              colorScheme={darkMode ? 'dark' : 'light'}
              theme={monochromeTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              style={{
                fontFamily: '"JetBrains Mono", monospace'
              }}
              labels={{
                totalCount: '{{count}} contributions in the last year'
              }}
            />
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
            <span>Aggregated across public repositories & client production deliveries</span>
            <span className="text-neutral-500">Source: GitHub REST Telemetry</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubCalendarSection;
