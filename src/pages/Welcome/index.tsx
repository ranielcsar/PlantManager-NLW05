import React from 'react'
import Button from '../../components/Button'

import { Container, WelcomeImage, Title, Subtitle } from './styles'

import wateringImg from '../../assets/watering.png'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>Gerencie suas plantas de forma fácil</Title>
      <WelcomeImage source={wateringImg} />
      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Subtitle>

      <Button label={'>'} />
    </Container>
  )
}

export default Welcome
