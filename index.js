const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const { Server } = require("socket.io");

const server = http.createServer(app)
const io = new Server(server);
//socket.io
io.on('connection',(socket)=>{
    socket.on('message',(message)=>{
        io.emit('message',message)
    })
})

app.use(express.static(path.resolve('./public')))
app.get('/',(res,req)=>{
    return res.sendFile('/public/index.html')
})
server.listen(9000, ()=>{
    console.log("server running at 9000")
})