import React from 'react';
import { ArrowUpRight, Github, Check } from 'lucide-react';

const MockupFinnitrex = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">https://finnitrex.com</span>
      </div>
      <span className="text-[10px] text-neutral-500 uppercase">Edge Rendered · 38ms</span>
    </div>

    <div className="py-6 space-y-4">
      <div className="text-neutral-500 text-[11px]">// Architecture: Modular Next.js Systems</div>
      <div className="text-lg font-serif italic text-neutral-100">Enterprise Solutions for Global FinTech</div>
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="border border-neutral-800 p-3 bg-neutral-950/40">
          <div className="text-[10px] text-neutral-500">Lighthouse Score</div>
          <div className="text-xl text-neutral-100 font-light mt-1">99/100</div>
        </div>
        <div className="border border-neutral-800 p-3 bg-neutral-950/40">
          <div className="text-[10px] text-neutral-500">First Contentful</div>
          <div className="text-xl text-neutral-100 font-light mt-1">0.4s</div>
        </div>
        <div className="border border-neutral-800 p-3 bg-neutral-950/40">
          <div className="text-[10px] text-neutral-500">Infrastructure</div>
          <div className="text-xl text-neutral-100 font-light mt-1">Vercel Edge</div>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Status: Active Production</span>
      <span>Client: UK Enterprise</span>
    </div>
  </div>
);

const MockupSafeMeet = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">protocol::escrow_state_machine</span>
      </div>
      <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">Base EVM L2</span>
    </div>

    <div className="py-4 space-y-3">
      <div className="flex items-center justify-between text-[11px] bg-neutral-950/60 p-2.5 border border-neutral-800">
        <span className="text-neutral-500">Escrow Contract:</span>
        <span className="text-neutral-200">0x71C...a49B</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px] py-1">
        <div className="border border-neutral-700 p-2 bg-neutral-800/40">
          <span className="text-neutral-400">1. Deposit Locked</span>
        </div>
        <div className="border border-neutral-500 p-2 bg-neutral-800/80">
          <span className="text-white font-medium">2. QR Handshake</span>
        </div>
        <div className="border border-neutral-800 p-2 text-neutral-500">
          <span>3. Trustless Release</span>
        </div>
      </div>

      <div className="text-[11px] text-neutral-400 border-l-2 border-neutral-500 pl-3 py-1">
        Non-custodial smart contracts eliminate counterparty risk during physical and digital OTC settlement.
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Consensus: Cryptographic Verification</span>
      <span>Gas: Sub-Cent</span>
    </div>
  </div>
);

const MockupSolexPay = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">solexpay.internal::ledger_v2</span>
      </div>
      <span className="text-[10px] text-neutral-400 uppercase">Campus FinTech</span>
    </div>

    <div className="py-4 space-y-3">
      <div className="border border-neutral-800 p-3 bg-neutral-950/40 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-neutral-500 uppercase">Settlement Engine</div>
          <div className="text-base text-white font-mono mt-0.5">Double-Entry ACID Ledger</div>
        </div>
        <span className="font-mono text-xs px-2 py-1 bg-neutral-800 text-neutral-200">Spring Boot Core</span>
      </div>

      <div className="space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800/80 pb-1">
          <span>P2P Instant Student Transfer</span>
          <span className="text-neutral-200">0.00s latency</span>
        </div>
        <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800/80 pb-1">
          <span>Campus Merchant QR Pay</span>
          <span className="text-neutral-200">Verified</span>
        </div>
        <div className="flex items-center justify-between text-neutral-400">
          <span>Client Architecture</span>
          <span className="text-neutral-200">Analog.js + Flutter</span>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Deployment: PostgreSQL + Spring Boot</span>
      <span>Region: Nigeria (Edu)</span>
    </div>
  </div>
);

const MockupVarianTrade = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">arbitrage::engine:ws_stream</span>
      </div>
      <span className="text-[10px] text-neutral-400">Golang Daemon</span>
    </div>

    <div className="py-4 space-y-3 font-mono">
      <div className="bg-neutral-950/70 p-2.5 border border-neutral-800 text-[10px] space-y-1">
        <div className="text-neutral-500">// Real-time Spread Discrepancy Stream</div>
        <div className="flex justify-between text-neutral-300">
          <span>[SCAN] Market 01 vs Market 04</span>
          <span className="text-white">+3.84% Arbitrage</span>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>[TICK] Latency: 12ms</span>
          <span>Status: Execution Qualified</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 border border-neutral-800">
          <div className="text-neutral-500">Go Workers</div>
          <div className="text-neutral-100 font-medium mt-0.5">Concurrent Goroutines</div>
        </div>
        <div className="p-2 border border-neutral-800">
          <div className="text-neutral-500">Data Model</div>
          <div className="text-neutral-100 font-medium mt-0.5">Python + NumPy Anomaly</div>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Throughput: 10,000+ ticks/sec</span>
      <span>PostgreSQL Partitioned</span>
    </div>
  </div>
);

const MockupDjangors = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">cargo::djangors-cli (Rust)</span>
      </div>
      <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">32 Crates · crates.io</span>
    </div>

    <div className="py-4 space-y-3">
      <div className="bg-neutral-950/70 p-3 border border-neutral-800 space-y-1.5 text-[11px]">
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> cargo install djangors-cli</div>
        <div className="text-neutral-400"><span className="text-neutral-600">$</span> dj new mysite &amp;&amp; cd mysite</div>
        <div className="text-neutral-300"><span className="text-neutral-600">$</span> cargo run</div>
        <div className="text-neutral-500 text-[10px] pt-1">
          Compiling djangors v0.1.0 (Tokio runtime) ... Finished dev in 2.14s
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 border border-neutral-800 bg-neutral-950/40">
          <div className="text-neutral-500">Compile-Time ORM</div>
          <div className="text-neutral-200 mt-0.5">rustc verified queries</div>
        </div>
        <div className="p-2 border border-neutral-800 bg-neutral-950/40">
          <div className="text-neutral-500">Auto Admin &amp; Auth</div>
          <div className="text-neutral-200 mt-0.5">Argon2id + Paystack</div>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Framework: Djangors</span>
      <span>Engine: Hyper / Tokio Async</span>
    </div>
  </div>
);

