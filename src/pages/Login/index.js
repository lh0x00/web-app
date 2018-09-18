import React, { PureComponent } from 'react'
import LoginForm from 'components/LoginForm'

class Login extends PureComponent<PropsComponent, StateComponent> {
  static async getInitialProps(ctx: object): object {
    const { session } = ctx.req || {}
    return { session }
  }

  onSuccess = () => {}

  onFailed = () => {}

  render() {
    const { data } = this.props
    console.log(this.props)
    return (
      <div>
        <div>welcome to login!</div>
        <div>
          <LoginForm
            onSuccess={this.onSuccess}
            onFailed={this.onFailed}
          />
        </div>
      </div>
    )
  }
}

export default Login
