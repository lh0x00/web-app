import React from 'react'

type PForm = {
  children: any,
}

const Form = ({
  children,
  ...rest
}: PForm): any => (
  <form {...rest}>
    {children}
  </form>
)

export default Form
