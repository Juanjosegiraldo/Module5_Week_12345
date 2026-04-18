import mongoose from "mongoose";

// Read the MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

// Use a global cache to avoid creating multiple connections during development
// (Next.js hot reload would otherwise create a new connection on every change)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // Return existing connection if already connected
  if (cached.conn) return cached.conn;

  // Create a new connection promise if none exists yet
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
