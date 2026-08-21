import { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

export const useFavorites = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useFavorites must be used within a PropertyProvider');
  }

  return {
    favorites: context.favorites,
    toggleFavorite: context.toggleFavorite,
    isFavorite: context.isFavorite,
    favoriteProperties: context.favoriteProperties,
  };
};

export default useFavorites;
