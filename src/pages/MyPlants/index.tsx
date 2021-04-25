import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import waterdrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps, removePlant } from '../../libs/storage'
import { formatDistance } from 'date-fns/esm'
import { pt } from 'date-fns/locale'
import { Alert } from 'react-native'

import Loading from '../../components/Loading'
import PlantCardSecondary from '../../components/PlantCardSecondary'

import {
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  PlantsContainer,
  PlantsTitle,
  Plants,
} from './styles'

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  const handleRemovePlant = (plant: PlantProps) => {
    Alert.alert('Remover', `Deseja mesmo remover a planta ${plant.name}?`, [
      {
        text: 'Não remover 🙏',
        style: 'cancel',
      },
      {
        text: 'Remover 😢',
        onPress: async () => {
          try {
            await removePlant(plant.id)

            setMyPlants((oldState) => oldState.filter((item) => item.id !== plant.id))
          } catch (err) {
            Alert.alert('Não foi possível remover. 😢')
          }
        },
      },
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedPlants = await loadPlant()

      const nextTime = formatDistance(
        new Date(storagedPlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt },
      )

      setNextWatered(`Não esqueça de regar a ${storagedPlants[0].name} daqui a ${nextTime}.`)

      setMyPlants(storagedPlants)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  if (loading) return <Loading />

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdrop} />
        <SpotlightText>{nextWatered}</SpotlightText>
      </Spotlight>

      <PlantsContainer>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <Plants
          data={myPlants}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <PlantCardSecondary handleRemove={() => handleRemovePlant(item)} data={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </PlantsContainer>
    </Container>
  )
}

export default MyPlants
