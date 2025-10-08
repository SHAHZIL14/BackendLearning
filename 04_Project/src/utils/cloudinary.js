import { config } from "../../config/config.js";
import { v2 as cloudinary } from "cloudinary";
import fileSystem from "fs";
// Modules

cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API,
  api_secret: config.CLOUDINARY_SECRET,
});
// Config

const uploadOnCloudinary = async (serverFilePath) => {
  try {
    if (!serverFilePath) return new Error("No local path available!!");
    const response = await cloudinary.uploader.upload(serverFilePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded successfully✅",response.url);
    return response.url;
  } catch (error) {
    fileSystem.unlinkSync(serverFilePath);
    console.log("Local File path is unlinked");
    return error;
  }
};
// Uploading

export {uploadOnCloudinary};
