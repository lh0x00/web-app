import React, { PureComponent } from 'react'

class Home extends PureComponent {
  // static async getInitialProps() {
  //   const res = await axios('http://localhost:4000/api/example')
  //   const data = await res.data
  //   return { data }
  // }

  render() {
    const { data } = this.props
    return (
      <div>
        <div>welcome to home!</div>
        <div>
          <button onClick={this.onClick}>room 1</button>
          <button onClick={this.onCamera}>camera</button>
          <input type="file" onChange={this.onChange} />
          <video id="video" />
        </div>
      </div>
    )
  }
}

export default Home
