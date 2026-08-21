import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  PhoneCall,
  Mail,
  CheckCircle,
  Building,
  Calendar,
  Share2,
  UserCheck,
  X,
  Send,
  Sparkles,
} from 'lucide-react';
import propertyService from '../../services/propertyService';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { formatIndianPrice } from '../../utils/formatPrice';
import useProperties from '../../hooks/useProperties';

export const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addToRecentlyViewed, recentlyViewed, showToast } =
    useProperties();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Agent Contact Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await propertyService.getPropertyById(id);
        if (res.data) {
          setProperty(res.data);
          addToRecentlyViewed(res.data);
        } else {
          setError(res.error || 'Property not found');
        }
      } catch (err) {
        setError('Failed to load property details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, addToRecentlyViewed]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Property link copied to clipboard!', 'info');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    showToast(`Thank you ${contactForm.name || 'User'}! Agent will call you shortly.`, 'success');
    setContactForm({ name: '', phone: '', email: '', message: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-16 bg-slate-50 dark:bg-slate-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-32 bg-slate-200 dark:bg-slate-800 rounded mb-6 animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[450px] bg-slate-200 dark:bg-slate-800 rounded-3xl animate-pulse" />
          <div className="h-[450px] bg-slate-200 dark:bg-slate-800 rounded-3xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Property Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          The property listing you are looking for might have been moved or removed.
        </p>
        <button
          onClick={() => navigate('/properties')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
        >
          Browse All Properties
        </button>
      </div>
    );
  }

  const {
    _id,
    name,
    type,
    price,
    city,
    location,
    address,
    bedrooms,
    bathrooms,
    area,
    description,
    images,
    amenities = [],
    featured,
  } = property;

  const fav = isFavorite(_id);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Top Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors shadow-sm cursor-pointer"
              title="Share Link"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => toggleFavorite(_id, name)}
              className={`p-2.5 rounded-xl border transition-all shadow-sm cursor-pointer ${
                fav
                  ? 'bg-rose-500 border-rose-500 text-white shadow-rose-500/30'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-rose-500'
              }`}
              title={fav ? 'Saved in Favorites' : 'Save to Favorites'}
            >
              <Heart className={`w-5 h-5 ${fav ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Main Property Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Image Carousel & Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel Component */}
            <ImageCarousel images={images} propertyName={name} />

            {/* Property Summary Info Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                      {type}
                    </span>
                    {featured && (
                      <span className="px-2.5 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {name}
                  </h1>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
                    <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{address || `${location}, ${city}`}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Listed Price
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {formatIndianPrice(price)}
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <Bed className="w-6 h-6 text-indigo-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {bedrooms > 0 ? `${bedrooms} BHK` : 'Commercial'}
                  </div>
                  <div className="text-xs text-slate-400">Bedrooms</div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <Bath className="w-6 h-6 text-indigo-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{bathrooms}</div>
                  <div className="text-xs text-slate-400">Bathrooms</div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <Maximize2 className="w-6 h-6 text-indigo-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{area}</div>
                  <div className="text-xs text-slate-400">Sq.Ft. Area</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  About Property
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base">
                  {description}
                </p>
              </div>

              {/* Amenities Grid */}
              {amenities.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Features & Amenities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Agent Card & Sticky Summary */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Haven Agent Support</h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Verified Property Partner</div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <PhoneCall className="w-4 h-4 text-indigo-500" />
                  <span>+91 90000 00000</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>contact@havenrealestate.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Building className="w-4 h-4 text-indigo-500" />
                  <span>Listing ID: {String(_id).slice(-8).toUpperCase()}</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Recently Viewed Properties */}
        {recentlyViewed && recentlyViewed.length > 1 && (
          <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Recently Viewed Properties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recentlyViewed
                .filter((p) => String(p._id) !== String(_id))
                .slice(0, 4)
                .map((p) => (
                  <PropertyCard key={p._id} property={p} />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Agent Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Property Agent</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="I am interested in scheduling a site visit for this property."
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-colors mt-6 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
