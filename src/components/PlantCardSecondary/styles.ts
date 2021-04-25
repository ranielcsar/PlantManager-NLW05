import styled from 'styled-components'
import Text from '../Text'
import { View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../../styles/colors'
import { SvgFromUri } from 'react-native-svg'

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin-bottom: 10px;
`

export const PlantName = styled(Text).attrs({ semibold: true })`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
`

export const PlantPhoto = styled(SvgFromUri).attrs({
  width: 70,
  height: 70,
})``

export const PlantDetails = styled(View)`
  align-items: flex-end;
`

export const Timelabel = styled(Text)`
  margin-top: 5px;
  font-size: 16px;
  color: ${colors.body_light};
`

export const Time = styled(Text).attrs({ semibold: true })`
  margin-top: 5px;
  font-size: 16px;
  color: ${colors.body_dark};
`
