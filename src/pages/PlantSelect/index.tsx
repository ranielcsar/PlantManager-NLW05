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
import userImage from '../../assets/userImage.png'
import EnvironmentButton from '../../components/EnvironmentButton'
import api from '../../services/api'
import PlantCardPrimary from '../../components/PlantCardPrimary'
import Loading from '../../components/Loading'

type PlantEnvironment = {
  key: string
  title: string
}

type Plant = {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
    times: number
    repeat_every: string
  }
}

const PlantSelect: React.FC = () => {
  const [plantsEnvironments, setPlantsEnvironments] = useState<PlantEnvironment[]>([])
  const [plants, setPlants] = useState<Plant[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadedAll, setLoadedAll] = useState(false)

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment)

    if (environment === 'all') return setFilteredPlants(plants)

    const newFilteredPlants = plants.filter((plant) =>
      plant.environments.includes(environmentSelected),
    )

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
      <Header username={'Ranoob'} userPhoto={userImage} />

      <Subheader>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </Subheader>

      <EnvironmentsContainer>
        <Environments
          data={plantsEnvironments}
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
          renderItem={({ item }: any) => <PlantCardPrimary data={item} />}
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
