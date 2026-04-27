import React from 'react';
import { getSkillIcon } from '../data/portfolioData';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Technical Arsenal</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill} className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500 hover:shadow-lg dark:hover:shadow-indigo-900/20 transition-all cursor-default">
              <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                {getSkillIcon(skill, "w-5 h-5")}
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
