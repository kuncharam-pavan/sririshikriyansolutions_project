import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import SkeletonCard from '../Loading/SkeletonCard';
import EmptyState from '../EmptyState/EmptyState';
import ErrorState from '../ErrorState/ErrorState';
import useProperties from '../../hooks/useProperties';

export const PropertyGrid = () => {
  const { filteredProperties, loading, error } = useProperties();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!filteredProperties || filteredProperties.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredProperties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
