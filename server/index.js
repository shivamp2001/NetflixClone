const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./src/routes/route");
require("dotenv").config()
const DATABASE=process.env.DATABASE
const cors=require("cors")

mongoose.connect(DATABASE)
  .catch((err) => console.log(err))
  .then(() => console.log("Database connected successfully"));
app.use(cors())
app.use(express.json({limit:"10mb"}))

app.use("/", route);
app.listen(5000, () => console.log("Server running on port 5000"));
