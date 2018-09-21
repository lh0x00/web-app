import React, { PureComponent } from 'react'
import Request from 'lib/classes/request'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

import fields from './fields'

type PLoginForm = {
  username?: string,
  password?: string,
  onSuccess?: void,
  onFailed?: void,
}

type SLoginForm = {
  username?: string,
  password?: string,
}

class LoginForm extends PureComponent<PLoginForm, SLoginForm> {
  constructor(props: PLoginForm) {
    super(props)
    const { username, password } = props

    this.state = {
      username,
      password,
    }
  }

  onChangeField = (e: TInputChangeEvent) => {
    const { name, value } = (e && e.target) || {}
    this.setState({
      [name]: value,
    })
  }

  onSuccess = (error) => {
    const { onSuccess } = this.props
    if (onSuccess) onSuccess(error)
  }

  onFailed = (error) => {
    const { onFailed } = this.props
    if (onFailed) onFailed(error)
  }

  onSubmit = () => {
    const { username, password } = this.state

    const request = new Request('login', { username, password })
    request
      .fetch()
      .then((data) => {
        const { status, error, data: user } = data || {}
        if (!status) {
          this.onFailed(error)
          return false
        }
        this.onSuccess(user)
        return true
      })
      .catch(this.onFailed)
  }

  renderField = ({
    name,
    type,
    placeholder,
  }: {
    name: string,
    type: string,
    placeholder: string,
  }) => (
    <Input
      key={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={this.onChangeField}
    />
  )

  render() {
    const fieldOnKeys = Object.entries(fields)
    return (
      <div>
        <Form>
          {fieldOnKeys.map(
            ([name, item]) => this.renderField({ name, ...item }),
          )}
          <Button type="button" onClick={this.onSubmit}>
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginForm
