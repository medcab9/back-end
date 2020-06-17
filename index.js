

const server = require('./api/server');

const port = process.env.PORT || 3333;

server.listen(port, () => {
    console.log(`\n\t\t\t\t\t*** server running on localhost:${port}`)
})