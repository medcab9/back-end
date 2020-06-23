// ======== Imports ========
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/usersRouter');
const strainsRouter = require('../strains/strainsRouter');

// ======== Server  ========

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', authenticate, usersRouter)

server.use('/auth', authRouter);
server.use('/strains', strainsRouter);

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




