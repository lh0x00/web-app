import React, { PureComponent } from 'react'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

class LoginForm extends PureComponent {
  onChangeField = (e: TInputChangeEvent) => {
    const { name, value } = (e && e.target) || {}
    console.log({ name, value })
  }

  onSubmit = () => {

  }

  render() {
    return (
      <div>
        <Form>
          <Input name="username" type="text" placeholder="username" onChange={this.onChangeField} />
          <Input name="password" type="password" placeholder="password" onChange={this.onChangeField} />
          <Button type="button">Login</Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm
