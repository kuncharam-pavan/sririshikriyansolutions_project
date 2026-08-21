import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/60 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-inner animate-bounce">
        <Compass className="w-10 h-10" />
      </div>

      <span className="px-3.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-extrabold uppercase tracking-widest mb-3">
        Error 404
      </span>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
        404 - Page Not Found
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-base max-w-md mx-auto mb-8 font-normal">
        Oops! The page or property listing you are trying to visit does not exist or has been relocated.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 transition-all transform hover:scale-105"
      >
        <Home className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
