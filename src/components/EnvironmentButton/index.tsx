import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from './styles'

export type Props = {
  title: string
  active?: boolean
} & RectButtonProps

const EnvironmentButton: React.FC<Props> = ({ title, active = false, ...rest }) => {
  return (
    <Container {...rest} {...{ active }}>
      <Title {...{ active }}>{title}</Title>
    </Container>
  )
}

export default EnvironmentButton
