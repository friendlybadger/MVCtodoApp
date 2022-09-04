const express = require('express')

const bodyParser = require('body-parser');
const cors = require('cors');
const todoListRoutes = require('./routes/todolist')
const errorController= require('./controllers/error');

const app = express();

const ports = process.env.port || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Orgin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('preflightContinue',' false');
    next();

});

app.use('/todoList', todoListRoutes);
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(3000, () => console.log(`listing on port ${ports}; http://localhost:3000/todoList`));
