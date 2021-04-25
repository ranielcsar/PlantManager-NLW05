import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Label } from './styles'

export type Props = {
  title: string
} & TouchableOpacityProps

const Button: React.FC<Props> = ({ title, ...rest }) => (
  <Container activeOpacity={0.8} {...rest}>
    <Label>{title}</Label>
  </Container>
)

export default Button
