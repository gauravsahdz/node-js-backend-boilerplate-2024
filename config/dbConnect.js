const mongoose = require("mongoose");

// Connection URL
const url = process.env.MONGO_URI;

// Use connect method to connect to the server
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
