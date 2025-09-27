import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileSource: {
    type: String,
    default: "",
    minlength: 10,
    maxlength: 255,
  },
  followers: {
    type: Number,
    min: 0,
    default: 0,
  },
  following: {
    type: Number,
    min: 0,
    default: 0,
  },
  userBio: {
    type: String,
    default: "",
    maxlength: 255,
  },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
