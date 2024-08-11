const todoRoutes = require("./routes/todoRoute");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
require("./config/dbConnect");
const port = process.env.PORT || 4000;

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});