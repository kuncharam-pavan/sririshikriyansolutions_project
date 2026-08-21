import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const EmptyState = () => {
  const { clearFilters } = useProperties();

  return (
    <div className="w-full py-16 px-4 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center my-6">
      <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/60 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-inner">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        No properties found
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
        We couldn't find any property matching your current search parameters or filter criteria. Try clearing filters or searching another location.
      </p>
      <button
        onClick={clearFilters}
        className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Clear Filters</span>
      </button>
    </div>
  );
};

export default EmptyState;
