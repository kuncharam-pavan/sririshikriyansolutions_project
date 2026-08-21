import api from './api';
import fallbackProperties from '../data/fallbackProperties';

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
      console.warn('[propertyService] API connection unavailable or error. Using client fallback dataset.', error.message);
      return {
        data: fallbackProperties,
        source: 'fallback',
        error: null, // Gracefully use fallback without throwing UI crash
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
      console.warn(`[propertyService] API failed for property ${id}. Checking client fallback properties.`, error.message);
      const fallbackItem = fallbackProperties.find((p) => String(p._id) === String(id));
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
};

export default propertyService;
