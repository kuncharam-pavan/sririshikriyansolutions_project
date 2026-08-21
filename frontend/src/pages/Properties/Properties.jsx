import React, { useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid';
import useProperties from '../../hooks/useProperties';
import { Building2, Sparkles, SlidersHorizontal } from 'lucide-react';

export const Properties = () => {
  const { matchedCount, totalCount, clearFilters } = useProperties();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>All Real Estate Listings</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore Verified Properties ({matchedCount})
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Browse through {totalCount} verified luxury apartments, villas, independent homes, and commercial spaces.
              </p>
            </div>

            <SortDropdown />
          </div>

          {/* Quick Search Bar */}
          <div className="mt-6">
            <SearchBar />
          </div>
        </div>

        {/* Content Layout: Filter Sidebar + Property Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FilterPanel />
          <div className="flex-1 w-full">
            <PropertyGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
