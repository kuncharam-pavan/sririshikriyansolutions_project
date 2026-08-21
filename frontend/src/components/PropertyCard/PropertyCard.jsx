import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowRight, Sparkles } from 'lucide-react';
import { formatIndianPrice } from '../../utils/formatPrice';
import useProperties from '../../hooks/useProperties';

export const PropertyCard = memo(({ property }) => {
  const { isFavorite, toggleFavorite } = useProperties();
  if (!property) return null;

  const {
    _id,
    name,
    type,
    price,
    city,
    location,
    bedrooms,
    bathrooms,
    area,
    images,
    featured,
  } = property;

  const mainImage =
    images && images.length > 0
      ? images[0]
      : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80';

  const fav = isFavorite(_id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(_id, name);
  };

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Property Image Container - Full Color, Sharp, object-cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={mainImage}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="px-3 py-1 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-md border border-white/10">
            {type}
          </span>
          {featured && (
            <span className="px-2.5 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer ${
            fav
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40 scale-110'
              : 'bg-slate-900/70 text-white hover:text-rose-400 hover:bg-slate-900/90'
          }`}
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${fav ? 'fill-current' : ''}`} />
        </button>

        {/* Price Tag Overlay at bottom corner */}
        <div className="absolute bottom-3 left-3 z-10">
          <div className="px-3 py-1 bg-slate-950/85 backdrop-blur-md text-white font-extrabold text-base sm:text-lg rounded-xl border border-white/15 shadow-lg">
            {formatIndianPrice(price)}
          </div>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Location Badge */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              {location}, {city}
            </span>
          </div>

          {/* Property Name */}
          <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {name}
          </h3>
        </div>

        {/* Key Features Chips (BHK, Bath, Area) */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs text-slate-600 dark:text-slate-400 font-medium">
          {bedrooms > 0 ? (
            <div className="flex flex-col items-center p-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                <Bed className="w-3.5 h-3.5 text-indigo-500" />
                <span>{bedrooms}</span>
              </div>
              <span className="text-[10px] text-slate-400">BHK</span>
            </div>
          ) : (
            <div className="flex flex-col items-center p-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="font-bold text-slate-900 dark:text-white">Office</span>
              <span className="text-[10px] text-slate-400">Space</span>
            </div>
          )}

          <div className="flex flex-col items-center p-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
              <Bath className="w-3.5 h-3.5 text-indigo-500" />
              <span>{bathrooms}</span>
            </div>
            <span className="text-[10px] text-slate-400">Baths</span>
          </div>

          <div className="flex flex-col items-center p-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white truncate">
              <Maximize2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>{area}</span>
            </div>
            <span className="text-[10px] text-slate-400">sq.ft</span>
          </div>
        </div>

        {/* View Details Action Link */}
        <div className="mt-4 pt-2">
          <Link
            to={`/properties/${_id}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-500/25"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
});

PropertyCard.displayName = 'PropertyCard';
export default PropertyCard;
