import styled, { css } from 'styled-components'
import Text from '../Text'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import { Props } from './index'

export const Container = styled(RectButton)<Props>`
  background-color: ${(props: Props) => (props.active ? colors.green_light : colors.shape)};
  border-radius: 12px;
  width: 76px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`

const activeTitle = css`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
`

export const Title = styled(Text)<Props>`
  ${(props: Props) => props.active && activeTitle}
`
