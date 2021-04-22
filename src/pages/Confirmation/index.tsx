import { useNavigation } from '@react-navigation/core'
import React from 'react'
import Button from '../../components/Button'

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles'

const Confirmation: React.FC = () => {
  const navigation = useNavigation()

  const handleStart = () => navigation.navigate('PlantSelect')

  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Subtitle>

        <Footer>
          <Button title={'Começar'} onPress={handleStart} />
        </Footer>
      </Content>
    </Container>
  )
}

export default Confirmation
