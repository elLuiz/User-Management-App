require('dotenv').config();

const routes = require("express").Router();
const UserController = require("./Controllers/User/UserController");
const Auth = require('./Middleware/Auth');
const userController = new UserController();

routes.get('/users', userController.getUsers);
routes.post('/user/', userController.insertUser);
routes.put('/user/:id', userController.changeUserPassword);
routes.delete('/user/:id', userController.deleteUser);
routes.get('/checkCredentials', Auth, (req, res)=>{
    console.log(req.cookies);
    res.status(200).json({mess: 'Connected'});
    // const token = 
    // req.body.token ||
    // req.query.token ||
    // req.headers['x-access-token'] ||
    // req.cookies.token;

    // console.log('Cookies: ' + token)
    
    // return res.status(200).send('OK')
})
module.exports = routes