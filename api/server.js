// ======== Imports ========
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/usersRouter');
const strainsRouter = require('../strains/strainsRouter');
const userResponseRouter = require('../user_response/userResponseRouter');
const recommendationRouter = require('../recommendation/recommendationRouter');

// ======== Server  ========

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/users',  usersRouter);
server.use('/strains',  strainsRouter);
server.use('/response',  userResponseRouter);
server.use('/recommendation',  recommendationRouter);

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
