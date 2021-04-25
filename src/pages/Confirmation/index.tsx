import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import Button from '../../components/Button'

import { Container, Content, Emoji, Title, Subtitle, Footer } from './styles'

type Params = {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const EMOJIS = {
  smile: '😁',
  hug: '🤗',
}

const Confirmation: React.FC = () => {
  const navigation = useNavigation()
  const routes = useRoute()

  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params

  const handleStart = () => navigation.navigate(nextScreen)

  return (
    <Container>
      <Content>
        <Emoji>{EMOJIS[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleStart} />
        </Footer>
      </Content>
    </Container>
  )
}

export default Confirmation
