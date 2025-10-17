import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { Upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  Upload.fields([
    {
      name: "profile",
      maxCount: 1,
    }
  ]),
  registerUser
);

export default router;
