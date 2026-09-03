import React from "react";
import { ArrowUpRight, Github, Check, Lock, GitBranch } from "lucide-react";

const VercelPreviewFrame = ({ url, project, children }) => {
  const displayUrl = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "internal.preview";

  return (
    <div className="group/preview relative w-full h-full min-h-[360px] bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-neutral-700">
      {/* Vercel Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md select-none">
        {/* Left Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80 transition-colors group-hover/preview:bg-emerald-500/80" />
        </div>

        {/* Center URL Pill (Vercel Style) */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-full text-[11px] font-mono text-neutral-400 max-w-[200px] sm:max-w-xs truncate shadow-inner">
          <Lock className="w-3 h-3 text-neutral-500 shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Right Status Badge (Vercel Style) */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ready
          </span>
        </div>
      </div>

      {/* Main Viewport Content */}
      <div className="relative flex-1 p-6 flex flex-col justify-between overflow-hidden">
        {children}

        {/* Vercel Hover "Visit Deployment" Overlay */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live deployment for ${project.title}`}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-all duration-200 flex items-center justify-center z-20 cursor-pointer"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-mono font-semibold shadow-2xl transform translate-y-1 group-hover/preview:translate-y-0 transition-transform">
              <span>Visit Deployment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        )}
      </div>

      {/* Vercel Footer Telemetry */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-neutral-800/90 bg-neutral-900/60 text-[10px] font-mono text-neutral-500 select-none">
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
          <span className="text-neutral-300">git::e5f7e4b</span>
        </div>
      </div>
    </div>
  );
};

const MockupDjangors = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5 font-mono text-xs">
        <span className="text-neutral-400">cargo::djangors-cli (Rust)</span>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">32 Crates · crates.io</span>
      </div>

      <div className="bg-neutral-900/80 p-3.5 border border-neutral-800 rounded-lg space-y-1.5 font-mono text-[11px]">
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> cargo install djangors-cli</div>
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> dj new mysite &amp;&amp; cd mysite</div>
        <div className="text-neutral-300"><span className="text-neutral-600">$</span> cargo run --release</div>
        <div className="text-emerald-400 text-[10px] pt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Compiled in 1.94s · Tokio async runtime listening on http://127.0.0.1:8000
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="p-2.5 border border-neutral-800 rounded-lg bg-neutral-900/50">
          <div className="text-neutral-500">Compile-Time ORM</div>
          <div className="text-neutral-200 mt-0.5 font-medium">rustc type-verified queries</div>
        </div>
        <div className="p-2.5 border border-neutral-800 rounded-lg bg-neutral-900/50">
          <div className="text-neutral-500">Auto Admin &amp; Auth</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Argon2id + Paystack module</div>
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Framework: Djangors</span>
      <span>Engine: Hyper / Tokio Async</span>
    </div>
  </VercelPreviewFrame>
);

const MockupSpryteo = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
        <span className="text-neutral-400">spryteo::vectorizer_kernel</span>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">Rust Core · WASM</span>
      </div>

      <div className="bg-neutral-900/80 p-3.5 border border-neutral-800 rounded-lg space-y-1.5 text-[11px]">
        <div className="text-neutral-500">// Deterministic Bézier clustering pipeline</div>
        <div className="text-neutral-200">raster [PNG/WebP] → Bézier Trace → &lt;g&gt; tree</div>
        <div className="text-neutral-400 text-[10px]">Stable IDs: blake3(geometry + fill hash)</div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="border border-neutral-800 rounded-lg p-2 bg-neutral-900/50">
          <div className="text-neutral-500">CLI &amp; NAPI</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Native Rust</div>
        </div>
        <div className="border border-neutral-800 rounded-lg p-2 bg-neutral-900/50">
          <div className="text-neutral-500">WebAssembly</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Zero-Server</div>
        </div>
        <div className="border border-neutral-800 rounded-lg p-2 bg-neutral-900/50">
          <div className="text-neutral-500">MCP Server</div>
          <div className="text-neutral-200 mt-0.5 font-medium">AI Agents</div>
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Engine: spryteo-core</span>
      <span>License: MIT / Apache-2.0</span>
    </div>
  </VercelPreviewFrame>
);

const MockupFinnitrex = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
        <span className="text-neutral-400">finnitrex.systems::portal</span>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">Next.js App Router</span>
      </div>

      <div className="py-2 space-y-3 font-sans">
        <div className="text-neutral-500 text-[11px] font-mono">// Architecture: Modular UK Tech Consultancy</div>
        <div className="text-lg font-serif italic text-neutral-100">Enterprise Solutions for Global FinTech</div>
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono">
          <div className="border border-neutral-800 rounded-lg p-2.5 bg-neutral-900/50">
            <div className="text-[10px] text-neutral-500">Lighthouse</div>
            <div className="text-lg text-neutral-100 font-light mt-0.5">99/100</div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-2.5 bg-neutral-900/50">
            <div className="text-[10px] text-neutral-500">First Contentful</div>
            <div className="text-lg text-neutral-100 font-light mt-0.5">0.4s</div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-2.5 bg-neutral-900/50">
            <div className="text-[10px] text-neutral-500">Routing</div>
            <div className="text-lg text-neutral-100 font-light mt-0.5">Edge SSR</div>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Status: Active Production</span>
      <span>Client: UK Enterprise</span>
    </div>
  </VercelPreviewFrame>
);

const MockupBloom = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-neutral-200 font-sans font-bold text-sm">bloom</span>
          <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider">BUILD • SHIP • BLOOM</span>
        </div>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">Dart &amp; Flutter Platform</span>
      </div>

      <div className="bg-neutral-900/80 p-3.5 border border-neutral-800 rounded-lg space-y-1.5 font-mono text-[11px]">
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> dart pub global activate bloom_cli</div>
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> bloom create app --state=signals</div>
        <div className="text-emerald-400 text-[10px] pt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Shorebird OTA hot-patch channel configured · Bloom Server active
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="p-2.5 border border-neutral-800 rounded-lg bg-neutral-900/50">
          <div className="text-neutral-500">Reactive State</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Signals Core</div>
        </div>
        <div className="p-2.5 border border-neutral-800 rounded-lg bg-neutral-900/50">
          <div className="text-neutral-500">OTA Pipeline</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Shorebird Live</div>
        </div>
        <div className="p-2.5 border border-neutral-800 rounded-lg bg-neutral-900/50">
          <div className="text-neutral-500">Backend ORM</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Bloom Server</div>
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Framework: Bloom Platform</span>
      <span>Target: iOS · Android · Web</span>
    </div>
  </VercelPreviewFrame>
);

const MockupSafeMeet = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
        <span className="text-neutral-400">protocol::escrow_state_machine</span>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">Base EVM L2</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-[11px] bg-neutral-900/70 p-2.5 border border-neutral-800 rounded-lg">
          <span className="text-neutral-500">Escrow Contract:</span>
          <span className="text-neutral-200">0x71C...a49B (Base Mainnet)</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[10px] py-1">
          <div className="border border-neutral-800 p-2 rounded bg-neutral-900/40">
            <span className="text-neutral-400">1. Deposit Locked</span>
          </div>
          <div className="border border-neutral-600 p-2 rounded bg-neutral-800/80">
            <span className="text-white font-medium">2. QR Handshake</span>
          </div>
          <div className="border border-neutral-800 p-2 rounded text-neutral-500">
            <span>3. Trustless Release</span>
          </div>
        </div>

        <div className="text-[11px] text-neutral-400 border-l-2 border-neutral-500 pl-3 py-1 font-sans">
          Non-custodial smart contracts eliminate counterparty risk during physical and digital OTC settlement.
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Consensus: Cryptographic Verification</span>
      <span>Gas: Sub-Cent</span>
    </div>
  </VercelPreviewFrame>
);

const MockupVarian = ({ project }) => (
  <VercelPreviewFrame url={project.projectUrl} project={project}>
    <div className="space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
        <span className="text-neutral-400">varian::runtime_ast</span>
        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900">Language Runtime</span>
      </div>

      <div className="bg-neutral-900/80 p-3.5 border border-neutral-800 rounded-lg space-y-1 text-[11px]">
        <div className="text-neutral-500">// Actor concurrency with native channels</div>
        <div className="text-neutral-200">actor Worker &#123; receive(msg) -&gt; msg.process() &#125;</div>
        <div className="text-neutral-400 text-[10px] pt-1">Framework: Zenith (web) + Lumen (UI)</div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="border border-neutral-800 rounded-lg p-2.5 bg-neutral-900/50">
          <div className="text-neutral-500">Concurrency</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Lock-Free Channels</div>
        </div>
        <div className="border border-neutral-800 rounded-lg p-2.5 bg-neutral-900/50">
          <div className="text-neutral-500">Toolchain</div>
          <div className="text-neutral-200 mt-0.5 font-medium">Kiln Builder &amp; AST</div>
        </div>
      </div>
    </div>

    <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-neutral-800/60">
      <span>Language: Varian</span>
      <span>Registry: Constellation</span>
    </div>
  </VercelPreviewFrame>
);

const FlagshipCard = ({ project }) => {
  const renderVisualMockup = (id) => {
    switch (id) {
      case "djangors":
        return <MockupDjangors project={project} />;
      case "spryteo":
        return <MockupSpryteo project={project} />;
      case "finnitrex":
        return <MockupFinnitrex project={project} />;
      case "bloom":
        return <MockupBloom project={project} />;
      case "safemeet":
        return <MockupSafeMeet project={project} />;
      case "varianlang":
        return <MockupVarian project={project} />;
      default:
        return <MockupFinnitrex project={project} />;
    }
  };

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

        {/* Right Column: Vercel-Style Live Preview Frame */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex items-center justify-center bg-neutral-100/40 dark:bg-neutral-900/20">
          <div className="w-full max-w-xl">
            {renderVisualMockup(project.id)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default FlagshipCard;
