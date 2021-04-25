import styled from 'styled-components'
import { View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import Text from '../../components/Text'
import colors from '../../../styles/colors'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import DateTimePicker from '@react-native-community/datetimepicker'

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
})``

/* PLANT */
export const PlantInfos = styled(View)`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`

export const PlantImage = styled(SvgFromUri).attrs({
  width: 150,
  height: 150,
})``

export const PlantName = styled(Text).attrs({ semibold: true })`
  font-size: 24px;
  margin-top: 15px;
`

export const AboutPlant = styled(Text)`
  text-align: center;
  font-size: 17px;
  margin-top: 10px;
`

/* CONTROLLERS */

export const Controllers = styled(View)`
  background-color: ${colors.white};
  padding: 20px 20px ${getBottomSpace() || 20}px;
`

export const TipContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`

export const TipImage = styled(Image)`
  width: 56px;
  height: 56px;
`

export const TipText = styled(Text)`
  flex: 1;
  margin-left: 20px;
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`

export const AlertLabel = styled(Text)`
  text-align: center;
  font-size: 13px;
  margin-bottom: 5px;
`

export const DatePicker = styled(DateTimePicker)``

export const BackButton = styled(TouchableOpacity)``

export const ChangeDateButton = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`

export const ChangeDateText = styled(Text)`
  font-size: 24px;
`
