import React, { useRef } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useProperties();
  const inputRef = useRef(null);

  const handleClear = () => {
    setSearchQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 p-2 sm:p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500">
        <div className="flex items-center pl-3 text-slate-400 dark:text-slate-500">
          <Search className="w-5 h-5 text-indigo-500" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Property Name, City (e.g. Hyderabad), or Area (e.g. Gachibowli)..."
          className="w-full pl-3 pr-10 py-2 sm:py-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:outline-none"
        />

        {searchQuery && (
          <button
            onClick={handleClear}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-2"
            aria-label="Clear search query"
            title="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-semibold shrink-0 border border-indigo-100 dark:border-indigo-900/50">
          <MapPin className="w-3.5 h-3.5" />
          <span>India Wide</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
