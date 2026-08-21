import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const ErrorState = ({ message = 'Unable to load properties. Please try again.' }) => {
  const { refetchProperties } = useProperties();

  return (
    <div className="w-full py-16 px-4 text-center bg-rose-50/50 dark:bg-rose-950/20 rounded-3xl border border-rose-200 dark:border-rose-900/50 shadow-sm flex flex-col items-center justify-center my-6">
      <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/40 rounded-full flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        Connection Error
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
        {message}
      </p>
      <button
        onClick={refetchProperties}
        className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-500/25 transition-all duration-200"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Retry</span>
      </button>
    </div>
  );
};

export default ErrorState;
