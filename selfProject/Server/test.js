
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dataRouter = require("./routes/app");
const { MONGO_URI } = process.env;

// mongoose settings (4)
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// express 기본 세팅 (1)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("main page");
})

app.use("/data", dataRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); 