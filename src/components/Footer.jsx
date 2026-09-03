import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ personalData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#fafafa] dark:bg-[#09090b] text-neutral-500 text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-neutral-900 dark:text-neutral-100">
            &copy; {personalData.currentYear} {personalData.name}
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">/</span>
          <span>Lagos, Nigeria</span>
        </div>

        <div className="text-neutral-400 text-[11px] text-center">
          Monochrome Craft & Systems Architecture
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white uppercase tracking-wider transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

