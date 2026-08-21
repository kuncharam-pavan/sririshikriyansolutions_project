import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Heart, Moon, Sun, Menu, X, Home as HomeIcon, Info, Phone } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { favorites, theme, toggleTheme } = useProperties();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Properties', path: '/', hash: '#properties', icon: Building2 },
    { name: 'Favorites', path: '/favorites', icon: Heart, badge: favorites.length },
    { name: 'About', path: '/#about', icon: Info },
    { name: 'Contact', path: '/#contact', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3 border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-white/90 dark:bg-slate-900/90 py-4 border-b border-slate-200/30 dark:border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 dark:from-white dark:via-slate-200 dark:to-indigo-300 bg-clip-text text-transparent">
                HAVEN
              </span>
              <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase -mt-1">
                Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive(link.path)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="ml-1.5 px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-sm">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons (Theme Toggle & Mobile Menu Trigger) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Toggle Dark Mode"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-indigo-500" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge !== undefined && link.badge > 0 && (
                    <span className="px-2.5 py-0.5 text-xs font-bold text-white bg-rose-500 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
