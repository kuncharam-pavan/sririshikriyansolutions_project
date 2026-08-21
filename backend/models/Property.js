import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Property name is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Property type is required'],
      enum: ['Apartment', 'Villa', 'Independent House', 'Commercial'],
    },
    price: {
      type: Number,
      required: [true, 'Property price is required'],
      min: [0, 'Price must be a positive number'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location/Area is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Full address is required'],
      trim: true,
    },
    bedrooms: {
      type: Number,
      default: 0,
      min: 0,
    },
    bathrooms: {
      type: Number,
      default: 0,
      min: 0,
    },
    area: {
      type: Number,
      required: [true, 'Area in sq.ft. is required'],
      min: [0, 'Area must be positive'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    images: {
      type: [String],
      required: [true, 'At least one property image is required'],
      validate: [
        (val) => Array.isArray(val) && val.length > 0,
        'Property must have at least one image',
      ],
    },
    amenities: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for fast dynamic searching
propertySchema.index({ name: 'text', city: 'text', location: 'text' });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export default Property;
