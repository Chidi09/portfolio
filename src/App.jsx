import React, { useState, useEffect } from 'react';
import { personalData, projects, skills } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Dark mode initialization
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return JSON.parse(savedMode);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] font-inter text-gray-800 dark:text-gray-200 transition-colors duration-500 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <SEO />

      {/* --- GRID BACKGROUND EFFECT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px] dark:opacity-20"></div>
      </div>

      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main>
        <Hero personalData={personalData} scrollToSection={scrollToSection} />
        <About personalData={personalData} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact personalData={personalData} scrollToSection={scrollToSection} />
      </main>

      <Footer personalData={personalData} />
    </div>
  );
};

export default App;
