import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './Card.style';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function CardRM(props) {
  const { characters } = props;
  const navigation = useNavigation();

  const goToPersonaje = () => {
    navigation.navigate('Detail', {
      id: characters.id,
      name: characters.name,
      status: characters.status,
      species: characters.species,
      type: characters.type,
      image: characters.image,
      gender: characters.gender,
      origin: characters.origin.name,
    })

  }
  return (
    <TouchableOpacity onPress={goToPersonaje} style={styles.container}>
      <Card.Title
        title={characters.name}
        subtitle={characters.species}
        style={styles.card}
        titleStyle={{ marginLeft: 50, color: '#fff', fontSize: 20, fontWeight: 'bold' }}
        subtitleStyle={{ marginLeft: 50, color: '#fff' }}
        left={(props) => <Avatar.Image source={{ uri: characters.image }} style={styles.avatarImg} />}
        right={(props) => <Text style={{ marginRight: 16, fontSize: 16, color: '#79B547', fontWeight: 'bold' }}>
          #{`${characters.id}`.padStart(3, '0')}
        </Text>}
      />
    </TouchableOpacity>
  )
}
