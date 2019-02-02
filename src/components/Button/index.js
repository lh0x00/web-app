import React from 'react'
import { Button as ButtonStyled } from './styles'

type PButton = {
  type: 'button' | 'submit' | 'reset',
  children: any,
  onClick?: void,
}

const Button = ({
  type,
  children,
  onClick,
  ...rest
}: PButton): any => (
  /* eslint-disable-next-line react/button-has-type */
  <ButtonStyled
    type={type}
    onClick={onClick}
    {...rest}
  >
    {children}
  </ButtonStyled>
)

export default Button
