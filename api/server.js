// ======== Imports ========
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./routes');

// ======== Server  ========

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', apiRoutes)

server.use('/', (req, res) => {
    res.status(404).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="http://3.bp.blogspot.com/-nY7RCflMJOk/TdVR-JHjEyI/AAAAAAAAAC8/D0tVTHeksow/s1600/Powerman_5000_umvd01.jpg"/></div>');
});

module.exports = server;