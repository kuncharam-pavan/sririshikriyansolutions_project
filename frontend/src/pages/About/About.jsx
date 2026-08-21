import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Target,
  Users,
  Sparkles,
  MapPin,
  CheckCircle,
  Award,
  ArrowRight,
  TrendingUp,
  Clock,
  HeartHandshake
} from 'lucide-react';

export const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const cities = [
    { name: 'Hyderabad', properties: '550+', desc: 'Financial District, Gachibowli, Jubilee Hills, HITEC City' },
    { name: 'Bangalore', properties: '420+', desc: 'Indiranagar, Whitefield, Koramangala, HSR Layout' },
    { name: 'Mumbai', properties: '380+', desc: 'Bandra West, Worli, Powai, Juhu, South Mumbai' },
    { name: 'Chennai', properties: '240+', desc: 'Adyar, ECR, Anna Nagar, OMR Tech Corridor' },
    { name: 'Pune', properties: '210+', desc: 'Koregaon Park, Hinjewadi, Kalyani Nagar, Baner' },
    { name: 'Delhi NCR', properties: '310+', desc: 'Connaught Place, Vasant Vihar, Golf Course Rd, Noida' },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Verified Properties',
      description: 'Every property listing undergoes a rigorous 40-point legal, structural, and ownership verification check before appearing on our marketplace.',
    },
    {
      icon: Sparkles,
      title: 'Zero Brokerage Experience',
      description: 'Connect directly with verified owners and premier developers without middleman commissions or undisclosed surcharges.',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Pricing & Analytics',
      description: 'Access authentic market price trends, historic appreciation indices, and localized neighborhood intelligence reports.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Advisory',
      description: 'Dedicated relationship managers guide you through site visits, legal approvals, property paperwork, and home financing.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Hero / Brand Intro */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 shadow-2xl border border-indigo-900/40">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>About HAVEN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              India's Modern Real-Estate Property Marketplace.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              HAVEN was created with a clear ambition: to build India’s most trusted, transparent, and technology-driven property marketplace. We simplify how homebuyers, investors, and tenants discover and acquire dream residential and commercial spaces across India’s thriving metropolitan cities.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
              >
                <span>Browse Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              To democratize real estate discovery in India by providing complete transparency, verified property listings, high-resolution visual tours, and seamless direct communication between property owners and prospective buyers.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Customer-First Approach</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              We eliminate frustrating spam calls, fake photographs, and misleading pricing. Every interaction on Haven is designed to prioritize buyer comfort, absolute data security, and seamless support throughout the purchasing journey.
            </p>
          </div>
        </div>

        {/* Section 3: Why Choose Haven */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              Core Value Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
              Why Choose Haven
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Built from the ground up to solve the real challenges faced by Indian property buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Major Indian Cities Covered */}
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
                Geographic Presence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                Major Indian Metro Cities
              </h2>
            </div>
            <Link
              to="/properties"
              className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore All Cities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50 flex items-start gap-3.5"
              >
                <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {city.name}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {city.properties}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {city.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
