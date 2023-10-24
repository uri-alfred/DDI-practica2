﻿import React, { useCallback, useEffect, useState } from 'react'
import { getFavoriteApi } from '../api/favorito'
import HomeScreen from './Home/HomeScreen'
import axios from 'axios'
import { ENV } from '../utils/constants'
import { useFocusEffect } from '@react-navigation/native'

export default function FavoritesScreen() {
  const [characters, setCharacters] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const fetchCharacters = async (url) => {
    if (characters.length > 200) {
      return;
    }
    try {
      const response = await axios.get(url);
      const newCharacters = response.data.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      
      if (response.data.info.next) {
        fetchCharacters(response.data.info.next);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(ENV.API_URL_RM);
  }, []);

  useFocusEffect(
    useCallback(() => {
      (async  () => {
        const pjFavoritos = await getFavoriteApi();
        setFavoritos(pjFavoritos);
      })()
    }, [])
  )  

  return (
    <HomeScreen characters={characters.filter((char) => favoritos.includes(char.id))} />
  )
}