import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Modules 

const userSchema = new mongoose.Schema(
  {
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
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
// Schema 

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = bcrypt.hash(this.password, 10);
  next();
});
// Middleware

// Methods 
userSchema.methods.passwordCheck = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  );
};
// Methods 

export const User = mongoose.model("User", userSchema);
