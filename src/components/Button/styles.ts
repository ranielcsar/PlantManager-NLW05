import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'
import colors from '../../../styles/colors'
import { Props } from './index'

export const Container = styled(TouchableOpacity)`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 20px;
  height: 56px;
  padding: 0 20px;
  width: 100%;
`

export const Label = styled(Text).attrs({
  semibold: true,
})`
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
`
