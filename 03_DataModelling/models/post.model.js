import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
    maxlength: 255,
  },
  status: {
    type: String,   // matches Appwrite (required string)
    required: true,
  },
  caption: {
    type: String,
    default: "",
    maxlength: 50,  // matches Appwrite
  }
}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);
