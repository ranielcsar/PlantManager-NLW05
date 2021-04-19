import React from 'react'

import { Container, Label } from './styles'

export type Props = {
  label: string
}

const Button: React.FC<Props> = ({ label, ...rest }) => (
  <Container {...rest}>
    <Label>{label}</Label>
  </Container>
)

export default Button
