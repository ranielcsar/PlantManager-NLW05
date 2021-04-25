import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

import { Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import {
  Container,
  Content,
  Emoji,
  Title,
  Form,
  Header,
  NameInput,
  Footer,
  KeyboardAvoiding,
} from './styles'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserIdentification: React.FC = () => {
  const navigation = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [username, setUsername] = useState<string>()

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!username)
  }

  const handleInputFocus = () => setIsFocused(true)

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setUsername(value)
  }

  const handleSubmit = async () => {
    if (!username) return Alert.alert('Me diz como eu devo te chamar. 😢')

    try {
      await AsyncStorage.setItem('@plantmanager:user', username)

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      })
    } catch (err) {
      Alert.alert('Não foi possível salvar seu nome. 😢')
    }
  }

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      if (user) {
        navigation.navigate('PlantSelect')
      }
    }

    getUser()
  }, [])

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😁' : '😀'}</Emoji>
                <Title>Como podemos {'\n'} chamar você?</Title>
              </Header>

              <NameInput
                {...{ isFocused }}
                {...{ isFilled }}
                placeholder={'Digite seu nome'}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <Footer>
                <Button title={'Confirmar'} onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  )
}

export default UserIdentification
