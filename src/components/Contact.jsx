import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact = ({ personalData }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { label: 'GitHub', href: personalData.github },
    { label: 'LinkedIn', href: personalData.linkedin },
    { label: 'Twitter / X', href: personalData.twitter },
    { label: 'WhatsApp', href: personalData.whatsapp }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Section 07 // Direct Inquiries
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950 dark:text-white leading-[1.15] mb-6">
            Initiate a project, contract, or <span className="font-serif italic font-normal">architecture</span> inquiry.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            Currently considering high-impact software engineering roles, distributed systems contracts, and technical advisory positions.
          </p>
        </div>

        {/* Email Direct Interaction Box */}
        <div className="border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 bg-white dark:bg-neutral-950 max-w-2xl mb-12">
          <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">
            Direct Electronic Mail
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <a
              href={`mailto:${personalData.email}`}
              className="font-mono text-base sm:text-lg text-neutral-950 dark:text-white hover:opacity-70 transition-opacity break-all underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700"
            >
              {personalData.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:border-neutral-950 dark:hover:border-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Channels & Social Links */}
        <div className="space-y-3">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Connected Channels
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 transition-colors"
              >
                <span>{s.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

