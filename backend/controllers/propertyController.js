import Property from '../models/Property.js';
import { initialProperties } from '../data/seedData.js';
import mongoose from 'mongoose';

// In-memory properties storage if DB is not connected (allows local create/update/delete during evaluation)
let inMemoryProperties = [...initialProperties];

// Helper to filter in-memory fallback data
const filterInMemory = (items, { search, type, city, priceRange, minPrice, maxPrice, bedrooms, sortBy }) => {
  let result = [...items];

  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.city?.toLowerCase().includes(q) ||
        p.location?.toLowerCase().includes(q) ||
        p.type?.toLowerCase().includes(q) ||
        p.address?.toLowerCase().includes(q)
    );
  }

  if (type && type !== 'All') {
    result = result.filter((p) => p.type?.toLowerCase() === type.toLowerCase());
  }

  if (city && city !== 'All') {
    result = result.filter((p) => p.city?.toLowerCase() === city.toLowerCase());
  }

  if (priceRange && priceRange !== 'All') {
    if (priceRange === 'under50') {
      result = result.filter((p) => (Number(p.price) || 0) < 5000000);
    } else if (priceRange === '50to100') {
      result = result.filter((p) => (Number(p.price) || 0) >= 5000000 && (Number(p.price) || 0) <= 10000000);
    } else if (priceRange === 'above100') {
      result = result.filter((p) => (Number(p.price) || 0) > 10000000);
    }
  } else if (minPrice || maxPrice) {
    if (minPrice) result = result.filter((p) => (Number(p.price) || 0) >= Number(minPrice));
    if (maxPrice) result = result.filter((p) => (Number(p.price) || 0) <= Number(maxPrice));
  }

  if (bedrooms && bedrooms !== 'All') {
    if (bedrooms === '4+' || bedrooms === '4') {
      result = result.filter((p) => (Number(p.bedrooms) || 0) >= 4);
    } else {
      result = result.filter((p) => (Number(p.bedrooms) || 0) === Number(bedrooms));
    }
  }

  if (sortBy === 'price-asc') {
    result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
  } else if (sortBy === 'price-desc') {
    result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
  } else if (sortBy === 'newest') {
    result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  } else {
    result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
};

// @desc    Get all properties with filtering, searching, and sorting
// @route   GET /api/properties
// @access  Public
export const getProperties = async (req, res, next) => {
  try {
    const { search, type, city, priceRange, minPrice, maxPrice, bedrooms, sortBy } = req.query;

    // If Mongoose is not connected, use filtered in-memory dataset
    if (mongoose.connection.readyState !== 1) {
      const filtered = filterInMemory(inMemoryProperties, req.query);
      return res.status(200).json({
        success: true,
        count: filtered.length,
        source: 'fallback',
        data: filtered,
      });
    }

    let query = {};

    // 1. Dynamic Multi-field Search (name, city, location, type, address)
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { city: searchRegex },
        { location: searchRegex },
        { type: searchRegex },
        { address: searchRegex },
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
    if (priceRange && priceRange !== 'All') {
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
      const fallbackProp = inMemoryProperties.find((p) => String(p._id) === String(id));
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
      const fallbackMatch = inMemoryProperties.find((p) => String(p._id) === String(id));
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
    const propertyData = {
      ...req.body,
      price: Number(req.body.price) || 0,
      bedrooms: Number(req.body.bedrooms) || 0,
      bathrooms: Number(req.body.bathrooms) || 0,
      area: Number(req.body.area) || 0,
      images: Array.isArray(req.body.images) && req.body.images.length > 0 
        ? req.body.images 
        : [req.body.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
      amenities: Array.isArray(req.body.amenities) ? req.body.amenities : [],
      createdAt: new Date(),
    };

    if (mongoose.connection.readyState !== 1) {
      const newProp = {
        ...propertyData,
        _id: 'prop-' + Date.now(),
      };
      inMemoryProperties.unshift(newProp);
      return res.status(201).json({
        success: true,
        source: 'fallback',
        data: newProp,
      });
    }

    const property = await Property.create(propertyData);
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
    const { id } = req.params;

    if (mongoose.connection.readyState !== 1) {
      const idx = inMemoryProperties.findIndex((p) => String(p._id) === String(id));
      if (idx !== -1) {
        inMemoryProperties[idx] = { ...inMemoryProperties[idx], ...req.body };
        return res.status(200).json({
          success: true,
          source: 'fallback',
          data: inMemoryProperties[idx],
        });
      }
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    const property = await Property.findByIdAndUpdate(id, req.body, {
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
    const { id } = req.params;

    if (mongoose.connection.readyState !== 1) {
      const exists = inMemoryProperties.some((p) => String(p._id) === String(id));
      if (exists) {
        inMemoryProperties = inMemoryProperties.filter((p) => String(p._id) !== String(id));
        return res.status(200).json({
          success: true,
          message: 'Property deleted successfully',
        });
      }
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    const property = await Property.findByIdAndDelete(id);

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
      inMemoryProperties = [...initialProperties];
      return res.status(201).json({
        success: true,
        message: `In-memory property dataset successfully reset with ${inMemoryProperties.length} listings.`,
        count: inMemoryProperties.length,
        data: inMemoryProperties,
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
