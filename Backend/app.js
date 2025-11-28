const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const cors=require("cors")

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

dotenv.config({ path: "config.env" });

 app.use(express.json());
 app.use(cookieParser());
 app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
 const order = require("./routes/orderRoute");
 const payment = require("./routes/paymentRoute");

 app.use("/api/v1", product);
 app.use("/api/v1", user);
app.use("/api/v1", order);
 app.use("/api/v1", payment);
app.use(errorMiddleware);

 module.exports = app;