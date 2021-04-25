import styled from 'styled-components'
import { View, Image, FlatList } from 'react-native'
import Text from '../../components/Text'
import colors from '../../../styles/colors'

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0;
  background-color: ${colors.background};
`

export const Spotlight = styled(View)`
  background-color: ${colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SpotlightImage = styled(Image)`
  width: 60px;
  height: 60px;
`

export const SpotlightText = styled(Text)`
  flex: 1;
  padding: 0 20px;
  color: ${colors.blue};
`

export const PlantsContainer = styled(View)`
  flex: 1;
  width: 100%;
`

export const PlantsTitle = styled(Text).attrs({ semibold: true })`
  font-size: 24px;
  margin: 20px 0;
`

export const Plants = styled(FlatList)``
