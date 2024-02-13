const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

const PORT = 3000

server.listen(PORT)
console.log(`Server is running on port ${PORT}`)

io.on('connection', socket => {
    console.log('Client connected', socket.id)
})