import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { getCategoryIcon } from '../data/portfolioData';

const ProjectCard = ({ project }) => {
  const getProjectImage = (project) => {
    if (project.projectUrl && project.projectUrl !== "") {
      const encodedUrl = encodeURIComponent(project.projectUrl);
      return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000&viewport.width=1280&viewport.height=800`;
    }
    return project.fallbackImage;
  };

  return (
    <div className="group relative bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      <a
        href={project.projectUrl || '#'}
        target={project.projectUrl ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`block relative aspect-[16/10] overflow-hidden ${!project.projectUrl && 'cursor-default'}`}
      >
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        <img
          src={getProjectImage(project)}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = project.fallbackImage;
            e.target.classList.remove('object-top');
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          {project.projectUrl ? (
            <span className="text-white text-sm font-bold flex items-center gap-2">
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </span>
          ) : (
            <span className="text-white/70 text-sm font-bold">Coming Soon</span>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-sm">
          {getCategoryIcon(project.category)} {project.category}
        </div>
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
