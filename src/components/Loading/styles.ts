import styled from 'styled-components'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import loadAnimation from '../../assets/load.json'

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Animation = styled(LottieView).attrs({
  source: loadAnimation,
  autoPlay: true,
  loop: true,
})`
  background: transparent;
  width: 200px;
  height: 200px;
`
