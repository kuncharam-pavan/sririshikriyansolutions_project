import Property from '../models/Property.js';
import { initialProperties } from '../data/seedData.js';
import mongoose from 'mongoose';

// @desc    Get all properties with filtering, searching, and sorting
// @route   GET /api/properties
// @access  Public
export const getProperties = async (req, res, next) => {
  try {
    // If Mongoose is not connected, return fallback dataset
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        success: true,
        count: initialProperties.length,
        source: 'fallback',
        data: initialProperties,
      });
    }

    const { search, type, city, priceRange, minPrice, maxPrice, bedrooms, sortBy } = req.query;

    let query = {};

    // 1. Dynamic Search (name, city, location)
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { city: searchRegex },
        { location: searchRegex },
      ];
    }

    // 2. Property Type Filter
    if (type && type !== 'All') {
      query.type = type;
    }

    // 3. City Filter
    if (city && city !== 'All') {
      query.city = new RegExp(`^${city.trim()}$`, 'i');
    }

    // 4. Price Range Filter
    if (priceRange) {
      if (priceRange === 'under50') {
        query.price = { $lt: 5000000 };
      } else if (priceRange === '50to100') {
        query.price = { $gte: 5000000, $lte: 10000000 };
      } else if (priceRange === 'above100') {
        query.price = { $gt: 10000000 };
      }
    } else if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // 5. Bedrooms Filter
    if (bedrooms && bedrooms !== 'All') {
      if (bedrooms === '4+' || bedrooms === '4') {
        query.bedrooms = { $gte: 4 };
      } else {
        query.bedrooms = Number(bedrooms);
      }
    }

    // 6. Sorting
    let sortOptions = {};
    if (sortBy === 'price-asc') {
      sortOptions.price = 1;
    } else if (sortBy === 'price-desc') {
      sortOptions.price = -1;
    } else if (sortBy === 'newest') {
      sortOptions.createdAt = -1;
    } else {
      sortOptions.featured = -1;
      sortOptions.createdAt = -1;
    }

    const properties = await Property.find(query).sort(sortOptions);

    res.status(200).json({
      success: true,
      count: properties.length,
      source: 'database',
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single property by ID
// @route   GET /api/properties/:id
// @access  Public
export const getPropertyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fallback if DB is not connected
    if (mongoose.connection.readyState !== 1) {
      const fallbackProp = initialProperties.find((p) => p._id === id);
      if (fallbackProp) {
        return res.status(200).json({ success: true, source: 'fallback', data: fallbackProp });
      }
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    let property = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      property = await Property.findById(id);
    }

    if (!property) {
      // Check fallback items in case string ID match
      const fallbackMatch = initialProperties.find((p) => p._id === id);
      if (fallbackMatch) {
        return res.status(200).json({ success: true, source: 'fallback', data: fallbackMatch });
      }
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.status(200).json({
      success: true,
      source: 'database',
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new property listing
// @route   POST /api/properties
// @access  Public
export const createProperty = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection offline. Cannot create property.',
      });
    }

    const property = await Property.create(req.body);
    res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update existing property listing
// @route   PUT /api/properties/:id
// @access  Public
export const updateProperty = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection offline. Cannot update property.',
      });
    }

    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a property listing
// @route   DELETE /api/properties/:id
// @access  Public
export const deleteProperty = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection offline. Cannot delete property.',
      });
    }

    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Property deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Explicit Seed Endpoint
// @route   POST /api/seed
// @access  Public
export const seedProperties = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database connection offline. Please connect MongoDB before triggering explicit seed.',
      });
    }

    await Property.deleteMany({});
    const propertiesToInsert = initialProperties.map(({ _id, ...rest }) => rest);
    const created = await Property.insertMany(propertiesToInsert);

    res.status(201).json({
      success: true,
      message: `Database successfully populated with ${created.length} property listings!`,
      count: created.length,
      data: created,
    });
  } catch (error) {
    next(error);
  }
};
