import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/realestate', {
      serverSelectionTimeoutMS: 4000
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning]: Connection failed - ${error.message}`);
    console.warn(`[MongoDB Note]: Server running without MongoDB connection. Seed endpoints will return connection advice.`);
    return false;
  }
};

export default connectDB;
