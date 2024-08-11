const todoController = require('../controllers/todoController');
const express = require('express');
const router = express.Router();

// Defined store route
router.route('/').get(todoController.getTodos).post(todoController.addTodo);

module.exports = router;

