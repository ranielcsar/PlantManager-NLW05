import styled from 'styled-components/native'
import { SafeAreaView, Text, Image } from 'react-native'
import colors from '../../../styles/colors'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  max-width: 200px;
`

export const WelcomeImage = styled(Image)``

export const Subtitle = styled(Text)`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`
