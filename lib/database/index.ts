import mongoose from 'mongoose';

// The MONGODB_URI should be set in the environment variables
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  // If the connection is already established, return the cached connection
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  try {
    // Create the connection promise and store it in the cache if it doesn't exist
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
      dbName: 'eventrendz',
      bufferCommands: false, // Disable buffering to handle operations only when connected
    });

    // Wait for the connection to resolve and store it in the cache
    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    // Handle the connection error
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}
