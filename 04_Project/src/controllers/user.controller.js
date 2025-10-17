import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;
  console.log("email:", email);

  if (
    [fullname, username, email, password].some(
      (field) => field?.trim() === ""
    ) ||
    !email.contains("@")
  ) {
    throw new apiError(400, "All field are required.");
  }


  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) throw new apiError(409, "User already existed , log in.");


  const profileLocalPath = req.files?.profile[0]?.path;

  const profile = profileLocalPath? await uploadOnCloudinary(profileLocalPath):"";


  const user = await User.create({
    name: fullname,
    username: username.toLowerCase(),
    password: password,
    email: email,
    profileSource: profile?.url || "",
    followers: 0,
    following: 0,
    userBio: null,
  });

  const createdUser = User.findById(user._id).select(
    "-password -refreshToken -"
  );

  if (!createdUser) {
    throw new apiError(500, "Something went wrong while registering the user,");
  }


  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "User created successfully"));
});

export { registerUser };
