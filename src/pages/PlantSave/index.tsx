import React, { useState } from 'react'
import Button from '../../components/Button'

import { useNavigation, useRoute } from '@react-navigation/core'
import { Event } from '@react-native-community/datetimepicker'
import { Alert, Platform } from 'react-native'
import { format, isBefore } from 'date-fns'
import { PlantProps, savePlant } from '../../libs/storage'
import waterdrop from '../../assets/waterdrop.png'

import {
  Container,
  PlantInfos,
  PlantImage,
  PlantName,
  AboutPlant,
  Controllers,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DatePicker,
  ChangeDateText,
  ChangeDateButton,
} from './styles'

type Params = {
  plant: PlantProps
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const navigation = useNavigation()
  const route = useRoute()
  const { plant } = route.params as Params

  const handleDateChange = (_: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }

    if (dateTime) setSelectedDateTime(dateTime)
  }

  const handleOpenDatePickerForAndroid = () => {
    setShowDatePicker((oldState) => !oldState)
  }

  const handleSave = async () => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      })
    } catch {
      Alert.alert('Não foi possível salvar. 😢')
    }
  }

  return (
    <Container>
      <PlantInfos>
        <PlantImage uri={plant.photo} />
        <PlantName>{plant.name}</PlantName>
        <AboutPlant>{plant.about}</AboutPlant>
      </PlantInfos>

      <Controllers>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
        {showDatePicker && (
          <DatePicker
            value={selectedDateTime}
            mode="time"
            display="clock"
            onChange={handleDateChange}
          />
        )}

        {Platform.OS === 'android' && (
          <ChangeDateButton onPress={handleOpenDatePickerForAndroid}>
            <ChangeDateText>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</ChangeDateText>
          </ChangeDateButton>
        )}

        <Button title={'Cadastrar planta'} onPress={handleSave} />
      </Controllers>
    </Container>
  )
}

export default PlantSave
