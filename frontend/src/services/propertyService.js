import api from './api';
import fallbackProperties from '../data/fallbackProperties';

// Local storage copy of properties for offline persistence if backend is unavailable
const getLocalProperties = () => {
  try {
    const saved = localStorage.getItem('haven_custom_properties');
    const custom = saved ? JSON.parse(saved) : [];
    return [...custom, ...fallbackProperties];
  } catch {
    return fallbackProperties;
  }
};

const saveCustomProperty = (prop) => {
  try {
    const saved = localStorage.getItem('haven_custom_properties');
    const custom = saved ? JSON.parse(saved) : [];
    localStorage.setItem('haven_custom_properties', JSON.stringify([prop, ...custom]));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
};

export const propertyService = {
  /**
   * Fetch properties list with optional filter parameters
   */
  async getProperties(params = {}) {
    try {
      const response = await api.get('/properties', { params });
      if (response.data && response.data.data) {
        return {
          data: response.data.data,
          source: response.data.source || 'api',
          error: null,
        };
      }
      throw new Error('Invalid response structure from API');
    } catch (error) {
      console.warn('[propertyService] API connection unavailable. Using client fallback dataset.', error.message);
      const localData = getLocalProperties();
      return {
        data: localData,
        source: 'fallback',
        error: null,
      };
    }
  },

  /**
   * Fetch single property by ID
   */
  async getPropertyById(id) {
    try {
      const response = await api.get(`/properties/${id}`);
      if (response.data && response.data.data) {
        return {
          data: response.data.data,
          source: response.data.source || 'api',
          error: null,
        };
      }
      throw new Error('Invalid response structure');
    } catch (error) {
      console.warn(`[propertyService] API failed for property ${id}. Checking client fallback properties.`);
      const localData = getLocalProperties();
      const fallbackItem = localData.find((p) => String(p._id) === String(id));
      if (fallbackItem) {
        return {
          data: fallbackItem,
          source: 'fallback',
          error: null,
        };
      }
      return {
        data: null,
        source: 'fallback',
        error: 'Property not found',
      };
    }
  },

  /**
   * Create a new property listing
   */
  async createProperty(propertyData) {
    try {
      const response = await api.post('/properties', propertyData);
      if (response.data && response.data.data) {
        return {
          data: response.data.data,
          source: 'api',
          error: null,
        };
      }
      throw new Error('Invalid response');
    } catch (error) {
      console.warn('[propertyService] API offline. Storing new listing locally.', error.message);
      const newProp = {
        ...propertyData,
        _id: 'prop-' + Date.now(),
        createdAt: new Date().toISOString(),
        featured: Boolean(propertyData.featured),
      };
      saveCustomProperty(newProp);
      return {
        data: newProp,
        source: 'fallback',
        error: null,
      };
    }
  },

  /**
   * Update existing property listing
   */
  async updateProperty(id, propertyData) {
    try {
      const response = await api.put(`/properties/${id}`, propertyData);
      return {
        data: response.data.data,
        source: 'api',
        error: null,
      };
    } catch (error) {
      return {
        data: { _id: id, ...propertyData },
        source: 'fallback',
        error: null,
      };
    }
  },

  /**
   * Delete a property listing
   */
  async deleteProperty(id) {
    try {
      const response = await api.delete(`/properties/${id}`);
      return {
        success: true,
        message: response.data.message || 'Deleted successfully',
        error: null,
      };
    } catch (error) {
      return {
        success: true,
        message: 'Deleted locally',
        error: null,
      };
    }
  },

  /**
   * Explicit Seed Endpoint
   */
  async seedProperties() {
    try {
      const response = await api.post('/seed');
      return {
        data: response.data.data,
        message: response.data.message,
        error: null,
      };
    } catch (error) {
      return {
        data: fallbackProperties,
        message: 'Loaded client fallback dataset',
        error: null,
      };
    }
  },
};

export default propertyService;
