import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Building2,
  Heart,
  Moon,
  Sun,
  Menu,
  X,
  Home as HomeIcon,
  Building,
  Info,
  Phone,
  PlusCircle,
} from 'lucide-react';
import useProperties from '../../hooks/useProperties';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { favorites, theme, toggleTheme, openListModal } = useProperties();

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
    { name: 'Home', path: '/', icon: HomeIcon, end: true },
    { name: 'Properties', path: '/properties', icon: Building },
    { name: 'Favorites', path: '/favorites', icon: Heart, badge: favorites.length },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 text-white backdrop-blur-md shadow-xl py-3 border-b border-slate-800/80'
          : 'bg-slate-900/90 text-white backdrop-blur-sm py-4 border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-500 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                HAVEN
              </span>
              <span className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase -mt-1">
                Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-indigo-600/90 shadow-md shadow-indigo-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-sm">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: List Property Button, Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* List Your Property Action Button */}
            <button
              onClick={openListModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>List Your Property</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 animate-in slide-in-from-top duration-200 space-y-2">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-white bg-indigo-600 font-bold shadow-md'
                        : 'text-slate-200 hover:bg-slate-800'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-4 h-4 text-indigo-400" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge !== undefined && link.badge > 0 && (
                    <span className="px-2.5 py-0.5 text-xs font-bold text-white bg-rose-500 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-slate-400">Appearance</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-xs font-semibold"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4 text-slate-300" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                openListModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 mt-3 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>List Your Property</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
