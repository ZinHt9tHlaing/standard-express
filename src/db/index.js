import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionRes = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected Successfully.", connectionRes.connection.host);
  } catch (error) {
    console.log("DB connection error", error);
    process.exit(1);
  }
};
