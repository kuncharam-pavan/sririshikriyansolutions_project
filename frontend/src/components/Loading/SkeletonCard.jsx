import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="aspect-[16/10] w-full bg-slate-200 dark:bg-slate-800" />

      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>

        {/* Chips Skeleton */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2">
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        </div>

        {/* Button Skeleton */}
        <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonCard;
