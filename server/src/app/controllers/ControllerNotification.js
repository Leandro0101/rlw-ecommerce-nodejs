import app from '../../routes/index'
import http from 'http'

import socketIo from 'socket.io'
const io = socketIo(http.createServer(app))

export default {
  connection () {
    io.on('connection', socket => {
      console.log('Conectado')
    })
  }
}
