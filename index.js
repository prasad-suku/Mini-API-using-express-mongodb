// mongodb://localhost:27017/
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

// mongoose connection
mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("mongoose connected"))
  .catch((e) => console.log(e));

app.listen(6000, () => console.log("running on server"));
