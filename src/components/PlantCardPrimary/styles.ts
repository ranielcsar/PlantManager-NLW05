import styled from 'styled-components'
import Text from '../Text'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../../styles/colors'
import { SvgFromUri } from 'react-native-svg'

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  height: 150px;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const PlantName = styled(Text).attrs({ semibold: true })`
  color: ${colors.green_dark};
  margin: 16px 0;
`

export const PlantPhoto = styled(SvgFromUri).attrs({
  width: 70,
  height: 70,
})``
