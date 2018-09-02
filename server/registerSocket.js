import http from 'http'
import SocketIO from 'socket.io'

type TRegisterSocket = {
  server: any,
}

function registerSocket({ server }: TRegisterSocket): any {
  const ws = http.Server(server)

  const io = SocketIO(ws, {
    path: '/ws',
  })

  io.listen(3001)

  io.on('connection', (socket) => {
    console.log('connected')

    socket.on('from client', (data) => {
      console.log({ data })
    })

    setTimeout(() => {
      socket.emit('from server', { abc: 'value abc' })
    }, 3000)

    socket.on('disconnecting', () => {
      console.log('disconnecting')
    })
  })

  return server
}

export default registerSocket
