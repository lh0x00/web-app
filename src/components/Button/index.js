import React from 'react'

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
  <button
    type={type}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
)

export default Button
