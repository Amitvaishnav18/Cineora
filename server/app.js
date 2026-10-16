
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cityRoutes = require("./routes/city.routes")

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/cities", cityRoutes);

const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);

module.exports = app;
