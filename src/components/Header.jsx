import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection, activeSection }) => {
  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('hero')} className="text-xl font-bold tracking-tighter flex items-center gap-2 text-gray-900 dark:text-white group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Chidi</span>.jsx
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Education', 'Skills', 'Projects'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-indigo-500 ${activeSection === item.toLowerCase() ? 'text-indigo-500' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-400">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 md:hidden flex flex-col items-center gap-4 shadow-xl">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="w-full py-3 text-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
