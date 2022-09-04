const TodoList = require('../models/todoList');


exports.getAllTodoList = async (req, res, next) => {
    try{
        const [allTodoList] = await TodoList.fetchAll();
        res.status(200).json(allTodoList);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode= 500;
        }
        next(err);
    }
};

exports.postTodoList = async (req, res, next) => {
    try{
        const postResponse = await TodoList.post(req.body.item);
        res.status(201).json(postResponse);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode= 500;
        }
        next(err);
    }
};

exports.putTodoList = async (req, res, next) => {
    try{
        const putResponse = await TodoList.update(req.body.id, req.body.item);
        res.status(200).json(putResponse);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode= 500;
        }
        next(err);
    }
};

exports.deleteTodoList = async (req, res, next) => {
    try{
        const deleteResponse = await TodoList.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode= 500;
        }
        next(err);
    }
};




