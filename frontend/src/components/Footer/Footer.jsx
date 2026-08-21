import React from 'react';
import { User, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800/80 pt-12 pb-8 mt-20 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid: Horizontal on desktop, Stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1: Name / Profile */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-indigo-500/40 transition-all group">
            <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors shadow-inner shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Name
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Kuncharam Pavan
              </h3>
            </div>
          </div>

          {/* Section 2: Phone */}
          <a
            href="tel:9959650670"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-violet-500/40 hover:bg-slate-800/60 transition-all group cursor-pointer"
          >
            <div className="p-3.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors shadow-inner shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-violet-400">
                Phone
              </span>
              <span className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                9959650670
              </span>
            </div>
          </a>

          {/* Section 3: Email */}
          <a
            href="mailto:kuncharampavan2580@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all group cursor-pointer"
          >
            <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors shadow-inner shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-xs font-semibold uppercase tracking-wider text-blue-400">
                Email
              </span>
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate block">
                kuncharampavan2580@gmail.com
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Copyright and Back to Top Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kuncharam Pavan. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white rounded-xl border border-slate-700/50 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
