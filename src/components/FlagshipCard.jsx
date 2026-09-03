import React, { useState } from "react";
import { ArrowUpRight, Github, Check, Lock, GitBranch, ExternalLink } from "lucide-react";

const VercelPreviewCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const displayUrl = project.projectUrl
    ? project.projectUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "internal.preview";

  return (
    <div className="group/preview relative w-full bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-neutral-700 flex flex-col">
      {/* Vercel Browser Window Chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md select-none">
        {/* Left Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-emerald-500/80" />
        </div>

        {/* Center URL Pill (Vercel Style) */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 bg-neutral-950 border border-neutral-800/90 rounded-full text-[11px] font-mono text-neutral-400 max-w-[200px] sm:max-w-xs truncate shadow-inner">
          <Lock className="w-3 h-3 text-neutral-500 shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Right Status Badge (Vercel Style) */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready
          </span>
        </div>
      </div>

      {/* Main Viewport: Real Website Screenshot (Vercel Style) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
        {project.previewImage && !imgError ? (
          <img
            src={project.previewImage}
            alt={`Live deployment preview of ${project.title}`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          /* Fallback Architectural UI Frame */
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono text-xs text-neutral-300">
            <div className="space-y-2">
              <div className="text-neutral-500 text-[11px]">// Protocol State Machine</div>
              <div className="text-base text-white font-serif italic">{project.title}</div>
              <div className="text-neutral-400 text-[11px] max-w-sm">{project.tagline}</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 border border-neutral-800 rounded bg-neutral-950/60">
                <span className="text-neutral-500">Target</span>
                <div className="text-neutral-200 mt-0.5">{project.category}</div>
              </div>
              <div className="p-2 border border-neutral-800 rounded bg-neutral-950/60">
                <span className="text-neutral-500">Engine</span>
                <div className="text-neutral-200 mt-0.5">{project.tech.slice(0, 2).join(" · ")}</div>
              </div>
            </div>
          </div>
        )}

        {/* Vercel Hover "Visit Deployment" Overlay */}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit live deployment for ${project.title}`}
            className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-all duration-200 flex items-center justify-center z-20 cursor-pointer"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-mono font-semibold shadow-2xl transform translate-y-2 group-hover/preview:translate-y-0 transition-transform">
              <span>Visit Deployment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        )}
      </div>

      {/* Vercel Footer Inspector Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-t border-neutral-800/90 bg-neutral-900/70 text-[10px] font-mono text-neutral-500 select-none">
        <div className="flex items-center gap-2">
          <span className="text-neutral-400">Environment:</span>
          <span className="text-neutral-300">Production</span>
          <span className="text-neutral-700">·</span>
          <span className="text-neutral-400 flex items-center gap-1">
            <GitBranch className="w-3 h-3 text-neutral-500" />
            main
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-400">Commit:</span>
          <span className="text-neutral-300">git::052f635</span>
        </div>
      </div>
    </div>
  );
};

const FlagshipCard = ({ project }) => {
  return (
    <article className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Case Study Editorial Details */}
        <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800">
          <div>
            {/* Metadata Bar */}
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">
              <span className="text-neutral-950 dark:text-white font-medium">
                {project.index} / {project.category}
              </span>
              <span>{project.year}</span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 dark:text-white tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-6">
              {project.tagline}
            </p>

            {/* Narrative Description */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            <div className="space-y-2 mb-8">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                Technical Execution &amp; Architecture
              </div>
              <ul className="space-y-2">
                {project.architecture.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                    <Check className="w-3.5 h-3.5 text-neutral-950 dark:text-white shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer of Left Column: Stack Tags and Links */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    <span>Launch Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Vercel-Style Real Live Preview Card */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-neutral-100/40 dark:bg-neutral-900/20">
          <div className="w-full max-w-xl">
            <VercelPreviewCard project={project} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FlagshipCard;
