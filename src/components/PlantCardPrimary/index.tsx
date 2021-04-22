import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, PlantName, PlantPhoto } from './styles'

export type Props = {
  data: {
    name: string
    photo: string
  }
} & RectButtonProps

const PlantCardPrimary: React.FC<Props> = ({ data, ...rest }) => {
  const { name, photo } = data

  return (
    <Container {...rest}>
      <PlantPhoto uri={photo} />
      <PlantName>{name}</PlantName>
    </Container>
  )
}

export default PlantCardPrimary
