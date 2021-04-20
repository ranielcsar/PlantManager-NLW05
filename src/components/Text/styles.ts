import styled from 'styled-components'
import { Text } from 'react-native'
import fonts from '../../../styles/fonts'
import { Props } from './index'

export const Container = styled(Text)<Props>`
  font-family: ${({ heading }) => (heading ? fonts.heading : fonts.text)};
`
