const express =require('express')

const todoListControllers= require('../controllers/todoList')

const router = express.Router();

router.get('/', todoListControllers.getAllTodoList);

router.post('/', todoListControllers.postTodoList);
router.put('/', todoListControllers.putTodoList);
router.delete('/:id', todoListControllers.deleteTodoList);

module.exports = router;