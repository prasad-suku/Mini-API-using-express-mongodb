const express = require("express");
const {
  getusers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controller/user.controller.js");
const router = express.Router();

// router operation

// get all users route
router.get("/", getusers);

// get single user route
router.get("/:id", getSingleUser);
// create a new user route

router.post("/", createUser);

// ubdate a user route

router.put("/:id", updateUser);

// delete a user route

router.delete("/:id", deleteUser);

module.exports = router;
