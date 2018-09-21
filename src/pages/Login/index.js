import React, { PureComponent } from 'react'
import LoginForm from 'components/LoginForm'
import compose from 'lib/hoc/compose'
import withSession from 'lib/hoc/withSession'
import withRouter from 'lib/hoc/withRouter'
import PATH from 'lib/enums/path'

type PLogin = {} & Page

class Login extends PureComponent<PLogin, StateComponent> {
  onSuccess = (user: UserData) => {
    const { router } = this.props
    router.replace(PATH.HOME)
    console.log(user, 'user') // eslint-disable-line no-console
  }

  onFailed = (error: Error) => {
    console.log(error, 'error') // eslint-disable-line no-console
  }

  render() {
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

export default compose(
  withSession,
  withRouter,
)(Login)
