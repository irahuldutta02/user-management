import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

const createUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
      },
      phone: req.body.phone,
      website: req.body.website,
      company: {
        name: req.body.company.name,
      },
    });

    const createdUser = await user.save();
    return res
      .status(201)
      .send({ status: 201, message: "User created", data: createdUser });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: "Something went wrong User not created",
      error: error,
    });
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    return res
      .status(200)
      .send({ status: 200, message: "All users", data: users });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: "Something went wrong. Users not found",
      error: error,
    });
  }
});

const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res
        .status(200)
        .send({ status: 200, message: "User found", data: user });
    } else {
      return res.status(404).send({ status: 404, message: "User not found" });
    }
  } catch (error) {
    return res
      .status(404)
      .send({ status: 404, message: "User not found", error: error });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      user.address = req.body.address || user.address;
      user.phone = req.body.phone || user.phone;
      user.website = req.body.website || user.website;
      user.company = req.body.company || user.company;

      const updatedUser = await user.save();
      return res
        .status(200)
        .send({ status: 200, message: "User updated", data: updatedUser });
    } else {
      return res.status(404).send({ status: 404, message: "User not found" });
    }
  } catch (error) {
    return res
      .status(404)
      .send({ status: 404, message: "User not found", error: error });
  }
});

// delete route -> /api/delete/:id
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

    if (deletedUser) {
      return res
        .status(200)
        .send({ status: 200, message: "User deleted", data: deletedUser });
    } else {
      return res.status(404).send({ status: 404, message: "User not found" });
    }
  } catch (error) {
    return res
      .status(404)
      .send({ status: 404, message: "User not found", error: error });
  }
});

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
