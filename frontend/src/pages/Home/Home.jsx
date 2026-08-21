import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import PropertyGrid from '../../components/PropertyGrid/PropertyGrid';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';
import { Sparkles, Clock, CheckCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const Home = () => {
  const { matchedCount, recentlyViewed, properties } = useProperties();

  // Featured Properties list
  const featuredListings = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* 1. Hero Section (Full-Color Photo with uniform dark overlay + Search + Stats) */}
      <Hero />

      {/* 2. Featured Properties Section */}
      {featuredListings.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-xs font-bold mb-2 border border-amber-200/60 dark:border-amber-900/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Handpicked Exclusives</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Properties
              </h2>
            </div>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Main Marketplace Listings Section */}
      <section id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        {/* Section Header with Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available Marketplace Listings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Properties ({matchedCount})
            </h2>
          </div>

          <SortDropdown />
        </div>

        {/* Main Content Layout: Sidebar Filter + Property Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FilterPanel />
          <div className="flex-1 w-full">
            <PropertyGrid />
          </div>
        </div>

        {/* 4. Recently Viewed Section */}
        {recentlyViewed && recentlyViewed.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Recently Viewed Properties
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentlyViewed.slice(0, 4).map((prop) => (
                <PropertyCard key={prop._id} property={prop} />
              ))}
            </div>
          </div>
        )}

        {/* 5. Why Choose Haven Section */}
        <div id="about" className="mt-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-900/40">
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-wider">
              Why Haven
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-6 leading-tight">
              Reinventing How India Buys & Rents Premium Properties
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              We connect home buyers directly with verified property owners and premium developers, eliminating hidden brokerage fees and providing 100% transparent virtual tours and neighborhood analytics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">100% Legal Document Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Instant Virtual Tour & HD Photos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Zero Brokerage & Direct Owner Contact</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Pre-approved Home Loan Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
