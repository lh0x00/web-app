import React from 'react'

type PButton = {
  type: 'button' | 'submit' | 'reset',
  children: any,
}

const Button = ({
  type,
  children,
  ...rest
}: PButton): any => (
  /* eslint-disable-next-line react/button-has-type */
  <button type={type} {...rest}>
    {children}
  </button>
)

export default Button
