import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">HAVEN</span>
            </Link>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              India's premier real estate portal for verified residential apartments, modern villas, commercial hubs, and standalone independent homes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-indigo-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Marketplace
                </Link>
              </li>
              <li>
                <Link to="/#properties" className="hover:text-white transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-white transition-colors">
                  Saved Favorites
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Haven
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Metro Cities */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-indigo-400">
              Popular Locations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Properties in Hyderabad (Gachibowli, HITEC City)</li>
              <li>Properties in Bangalore (Indiranagar, Whitefield)</li>
              <li>Properties in Mumbai (Bandra, Powai)</li>
              <li>Properties in Chennai (Adyar, ECR)</li>
              <li>Properties in Pune & Delhi NCR</li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div id="contact">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-indigo-400">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Financial District, Gachibowli, Hyderabad, TS 500032</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+91 (040) 8800-4400</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>contact@havenrealestate.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HAVEN Real Estate Marketplace. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
