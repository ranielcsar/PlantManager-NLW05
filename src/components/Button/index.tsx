import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Label } from './styles'

type Props = {
  title: string
} & TouchableOpacityProps

const Button: React.FC<Props> = ({ title, ...rest }) => (
  <Container {...rest}>
    <Label>{title}</Label>
  </Container>
)

export default Button
