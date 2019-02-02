import React from 'react'
import { Input as InputStyled } from './styles'

type PInput = {
  type: string,
}

const Input = ({
  type,
  ...rest
}: PInput): any => (
  <InputStyled type={type} {...rest} />
)

export default Input
