import styled from 'styled-components'
import { Text } from 'react-native'
import fonts from '../../../styles/fonts'
import colors from '../../../styles/colors'
import { Props } from './index'

export const Container = styled(Text)<Props>`
  font-family: ${({ semibold }) => (semibold ? fonts.heading : fonts.text)};
  color: ${colors.heading};
`
