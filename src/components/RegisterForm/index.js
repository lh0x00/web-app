import React, { PureComponent } from 'react'
import Request from 'lib/classes/request'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

import { RegisterForm as RegisterFormStyled } from './styles'
import fields from './fields'

type PRegisterForm = {
  username?: string,
  password?: string,
  email?: string,
  isAutoLogin?: boolean,
  onSuccess?: void,
  onFailed?: void,
}

type SRegisterForm = {
  username?: string,
  password?: string,
  repassword?: string,
  email?: string,
}

class RegisterForm extends PureComponent<PRegisterForm, SRegisterForm> {
  constructor(props: PRegisterForm) {
    super(props)
    const { username, password, email } = props

    this.state = {
      username,
      password,
      email,
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
    const { username, password, email } = this.state

    const request = new Request('register', { username, password, email })
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
      <RegisterFormStyled>
        <Form>
          {fieldOnKeys.map(
            ([name, item]) => this.renderField({ name, ...item }),
          )}
          <Button type="button" onClick={this.onSubmit}>
            Register
          </Button>
        </Form>
      </RegisterFormStyled>
    )
  }
}

export default RegisterForm
