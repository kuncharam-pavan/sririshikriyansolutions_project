import React, { useState } from 'react';
import { X, Plus, Building, Image, Check, Loader2, Sparkles } from 'lucide-react';
import useProperties from '../../hooks/useProperties';

const COMMON_AMENITIES = [
  'Swimming Pool',
  'Gymnasium',
  '24/7 Security',
  'Clubhouse',
  'Power Backup',
  'Covered Parking',
  'EV Charging Point',
  'Private Garden',
  'Home Theater',
  'CCTV Surveillance',
  'High-speed Wi-Fi',
  'Elevator',
];

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
];

export const ListPropertyModal = () => {
  const { isListModalOpen, closeListModal, addNewProperty } = useProperties();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    type: 'Apartment',
    city: 'Hyderabad',
    location: '',
    address: '',
    price: '',
    bedrooms: '3',
    bathrooms: '3',
    area: '',
    description: '',
    imageUrl: SAMPLE_IMAGES[0],
    amenities: ['24/7 Security', 'Covered Parking', 'Power Backup'],
    featured: false,
  });

  const [customAmenity, setCustomAmenity] = useState('');

  if (!isListModalOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleAmenity = (amenity) => {
    setFormData((prev) => {
      const exists = prev.amenities.includes(amenity);
      if (exists) {
        return { ...prev, amenities: prev.amenities.filter((a) => a !== amenity) };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  const handleAddCustomAmenity = (e) => {
    e.preventDefault();
    if (customAmenity.trim() && !formData.amenities.includes(customAmenity.trim())) {
      setFormData((prev) => ({
        ...prev,
        amenities: [...prev.amenities, customAmenity.trim()],
      }));
      setCustomAmenity('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const propertyPayload = {
      name: formData.name.trim(),
      type: formData.type,
      city: formData.city.trim(),
      location: formData.location.trim(),
      address: formData.address.trim(),
      price: Number(formData.price),
      bedrooms: formData.type === 'Commercial' ? 0 : Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      description: formData.description.trim(),
      images: [formData.imageUrl.trim()],
      amenities: formData.amenities,
      featured: formData.featured,
    };

    const res = await addNewProperty(propertyPayload);
    setSubmitting(false);

    if (res.success) {
      closeListModal();
      // Reset form
      setFormData({
        name: '',
        type: 'Apartment',
        city: 'Hyderabad',
        location: '',
        address: '',
        price: '',
        bedrooms: '3',
        bathrooms: '3',
        area: '',
        description: '',
        imageUrl: SAMPLE_IMAGES[0],
        amenities: ['24/7 Security', 'Covered Parking', 'Power Backup'],
        featured: false,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-md">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                List Your Property
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reach thousands of verified buyers and renters across India
              </p>
            </div>
          </div>
          <button
            onClick={closeListModal}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Property Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Property Title / Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Skyline Heights 3BHK Luxury Apartment"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Type & City Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Property Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Independent House">Independent House</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>

          {/* Location & Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Locality / Area *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Gachibowli or Indiranagar"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Full Street Address *
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. Financial District Main Rd, Hyderabad"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Price, Bedrooms, Bathrooms, Area Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Price (₹) *
              </label>
              <input
                type="number"
                name="price"
                required
                min="100000"
                step="50000"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 8500000"
                className="w-full px-3 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {formData.type !== 'Commercial' ? (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Bedrooms *
                </label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5+ BHK</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Cabins / Rooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value="0"
                  disabled
                  className="w-full px-3 py-3 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 text-sm cursor-not-allowed"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Bathrooms *
              </label>
              <input
                type="number"
                name="bathrooms"
                required
                min="1"
                max="10"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full px-3 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Area (sq.ft) *
              </label>
              <input
                type="number"
                name="area"
                required
                min="100"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g. 1850"
                className="w-full px-3 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Property Description *
            </label>
            <textarea
              name="description"
              required
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Highlight special features, nearby schools, parks, transportation connectivity, and views..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Image URL & Quick Sample Picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Property Image URL *
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
            />
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs text-slate-400 shrink-0">Sample Images:</span>
              {SAMPLE_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, imageUrl: img }))}
                  className={`w-10 h-8 rounded-lg overflow-hidden shrink-0 border transition-all ${
                    formData.imageUrl === img ? 'ring-2 ring-indigo-500 border-transparent' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Amenities & Facilities
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {COMMON_AMENITIES.map((amenity) => {
                const selected = formData.amenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {selected && <Check className="w-3.5 h-3.5" />}
                    <span>{amenity}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amenity Adder */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customAmenity}
                onChange={(e) => setCustomAmenity(e.target.value)}
                placeholder="Add custom amenity (e.g. Squash Court)"
                className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={handleAddCustomAmenity}
                className="px-3 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>

          {/* Featured Listing Checkbox */}
          <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/50">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
            />
            <label htmlFor="featured" className="text-xs font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 cursor-pointer">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Mark as Featured Premium Listing</span>
            </label>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeListModal}
              disabled={submitting}
              className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Property...</span>
                </>
              ) : (
                <>
                  <Building className="w-4 h-4" />
                  <span>Submit Property</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListPropertyModal;
