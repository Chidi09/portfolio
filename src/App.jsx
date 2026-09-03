import React, { useState, useEffect } from 'react';
import { personalData } from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import TechCarousel from './components/TechCarousel';
import Projects from './components/Projects';
import ProjectArchive from './components/ProjectArchive';
import About from './components/About';
import GithubCalendarSection from './components/GithubCalendarSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Dark mode initialization (default to true for high-contrast dark aesthetic, saved to localStorage)
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
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] font-sans text-neutral-900 dark:text-neutral-100 transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      <SEO />

      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main>
        <Hero personalData={personalData} scrollToSection={scrollToSection} />
        <TechCarousel />
        <Projects />
        <ProjectArchive />
        <About personalData={personalData} />
        <GithubCalendarSection darkMode={darkMode} />
        <Skills />
        <Contact personalData={personalData} />
      </main>

      <Footer personalData={personalData} />
    </div>
  );
};

export default App;


