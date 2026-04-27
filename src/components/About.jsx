import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

const About = ({ personalData }) => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Text */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Engineering with Purpose</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalData.aboutMe}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {personalData.certifications.map((cert, i) => (
                <div key={i} className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-start gap-3">
                  <Award className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div id="education" className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{personalData.education.degree}</h3>
                <p className="text-gray-500 dark:text-gray-400">{personalData.education.university}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm py-3 border-b border-gray-100 dark:border-gray-800">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium dark:text-gray-200">{personalData.education.years}</span>
              </div>
              <div className="flex justify-between text-sm py-3 border-b border-gray-100 dark:border-gray-800">
                <span className="text-gray-500">Location</span>
                <span className="font-medium dark:text-gray-200">{personalData.education.location}</span>
              </div>
              <div className="pt-2">
                <span className="text-sm text-gray-500 block mb-2">Focus Areas</span>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                  {personalData.education.coursework}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
