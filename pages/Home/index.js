/* flow */
import React, { PureComponent } from 'react'
import io from 'socket.io-client'
import axios from 'axios'

class Home extends PureComponent {
  static async getInitialProps() {
    const res = await axios('http://localhost:3000/api/example')
    const data = await res.data
    return { data }
  }

  onClick = () => {
    const socket = io.connect('ws://localhost:3001', {
      path: '/ws',
      query: {
        token: 'abc',
      },
      transports: ['websocket', 'polling'],
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
