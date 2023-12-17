const express = require("express");
const { dbConnect } = require("./database/dbconnect.js");
require("dotenv").config();
const app = express();

app.use(express.json());
dbConnect();

const userRoute = require("./routes/user.route.js");
app.use("/api/v1/auth", userRoute);
app.listen(process.env.PORT, () => {
  console.log(`server started at port number ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello world");
});
