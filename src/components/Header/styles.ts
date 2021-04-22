import styled from 'styled-components'
import { View, Image } from 'react-native'
import Text from '../../components/Text'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../../../styles/colors'

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 10}px;
`

export const GreetingsContainer = styled(View)``

export const Greetings = styled(Text)`
  font-size: 32px;
  color: ${colors.heading};
`

export const Username = styled(Text).attrs({ semibold: true })`
  color: ${colors.heading};
  font-size: 32px;
  line-height: 37px;
`

export const UserPhoto = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 56px;
`
