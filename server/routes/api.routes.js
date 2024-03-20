import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.route("/createuser").post(createUser);
router.route("/getusers").get(getAllUsers);
router.route("/getuser/:id").get(getUserById);
router.route("/updateuser/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);

export default router;
