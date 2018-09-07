import React, { PureComponent } from 'react'
import io from 'socket.io-client'
import axios from 'axios'
import SOCKET from 'lib/enums/socket'

class Home extends PureComponent {
  // static async getInitialProps() {
  //   const res = await axios('http://localhost:4000/api/example')
  //   const data = await res.data
  //   return { data }
  // }

  onClick = () => {
    console.log({ x: `${SOCKET.PROTOCOL}//${SOCKET.HOSTNAME}:${SOCKET.PORT}` })
    const socket = io.connect(`${SOCKET.PROTOCOL}//${SOCKET.HOSTNAME}:${SOCKET.PORT}/example`, {
      path: SOCKET.PATH,
      query: {
        token: 'abc',
      },
    })

    const room = prompt('room id')

    socket.on('connect', (data) => {
      socket.emit('join room', room)
    })

    socket.on('message', (data) => {
      console.log('incoming message:', data)
    })

    console.log({ socket })
  }

  render() {
    const { data } = this.props
    // console.log({ data })
    return (
      <div>
        <div>welcome to home!</div>
        <div>
          <button onClick={this.onClick}>room 1</button>
        </div>
      </div>
    )
  }
}

export default Home
