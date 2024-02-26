import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (db.connections[0].readyState === 1) {
      connection.isConnected = true;
      console.log("Connected to MongoDB");
    } else {
      connection.isConnected = false;
      console.error("Failed to connect to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Couldn't connect to Mongo: " + error.message);
  }
};