const MockupSpryteo = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">spryteo::vectorizer</span>
      </div>
      <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">Rust Core · WASM</span>
    </div>

    <div className="py-4 space-y-3 font-mono text-[11px]">
      <div className="bg-neutral-950/70 p-3 border border-neutral-800 space-y-1">
        <div className="text-neutral-500">// Pipeline: Raster to Semantic SVG Tree</div>
        <div className="text-neutral-200">raster [PNG/WebP] → Bézier Trace → &lt;g&gt; tree</div>
        <div className="text-neutral-400 text-[10px]">Stable IDs: blake3(geometry + fill)</div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="border border-neutral-800 p-2 bg-neutral-950/40">
          <div className="text-neutral-500">CLI &amp; NAPI</div>
          <div className="text-neutral-200 mt-0.5">Native Rust</div>
        </div>
        <div className="border border-neutral-800 p-2 bg-neutral-950/40">
          <div className="text-neutral-500">WebAssembly</div>
          <div className="text-neutral-200 mt-0.5">Zero-Server</div>
        </div>
        <div className="border border-neutral-800 p-2 bg-neutral-950/40">
          <div className="text-neutral-500">MCP Server</div>
          <div className="text-neutral-200 mt-0.5">AI Agents</div>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Engine: spryteo-core</span>
      <span>License: MIT / Apache-2.0</span>
    </div>
  </div>
);

const MockupSchoolOS = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">school-os::institution_kernel</span>
      </div>
      <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">Analog.js SSR</span>
    </div>

    <div className="py-4 space-y-3">
      <div className="border border-neutral-800 p-3 bg-neutral-950/50 space-y-2 text-[11px]">
        <div className="flex justify-between items-center text-neutral-300">
          <span>Automated GPA / CGPA Scale</span>
          <span className="text-white font-medium">5.0 Point Tertiary</span>
        </div>
        <div className="flex justify-between items-center text-neutral-400">
          <span>Fee Ledger Reconciliation</span>
          <span className="text-white">Paystack Webhooks</span>
        </div>
        <div className="flex justify-between items-center text-neutral-400">
          <span>LMS Course Sync</span>
          <span className="text-white">Moodle Roster API</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] border-t border-neutral-800/60 pt-2 text-neutral-400">
        <span>Hierarchies: K-12 &amp; Universities</span>
        <span>PDF Report Cards Generated</span>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Platform: School OS</span>
      <span>Region: West Africa Academic</span>
    </div>
  </div>
);

const MockupVarian = () => (
  <div className="w-full h-full bg-neutral-900 text-neutral-300 font-mono text-xs p-6 flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        <span className="text-neutral-500 text-[11px] ml-2">varian::runtime_ast</span>
      </div>
      <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">Language Runtime</span>
    </div>

    <div className="py-4 space-y-3 font-mono text-[11px]">
      <div className="bg-neutral-950/70 p-3 border border-neutral-800 space-y-1">
        <div className="text-neutral-500">// Actor concurrency with native channels</div>
        <div className="text-neutral-200">actor Worker &#123; receive(msg) -&gt; msg.process() &#125;</div>
        <div className="text-neutral-400 text-[10px]">Framework: Zenith (web) + Lumen (UI)</div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="border border-neutral-800 p-2 bg-neutral-950/40">
          <div className="text-neutral-500">Concurrency</div>
          <div className="text-neutral-200 mt-0.5">Lock-Free Channels</div>
        </div>
        <div className="border border-neutral-800 p-2 bg-neutral-950/40">
          <div className="text-neutral-500">Toolchain</div>
          <div className="text-neutral-200 mt-0.5">Kiln Builder &amp; AST</div>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-800 pt-3 flex items-center justify-between text-[11px] text-neutral-500">
      <span>Language: Varian</span>
      <span>Registry: Constellation</span>
    </div>
  </div>
);

const FlagshipCard = ({ project }) => {
  const renderVisualMockup = (id) => {
    switch (id) {
      case 'djangors':
        return <MockupDjangors />;
      case 'spryteo':
        return <MockupSpryteo />;
      case 'finnitrex':
        return <MockupFinnitrex />;
      case 'schoolos':
        return <MockupSchoolOS />;
      case 'safemeet':
        return <MockupSafeMeet />;
      case 'varianlang':
        return <MockupVarian />;
      case 'solexpay':
        return <MockupSolexPay />;
      case 'variantrade':
        return <MockupVarianTrade />;
      default:
        return <MockupFinnitrex />;
    }
  };

  return (
    <article className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Case Study Editorial Details */}
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800">
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
                Technical Execution & Architecture
              </div>
              <ul className="space-y-2">
                {project.architecture.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="text-neutral-900 dark:text-white mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row: Tech Stack & Action Links */}
          <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-neutral-500 hover:text-neutral-950 dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-neutral-950 dark:text-white underline underline-offset-4 flex items-center gap-1 hover:opacity-70 transition-opacity"
                  >
                    <span>Visit Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual Mockup (Pure Monochrome) */}
        <div className="lg:col-span-5 bg-neutral-950 min-h-[340px] flex items-center justify-center p-4 sm:p-6">
          <div className="w-full h-full border border-neutral-800 overflow-hidden shadow-2xl">
            {renderVisualMockup(project.id)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default FlagshipCard;
