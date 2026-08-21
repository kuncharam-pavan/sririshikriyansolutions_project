import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ToastContainer from './components/Toast/ToastContainer';
import Home from './pages/Home/Home';

// Route-level Lazy Loading for Performance Optimization
const PropertyDetails = lazy(() => import('./pages/PropertyDetails/PropertyDetails'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Page Fallback Loader
const PageLoader = () => (
  <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50 dark:bg-slate-950">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Loading page...</span>
    </div>
  </div>
);

export function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
          <Navbar />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <ToastContainer />
          <Footer />
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
