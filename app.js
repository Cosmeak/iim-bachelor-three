const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5500/'
  }
})
const port = process.env.port || 3000

const router = require('./app/routes/routes')
app.use(router)

io.on('connection', (socket) => {
  console.log('a user connected')
})

server.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`)
})

app.set('io', io)
