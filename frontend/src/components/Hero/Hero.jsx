import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ShieldCheck, Sparkles, Building, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Image - FULL COLOR top to bottom with uniform subtle dark overlay for readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Architecture Property"
          className="w-full h-full object-cover object-center"
        />
        {/* Uniform subtle dark overlay over entire image - NO white/gray gradients or bottom fades */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium mb-6 shadow-xl animate-fade-in"
          style={{
            background: 'rgba(10, 15, 20, 0.65)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Premier Real Estate Marketplace Across India</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-lg">
          Find Your <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-200 bg-clip-text text-transparent">Perfect Property</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Discover handpicked luxury apartments, modern villas, commercial spaces, and standalone independent homes in India's top cities.
        </p>

        {/* Hero Search Box Container */}
        <div className="mt-8 sm:mt-10">
          <SearchBar />
        </div>

        {/* Stats Highlights Bar - Dark Glassmorphism */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div 
            className="p-4 rounded-2xl text-white text-center shadow-lg transition-transform hover:-translate-y-1 duration-200"
            style={{
              background: 'rgba(10, 15, 20, 0.60)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.20)',
            }}
          >
            <Building className="w-6 h-6 mx-auto mb-1 text-indigo-300" />
            <div className="text-xl sm:text-2xl font-bold">1,500+</div>
            <div className="text-xs text-slate-200">Verified Properties</div>
          </div>

          <div 
            className="p-4 rounded-2xl text-white text-center shadow-lg transition-transform hover:-translate-y-1 duration-200"
            style={{
              background: 'rgba(10, 15, 20, 0.60)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.20)',
            }}
          >
            <Award className="w-6 h-6 mx-auto mb-1 text-sky-300" />
            <div className="text-xl sm:text-2xl font-bold">6+</div>
            <div className="text-xs text-slate-200">Major Metro Cities</div>
          </div>

          <div 
            className="p-4 rounded-2xl text-white text-center shadow-lg transition-transform hover:-translate-y-1 duration-200"
            style={{
              background: 'rgba(10, 15, 20, 0.60)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.20)',
            }}
          >
            <ShieldCheck className="w-6 h-6 mx-auto mb-1 text-emerald-300" />
            <div className="text-xl sm:text-2xl font-bold">100%</div>
            <div className="text-xs text-slate-200">Verified Listings</div>
          </div>

          <div 
            className="p-4 rounded-2xl text-white text-center shadow-lg transition-transform hover:-translate-y-1 duration-200"
            style={{
              background: 'rgba(10, 15, 20, 0.60)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.20)',
            }}
          >
            <Sparkles className="w-6 h-6 mx-auto mb-1 text-amber-300" />
            <div className="text-xl sm:text-2xl font-bold">₹0</div>
            <div className="text-xs text-slate-200">Brokerage Fees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
