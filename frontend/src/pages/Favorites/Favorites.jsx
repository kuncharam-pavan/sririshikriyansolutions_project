import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, ArrowRight } from 'lucide-react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';

export const Favorites = () => {
  const { favoriteProperties } = useProperties();

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold mb-2">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Saved Listings</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              My Favorite Properties ({favoriteProperties.length})
            </h1>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition-colors shadow-sm self-start sm:self-auto"
          >
            <Building2 className="w-4 h-4" />
            <span>Browse All Properties</span>
          </Link>
        </div>

        {/* Favorites Grid / Empty State */}
        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/60 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-4">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              No Favorites Saved Yet
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6 text-sm">
              You haven't saved any property listings to your favorites list. Click the heart icon on any property card to save it for quick reference later.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all"
            >
              <span>Explore Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
