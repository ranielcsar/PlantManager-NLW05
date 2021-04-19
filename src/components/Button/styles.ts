import styled from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../../../styles/colors'

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  width: 56px;
  height: 56px;
`

export const Label = styled(Text)`
  text-align: center;
  font-size: 24px;
  color: ${colors.white};
`
