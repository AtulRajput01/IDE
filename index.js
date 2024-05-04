const express = require('express')
const http = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express();
const Server = http.createServer(app);
const io = new SocketServer({
    cors: '*'
})

io.attach(server);

io.on('connection', (socket) => {
    console.log('socket connected', socket.io)
})

app.get('/', function(req, res){
    res.send("hi this is my first web")
})

server.listen(9000, () => console.log('docker server is running on port 9000'))