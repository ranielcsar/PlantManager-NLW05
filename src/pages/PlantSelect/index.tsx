import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

import {
  Container,
  Subheader,
  Title,
  Subtitle,
  EnvironmentsContainer,
  Environments,
  PlantsContainer,
  Plants,
  LoadMore,
} from './styles'
import EnvironmentButton from '../../components/EnvironmentButton'
import api from '../../services/api'
import PlantCardPrimary from '../../components/PlantCardPrimary'
import Loading from '../../components/Loading'
import { useNavigation } from '@react-navigation/core'
import { PlantProps } from '../../libs/storage'

type PlantEnvironment = {
  key: string
  title: string
}

const PlantSelect: React.FC = () => {
  const [plantsEnvironments, setPlantsEnvironments] = useState<PlantEnvironment[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment)

    if (environment === 'all') return setFilteredPlants(plants)

    const newFilteredPlants = plants.filter((plant) => plant.environments.includes(environment))

    setFilteredPlants(newFilteredPlants)
  }

  const fetchPlants = async () => {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

    if (!data) return setLoading(true)

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data])
      setFilteredPlants((oldValue) => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadingMore(false)
  }

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return

    setLoadingMore(true)
    setPage((oldValue) => oldValue + 1)
    fetchPlants()
  }

  const handlePlantSelected = (plant: PlantProps) => {
    navigation.navigate('PlantSave', { plant })
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc')

      setPlantsEnvironments([{ key: 'all', title: 'Todos' }, ...data])
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    fetchPlants()
  }, [])

  if (loading) return <Loading />

  return (
    <Container>
      <Header />

      <Subheader>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </Subheader>

      <EnvironmentsContainer>
        <Environments
          data={plantsEnvironments}
          keyExtractor={(item: any) => String(item.key)}
          renderItem={({ item }: any) => (
            <EnvironmentButton
              onPress={() => handleEnvironmentSelected(item.key)}
              active={item.key === environmentSelected}
              title={item.title}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </EnvironmentsContainer>

      <PlantsContainer>
        <Plants
          data={filteredPlants}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <PlantCardPrimary onPress={() => handlePlantSelected(item)} data={item} />
          )}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={loadingMore ? <LoadMore /> : <></>}
        />
      </PlantsContainer>
    </Container>
  )
}

export default PlantSelect
