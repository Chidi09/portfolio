import React from 'react';
import { ArrowRight, Atom, Server, Terminal, Database, Cloud } from 'lucide-react';
import profilePic from '../59f8ca04-460f-4995-bd3d-96ab2b52648a.jpeg';

const Hero = ({ personalData, scrollToSection }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-block mb-6 p-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-blob">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-black bg-gray-200">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          I Engineer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Digital Ecosystems</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {personalData.fullTagline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Powering Applications With</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <Atom className="w-8 h-8 hover:text-blue-400" />
            <Server className="w-8 h-8 hover:text-green-500" />
            <Terminal className="w-8 h-8 hover:text-cyan-400" />
            <Database className="w-8 h-8 hover:text-green-600" />
            <Cloud className="w-8 h-8 hover:text-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
