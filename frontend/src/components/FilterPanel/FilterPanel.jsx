import React, { useState } from 'react';
import { Filter, RotateCcw, Building, MapPin, IndianRupee, Bed, ChevronDown, ChevronUp, X } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const FilterPanel = () => {
  const { filters, setFilterField, clearFilters, matchedCount, totalCount } = useProperties();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const propertyTypes = ['All', 'Apartment', 'Villa', 'Independent House', 'Commercial'];
  const cities = ['All', 'Hyderabad', 'Bangalore', 'Mumbai', 'Chennai', 'Pune', 'Delhi'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under ₹50 Lakhs', value: 'under50' },
    { label: '₹50 Lakhs – ₹1 Crore', value: '50to100' },
    { label: 'Above ₹1 Crore', value: 'above100' },
  ];
  const bedroomOptions = [
    { label: 'Any BHK', value: 'All' },
    { label: '1 BHK', value: '1' },
    { label: '2 BHK', value: '2' },
    { label: '3 BHK', value: '3' },
    { label: '4+ BHK', value: '4+' },
  ];

  const hasActiveFilters =
    filters.type !== 'All' ||
    filters.city !== 'All' ||
    filters.priceRange !== 'All' ||
    filters.bedrooms !== 'All';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Header & Clear Button */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">Filter Properties</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Property Type Filter */}
      <div>
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          <Building className="w-4 h-4 text-indigo-500" />
          <span>Property Type</span>
        </label>
        <div className="grid grid-cols-1 gap-1.5">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterField('type', type)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filters.type === type
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* City Filter */}
      <div>
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          <MapPin className="w-4 h-4 text-indigo-500" />
          <span>City</span>
        </label>
        <div className="relative">
          <select
            value={filters.city}
            onChange={(e) => setFilterField('city', e.target.value)}
            className="w-full appearance-none px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-xl font-medium border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city === 'All' ? 'All Cities' : city}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3.5 pointer-events-none" />
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          <IndianRupee className="w-4 h-4 text-indigo-500" />
          <span>Price Range</span>
        </label>
        <div className="space-y-1.5">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilterField('priceRange', range.value)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filters.priceRange === range.value
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms Filter */}
      <div>
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          <Bed className="w-4 h-4 text-indigo-500" />
          <span>Bedrooms (BHK)</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {bedroomOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterField('bedrooms', opt.value)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center ${
                filters.bedrooms === opt.value
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Matching Count Indicator */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium text-center">
        Showing <span className="font-bold text-indigo-600 dark:text-indigo-400">{matchedCount}</span> of {totalCount} properties
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar Filter */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Trigger Button */}
      <div className="lg:hidden w-full mb-4">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-semibold text-slate-800 dark:text-slate-200 text-sm"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Filter Properties ({matchedCount})</span>
          </div>
          {hasActiveFilters && (
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          )}
        </button>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filter Properties</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25"
            >
              Apply Filters ({matchedCount} Results)
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPanel;
