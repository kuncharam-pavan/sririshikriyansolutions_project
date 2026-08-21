import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const ToastContainer = () => {
  const { toasts } = useProperties();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let icon = <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
        let borderClass = 'border-emerald-500/30 bg-emerald-50/90 dark:bg-slate-900/90 text-emerald-950 dark:text-emerald-200';

        if (toast.type === 'info') {
          icon = <Info className="w-5 h-5 text-indigo-500" />;
          borderClass = 'border-indigo-500/30 bg-indigo-50/90 dark:bg-slate-900/90 text-indigo-950 dark:text-indigo-200';
        } else if (toast.type === 'error') {
          icon = <AlertCircle className="w-5 h-5 text-rose-500" />;
          borderClass = 'border-rose-500/30 bg-rose-50/90 dark:bg-slate-900/90 text-rose-950 dark:text-rose-200';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between p-4 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-5 ${borderClass}`}
          >
            <div className="flex items-center gap-3">
              {icon}
              <span className="text-sm font-semibold">{toast.message}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
