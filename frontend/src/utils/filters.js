/**
 * Filter properties based on search query, type, city, price range, and bedrooms
 */
export const filterProperties = (properties = [], { searchQuery, type, city, priceRange, bedrooms }) => {
  return properties.filter((property) => {
    // 1. Search Query (name, city, location)
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const nameMatch = property.name?.toLowerCase().includes(q);
      const cityMatch = property.city?.toLowerCase().includes(q);
      const locMatch = property.location?.toLowerCase().includes(q);
      if (!nameMatch && !cityMatch && !locMatch) return false;
    }

    // 2. Property Type
    if (type && type !== 'All') {
      if (property.type?.toLowerCase() !== type.toLowerCase()) return false;
    }

    // 3. City
    if (city && city !== 'All') {
      if (property.city?.toLowerCase() !== city.toLowerCase()) return false;
    }

    // 4. Price Range
    if (priceRange && priceRange !== 'All') {
      const price = Number(property.price) || 0;
      if (priceRange === 'under50' && price >= 5000000) return false;
      if (priceRange === '50to100' && (price < 5000000 || price > 10000000)) return false;
      if (priceRange === 'above100' && price <= 10000000) return false;
    }

    // 5. Bedrooms
    if (bedrooms && bedrooms !== 'All') {
      const beds = Number(property.bedrooms) || 0;
      if (bedrooms === '1' && beds !== 1) return false;
      if (bedrooms === '2' && beds !== 2) return false;
      if (bedrooms === '3' && beds !== 3) return false;
      if ((bedrooms === '4+' || bedrooms === '4') && beds < 4) return false;
    }

    return true;
  });
};

/**
 * Sort properties array based on criteria
 */
export const sortProperties = (properties = [], sortBy = 'default') => {
  const sorted = [...properties];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    case 'price-desc':
      return sorted.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    case 'default':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
};
