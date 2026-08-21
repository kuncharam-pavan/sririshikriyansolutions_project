import express from 'express';
import {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  seedProperties,
} from '../controllers/propertyController.js';

const router = express.Router();

// Seed route
router.post('/seed', seedProperties);

// Root property routes
router.route('/')
  .get(getProperties)
  .post(createProperty);

// Parameterized property routes
router.route('/:id')
  .get(getPropertyById)
  .put(updateProperty)
  .delete(deleteProperty);

export default router;
