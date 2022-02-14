const http = require('http')
const socketServer = require('socket-io')
const app = require('./app')
const { Message } = require('./models')
const { SOCKET_EVENTS } = require('./config')

const PORT = 3000
const server = http.createServer(app)
const io = socketServer(server)

io.on('connection', socket => {
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async newMessage => {
    try {
      const savedMessage = await Message.create(newMessage)
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage)
    } catch (error) {
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error)
    }
  })
  socket.on('disconnect', reason => {
    console.log(reason)
  })
})

server.listen(PORT, () => {
  console.log('My server started :' + PORT)
})
