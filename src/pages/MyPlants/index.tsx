import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import waterdrop from '../../assets/waterdrop.png'
import { loadPlant, PlantProps } from '../../libs/storage'
import { formatDistance } from 'date-fns/esm'
import { pt } from 'date-fns/locale'

import {
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  PlantsContainer,
  PlantsTitle,
  Plants,
} from './styles'
import Loading from '../../components/Loading'
import PlantCardSecondary from '../../components/PlantCardSecondary'

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

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
          renderItem={({ item }: any) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </PlantsContainer>
    </Container>
  )
}

export default MyPlants
