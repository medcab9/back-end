// ======== Imports ========
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/usersRouter');

// ======== Server  ========

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', usersRouter)

server.use('/auth', authRouter);
// server.use('/strains', authenticate, strainsRouter);

// server.use('/', (req, res) => {
//     res.status(404).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/></div>');
// });

// ======== 404 Page ========
server.use('/', (req, res, next) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath, err => {
        if (err) {
            next(err)
        } else {
            console.log("file sent successfully");
        }
    });
});

// ======== error handling middleware ========
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'There was an error performing the required operation',
        error: err
    })
})

module.exports = server;









































// // ===== Table1 ===== User gives us
// users_login/registration = {
//     "id": "",        
//     "username": "",
//     "password": "",
//     "email": "",
// }

// // ===== Table2 ===== User gives us
// user_input = {
//     "id": "",
//     "user": "",             // ===== user_id
//     "ailment" : "",         //<-- Pain, Anxiety
//     "desired_effects" : "", //<-- Sleepy, Hungry
//     "breed" : "",      //<-- Sativa, Indica, Hybrid
//     "intake" : "",          //<-- Edible, Flower, Drink ***STRETCH
// }


// // ===== Table3 ===== We give to user
// strains = {
//     "id": "",         
//     "name": "",
//     "flavor": "",
//     "description": "",
//     "ailment" : "",         //<-- Pain, Anxiety
//     "effect" : "",          //<-- Dizzy, Hungry
//     "breed" : "",           //<-- Sativa, Indica, Hybrid
// }


// // ===== Table4 ===== We give to user
// user_rec = {
//     "id": "",
//     "user": "",             // ===== user_id
//     "recommendation" : "",  // ===== strain_id
//     "intake" : "",          //<-- Edible, Flower, Drink ***STRETCH
// }




