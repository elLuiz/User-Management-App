require('dotenv').config();

const routes = require("express").Router();
const UserController = require("./Controllers/User/UserController");
const Auth = require('./Middleware/Auth');
const userController = new UserController();

routes.get('/users', Auth, userController.getUsers);
routes.post('/user/', userController.insertUser);
routes.post('/user-login/', userController.loginUser);

// routes.delete('/user/:id', userController.deleteUser);
routes.get('/user', Auth, userController.getUser);
routes.get('/checkCredentials', Auth, (req, res)=>{
    res.status(200).json({message: 'Connected'});
})
module.exports = routes