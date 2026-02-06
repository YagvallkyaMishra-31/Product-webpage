import express from "express";
import {
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createUserDTO, updateUserDTO } from "../dto/user.dto.js";
const router = express.Router();
router.get("/", getUser);
router.post(
    "/",
    validate(createUserDTO), //middleware chaining
    createUser,
);
router.patch("/:id", validate(updateUserDTO), updateUser);
router.delete("/:id", deleteUser);
export default router;;
// these files define all API routes related to the users
// its main purpose is to connnect the controller with proper HTTP routes.
// 