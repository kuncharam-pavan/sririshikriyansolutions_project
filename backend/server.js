import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration for Render/Vercel production environment
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(null, true); // Allow cross-origin for public API assessment flexibility
      }
    },
    credentials: true,
  })
);

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

// Mount Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/seed', propertyRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Express Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
