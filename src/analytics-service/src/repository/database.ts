const mongoose = require("mongoose");

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:admin123@localhost:27017/ss-analytics",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin",
      }
    );
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
