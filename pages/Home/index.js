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

  componentDidMount() {
    const socket = io.connect('ws://localhost:3001', {
      path: '/ws',
      query: {
        token: 'abc',
      },
      transports: ['websocket', 'polling'],
    })

    socket.on('from server', (data) => {
      console.log(data)
    })

    console.log({ socket })
  }

  render() {
    const { data } = this.props
    // console.log({ data })
    return (
      <div>home!</div>
    )
  }
}

export default Home
