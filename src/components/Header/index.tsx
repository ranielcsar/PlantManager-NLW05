import React, { useState, useEffect } from 'react'
import { ImageSourcePropType } from 'react-native'

import { Container, Greetings, GreetingsContainer, Username, UserPhoto } from './styles'
import userImage from '../../assets/userImage.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Header: React.FC = () => {
  const [username, setUsername] = useState<string>()

  useEffect(() => {
    async function getUsername() {
      const username = await AsyncStorage.getItem('@plantmanager:user')

      setUsername(username || '')
    }

    getUsername()
  }, [username])

  return (
    <Container>
      <GreetingsContainer>
        <Greetings>Olá,</Greetings>
        <Username>{username}</Username>
      </GreetingsContainer>

      <UserPhoto source={userImage} />
    </Container>
  )
}

export default Header
