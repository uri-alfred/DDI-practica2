import { View, Text, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import CardRM from '../../components/card/CardRM';
import { styles } from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(props) {
  const { characters } = props;
  // console.log('Characters', characters)
  return (
    <ImageBackground
    source={require('../../assets/background-img.jpg')}
    style={styles.backgroundImage}
    >
      <Text style={styles.titulo}>Personajes</Text>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({ item }) => <CardRM characters={item} />}
      />
    </ImageBackground>
  )
}

