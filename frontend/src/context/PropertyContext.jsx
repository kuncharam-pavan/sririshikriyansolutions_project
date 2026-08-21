import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import propertyService from '../services/propertyService';
import { filterProperties, sortProperties } from '../utils/filters';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search, Filters & Sorting state
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'All',
    city: 'All',
    priceRange: 'All',
    bedrooms: 'All',
  });
  const [sortBy, setSortBy] = useState('default');

  // Favorites state (synced with localStorage)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('haven_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Recently Viewed state (synced with localStorage)
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('haven_recently_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dark Mode Theme state (synced with localStorage)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('haven_theme');
      return saved ? saved : 'light';
    } catch {
      return 'light';
    }
  });

  // Toast Notifications state
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  // Fetch properties from backend / fallback
  const fetchProperties = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await propertyService.getProperties();
      setProperties(res.data || []);
      if (res.error) {
        setError(res.error);
      }
    } catch (err) {
      setError('Unable to connect to property service. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // Persist Favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('haven_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  // Persist Recently Viewed to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('haven_recently_viewed', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error('Failed to save recently viewed to localStorage', e);
    }
  }, [recentlyViewed]);

  // Apply Theme class to <html> tag
  useEffect(() => {
    try {
      localStorage.setItem('haven_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Failed to apply theme', e);
    }
  }, [theme]);

  // Toggle Theme Handler
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
      return nextTheme;
    });
  }, [showToast]);

  // Toggle Favorite Handler
  const toggleFavorite = useCallback((propertyId, propertyName = 'Property') => {
    setFavorites((prev) => {
      const exists = prev.includes(propertyId);
      if (exists) {
        showToast(`Removed "${propertyName}" from Favorites`, 'info');
        return prev.filter((id) => id !== propertyId);
      } else {
        showToast(`Added "${propertyName}" to Favorites`, 'success');
        return [...prev, propertyId];
      }
    });
  }, [showToast]);

  const isFavorite = useCallback((propertyId) => {
    return favorites.includes(propertyId);
  }, [favorites]);

  // Add Property to Recently Viewed
  const addToRecentlyViewed = useCallback((property) => {
    if (!property || !property._id) return;
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => String(p._id) !== String(property._id));
      return [property, ...filtered].slice(0, 6);
    });
  }, []);

  // Filter Helper updates
  const setFilterField = useCallback((field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setFilters({
      type: 'All',
      city: 'All',
      priceRange: 'All',
      bedrooms: 'All',
    });
    setSortBy('default');
    showToast('Filters cleared', 'info');
  }, [showToast]);

  // Memoized Filtered & Sorted Properties Array using useMemo
  const filteredAndSortedProperties = useMemo(() => {
    const filtered = filterProperties(properties, {
      searchQuery,
      type: filters.type,
      city: filters.city,
      priceRange: filters.priceRange,
      bedrooms: filters.bedrooms,
    });
    return sortProperties(filtered, sortBy);
  }, [properties, searchQuery, filters, sortBy]);

  // Favorite Properties Array using useMemo
  const favoriteProperties = useMemo(() => {
    return properties.filter((p) => favorites.includes(p._id));
  }, [properties, favorites]);

  const value = {
    properties,
    filteredProperties: filteredAndSortedProperties,
    totalCount: properties.length,
    matchedCount: filteredAndSortedProperties.length,
    loading,
    error,
    refetchProperties: fetchProperties,
    searchQuery,
    setSearchQuery,
    filters,
    setFilterField,
    clearFilters,
    sortBy,
    setSortBy,
    favorites,
    toggleFavorite,
    isFavorite,
    favoriteProperties,
    recentlyViewed,
    addToRecentlyViewed,
    theme,
    toggleTheme,
    toasts,
    showToast,
  };

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};
