import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js';
import { seedProperties } from './controllers/propertyController.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
app.use(cors());
app.use(express.json());

// Root API Health Check
app.get('/', (req, res) => {
  res.json({
    message: 'Real Estate Property Marketplace API Service is running',
    version: '1.0.0',
    endpoints: {
      properties: '/api/properties',
      seed: 'POST /api/seed',
    },
  });
});

// Explicit Seed Endpoint at /api/seed as well
app.post('/api/seed', seedProperties);

// Mount Property Routes
app.use('/api/properties', propertyRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`[Express Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
// });


app.listen(PORT, () => {
  console.log(`[Express Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

export default app;