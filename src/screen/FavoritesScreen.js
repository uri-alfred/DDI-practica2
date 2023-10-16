import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { getFavoriteApi } from '../api/favorito'
import { Button } from 'react-native-paper'
import { globalStyle } from '../styles'
import HomeScreen from './Home/HomeScreen'
import axios from 'axios'
import { ENV } from '../utils/constants'
import { useFocusEffect } from '@react-navigation/native'

export default function FavoritesScreen() {
  const [characters, setCharacters] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async  () => {
        const pjFavoritos = await getFavoriteApi()
        setFavoritos(pjFavoritos)
        try {
          const response = await axios.get(ENV.API_URL_RM);
          
          setCharacters(response.data.results)
    
        } catch (error) {
          console.log(error)
        }
      })()
    }, [])
  )  

  return (
    <HomeScreen characters={characters.filter((char) => favoritos.includes(char.id))} />
  )
}