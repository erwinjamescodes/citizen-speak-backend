const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const reportRoute = require("./routes/reports");
const userRoute = require("./routes/users");
const cors = require("cors");

dotenv.config();

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", 
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/api/reports", reportRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
