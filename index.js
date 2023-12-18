const express = require("express");
const { dbConnect } = require("./database/dbconnect.js");
const cors = require("cors");
const cookieSession = require("cookie-session");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
dbConnect();

//user route
const userRoute = require("./routes/user.route.js");
app.use("/api/v1/auth", userRoute);

//opportunity route
const oppRoute = require("./routes/opportunites.route.js")
app.use("/api/v1/opp", oppRoute);

//team route
const teamRoute = require("./routes/team.route.js")
app.use("/api/v1/team", teamRoute);

//Investor route
const investorRoute = require("./routes/investor.route.js")
app.use("/api/v1/investor", investorRoute);

//app start
app.listen(process.env.PORT, () => {
  console.log(`server started at port number ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello world");
});
