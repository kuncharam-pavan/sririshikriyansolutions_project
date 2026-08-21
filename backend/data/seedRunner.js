import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Property from '../models/Property.js';
import { initialProperties } from './seedData.js';

dotenv.config();

const seedDB = async () => {
  const connected = await connectDB();
  if (!connected) {
    console.error('Seed process aborted: Could not connect to MongoDB.');
    process.exit(1);
  }

  try {
    await Property.deleteMany({});
    
    // Remove fixed string _id before MongoDB insertion to let Mongoose assign ObjectIds
    const propertiesToInsert = initialProperties.map(({ _id, ...rest }) => rest);

    const created = await Property.insertMany(propertiesToInsert);
    console.log(`[Seed Success]: Successfully seeded ${created.length} properties into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.error(`[Seed Error]: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
