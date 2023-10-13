import React from 'react'
import { IconButton } from 'react-native-paper';
import { addFavoritosApi } from '../../api/favorito';

export default function Favoritos(props) {
    const { id } = props;
    const addFavoritos = async () => {
        await addFavoritosApi(id)
    }
  return (
    <IconButton
        icon='heart'
        iconColor='red'
        size={50}
        onPress={addFavoritos}
      />
  )
}