require('dotenv').config(); // === load .env variables

const server = require('./api/server');

const port = process.env.PORT || 2222;

server.listen(port, () => {
    console.log(`\n\t\t\t\t\t*** server running on localhost:${port} ***`)
})