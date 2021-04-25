import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  PlantName,
  PlantPhoto,
  PlantDetails,
  Timelabel,
  Time,
  RemoveButtonContainer,
  RemoveButton,
} from './styles'
import colors from '../../../styles/colors'

export type Props = {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
} & RectButtonProps

const PlantCardSecondary: React.FC<Props> = ({ data, handleRemove, ...rest }) => {
  const { name, photo, hour } = data

  const Button = () => (
    <Animated.View>
      <RemoveButtonContainer>
        <RemoveButton onPress={handleRemove}>
          <Feather name="trash" size={32} color={colors.white} />
        </RemoveButton>
      </RemoveButtonContainer>
    </Animated.View>
  )

  return (
    <Swipeable overshootRight={false} renderRightActions={Button}>
      <Container {...rest}>
        <PlantPhoto uri={photo} />
        <PlantName>{name}</PlantName>

        <PlantDetails>
          <Timelabel>Regar às:</Timelabel>
          <Time>{hour}</Time>
        </PlantDetails>
      </Container>
    </Swipeable>
  )
}

export default PlantCardSecondary
