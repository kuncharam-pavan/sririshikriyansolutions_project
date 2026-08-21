import React from 'react';
import { ArrowUpDown, ChevronDown } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const SortDropdown = () => {
  const { sortBy, setSortBy } = useProperties();

  const sortOptions = [
    { label: 'Featured (Default)', value: 'default' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest Listings', value: 'newest' },
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <ArrowUpDown className="w-4 h-4 text-indigo-500" />
        <span>Sort By:</span>
      </div>
      <div className="relative inline-block w-full sm:w-auto">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-52 appearance-none px-4 py-2.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm rounded-xl font-semibold border border-slate-200 dark:border-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer pr-10"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
      </div>
    </div>
  );
};

export default SortDropdown;
