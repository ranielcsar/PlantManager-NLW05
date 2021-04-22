import React from 'react'
import { ImageSourcePropType } from 'react-native'

import { Container, Greetings, GreetingsContainer, Username, UserPhoto } from './styles'

interface Props {
  username: string
  userPhoto: ImageSourcePropType
}

const Header: React.FC<Props> = ({ username, userPhoto }) => {
  return (
    <Container>
      <GreetingsContainer>
        <Greetings>Olá,</Greetings>
        <Username>{username}</Username>
      </GreetingsContainer>

      <UserPhoto source={userPhoto} />
    </Container>
  )
}

export default Header
