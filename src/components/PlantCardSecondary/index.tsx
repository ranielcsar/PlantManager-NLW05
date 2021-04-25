import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, PlantName, PlantPhoto, PlantDetails, Timelabel, Time } from './styles'

export type Props = {
  data: {
    name: string
    photo: string
    hour: string
  }
} & RectButtonProps

const PlantCardSecondary: React.FC<Props> = ({ data, ...rest }) => {
  const { name, photo, hour } = data

  return (
    <Container {...rest}>
      <PlantPhoto uri={photo} />
      <PlantName>{name}</PlantName>

      <PlantDetails>
        <Timelabel>Regar às:</Timelabel>
        <Time>{hour}</Time>
      </PlantDetails>
    </Container>
  )
}

export default PlantCardSecondary
