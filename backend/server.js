const express = require("express");
const dotenv = require("dotenv");
const app = express();
require("colors");
// database
const connectDb = require("./db/db");
// router
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoutes");
// error handler
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8080;

dotenv.config();
connectDb();
app.use(express.json("Content-Type:application/json"));
app.use("/api", productRoute);
app.use("/api/users", userRoute);
app.use("/api/cart", cartRoute);

app.listen(port, () => {
  console.log("");
  console.log(
    ` Running on Port ${port} in ${process.env.MODE} Mode `.yellow.inverse
  );
  console.log("");
});
