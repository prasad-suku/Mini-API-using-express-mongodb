const mongoose = require("mongoose");

// userSchema

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  Age: { type: Number, required: true },
  place: { type: String, required: true },
  phone: { type: Number, required: true },
});

const usermodel = mongoose.model("usersdetails", userSchema);

module.exports = usermodel;
