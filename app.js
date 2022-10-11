const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const port = process.env.port || 3000

io.on('connection', (socket) => {
  console.log('a user connected')
})

server.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`)
})
