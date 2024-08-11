const Todo = require("../models/todoModel");

const getTodos = (req, res) => {
  res.send("Hello from the controller");
};

const addTodo = (req, res) => {
  res.send("Hello from the controller");
};

module.exports = {
  getTodos,
  addTodo,
};
