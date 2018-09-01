/* flow */
import React, { PureComponent } from 'react'
import axios from 'axios'

class Home extends PureComponent {
  static async getInitialProps() {
    const res = await axios('http://localhost:3000/api/example')
    const data = await res.data
    return { data }
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
