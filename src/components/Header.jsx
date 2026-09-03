import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, scrollToSection, activeSection }) => {
  const [time, setTime] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'flagships', label: 'Case Studies' },
    { id: 'archive', label: 'Index' },
    { id: 'experience', label: 'Experience' },
    { id: 'activity', label: 'Activity' },
    { id: 'competencies', label: 'Stack' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#fafafa]/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Identity */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left"
        >
          <span className="font-serif text-xl tracking-tight text-neutral-900 dark:text-white group-hover:opacity-70 transition-opacity">
            Chidi Ben
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-neutral-500 uppercase tracking-wider border-l border-neutral-300 dark:border-neutral-700 pl-3">
            Lead SWE
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'text-neutral-950 dark:text-white font-medium underline underline-offset-8 decoration-neutral-400'
                      : 'text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Details: Lagos Time + Theme Toggle + Connect + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Lagos Real-Time Clock */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-neutral-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 animate-pulse" />
            <span>LOS {time || '12:00:00'}</span>
          </div>

          <div className="h-4 w-px bg-neutral-200 dark:border-neutral-800 hidden lg:block" />

          {/* Minimalist Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 stroke-[1.5]" /> : <Moon className="w-4 h-4 stroke-[1.5]" />}
          </button>

          {/* Quick CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden font-mono text-xs uppercase tracking-wider px-2 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#09090b] px-6 py-6 font-mono text-xs space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-neutral-100 dark:border-neutral-900 uppercase tracking-wider ${
                  activeSection === item.id ? 'text-neutral-950 dark:text-white font-medium' : 'text-neutral-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400 border-t border-neutral-100 dark:border-neutral-900">
            <span>LOS {time}</span>
            <span>LAGOS · UTC+1</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

