import React, { PureComponent } from 'react'
import RegisterForm from 'components/RegisterForm'
import compose from 'lib/hoc/compose'
import withSession from 'lib/hoc/withSession'
import withRouter from 'lib/hoc/withRouter'
import PATH from 'lib/enums/path'

type PRegister = {} & Page

class Register extends PureComponent<PRegister, StateComponent> {
  onSuccess = (user: UserData) => {
    const { router } = this.props

    // moving to home page
    router.replace(PATH.HOME)

    // eslint-disable-next-line no-console
    console.log(user, 'user')
  }

  onFailed = (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error, 'error')
  }

  render() {
    return (
      <div>
        <div>welcome to register!</div>
        <div>
          <RegisterForm onSuccess={this.onSuccess} onFailed={this.onFailed} />
        </div>
      </div>
    )
  }
}

export default compose(
  withSession,
  withRouter,
)(Register)
