import React from 'react'
import { TextProps } from 'react-native'

import { Container } from './styles'

export interface Props extends TextProps {
  semibold?: boolean
}

const Text: React.FC<Props> = ({ semibold, children, ...rest }) => (
  <Container {...{ semibold }} {...rest}>
    {children}
  </Container>
)

export default Text
