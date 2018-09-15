import React from 'react'

type PInput = {
  type: string,
}

const Input = ({
  type,
  ...rest
}: PInput): any => (
  <input type={type} {...rest} />
)

export default Input
