const userSchema = require("../model/user.model.js");

// Get all users
const getusers = async (req, res) => {
  try {
    let users = await userSchema.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single user based on params id

const getSingleUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const singleUser = await userSchema.findById(userId);
    res.status(200).json(singleUser);
  } catch {
    res.status(404).json({ error: "user not found" });
  }
};

// create an user using post method

const createUser = async (req, res) => {
  // method-1
  // const newUser = new userSchema(req.body)

  // method-2 for creating new data schema
  const newUser = new userSchema({
    userName: req.body.userName,
    Age: req.body.Age,
    place: req.body.place,
    phone: req.body.phone,
  });

  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Update an user

const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const userExists = await userSchema.findById(id);
    if (!userExists) {
      return res.status(404).json({ error: "User Not Found" });
    }
    const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json({ message: "succesfully updated user", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete an user

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const userExists = await userSchema.findById(id);
    if (!userExists) {
      return res.status(404).json({ error: "User Not Found" });
    }
    const deleteUser = await userSchema.findByIdAndDelete(id);

    res.status(200).json({ message: "succesfully deleted user", deleteUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getusers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
