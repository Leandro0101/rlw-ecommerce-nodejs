import app from '../src/routes/index'
import http from 'http'
import Socket from 'socket.io'
import './database'
const httpServer = http.createServer(app)
const io = new Socket(httpServer)

io.on('connection', (socket) => {
  console.log('conectado')

  socket.on('disconnect', () => {
    console.log('Disconneted')
  })
})

httpServer.listen(3001)
