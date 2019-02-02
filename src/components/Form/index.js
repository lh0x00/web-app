import React from 'react'
import { Form as FormStyled } from './styles'

type PForm = {
  children: any,
}

const Form = ({
  children,
  ...rest
}: PForm): any => (
  <FormStyled {...rest}>
    {children}
  </FormStyled>
)

export default Form
