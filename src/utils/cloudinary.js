import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: "dyhybhxyw",
  api_key: "112533765256748",
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    console.log("File upload complete", response.url);
    fs.unlinkSync(filePath);
    return response.url
  } catch (error) {
    console.log("File upload error", error);
    return null;
  }
};
