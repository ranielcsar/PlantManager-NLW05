import styled from 'styled-components'
import { SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native'
import Text from '../../components/Text'
import colors from '../../../styles/colors'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 30px;
  background-color: ${colors.background};
`

export const Subheader = styled(View)`
  margin-top: 10px;
`

export const Title = styled(Text).attrs({ semibold: true })`
  font-size: 17px;
  line-height: 20px;
`

export const Subtitle = styled(Text)`
  font-size: 17px;
`

export const EnvironmentsContainer = styled(View)`
  width: 100%;
  margin-top: 30px;
`

export const Environments = styled(FlatList)``

export const PlantsContainer = styled(View)`
  flex: 1;
  width: 100%;
  margin-top: 30px;
`

export const Plants = styled(FlatList)``

export const LoadMore = styled(ActivityIndicator).attrs({
  color: colors.green,
})`
  margin: 10px 0;
`
