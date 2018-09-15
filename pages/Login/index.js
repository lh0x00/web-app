import React, { PureComponent } from 'react'
import LoginForm from 'components/LoginForm'

class Login extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <div>
        <div>welcome to login!</div>
        <div>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login
