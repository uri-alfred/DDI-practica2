import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from './CharacterDetail.styles';
import { Avatar, IconButton } from 'react-native-paper';
import Favoritos from '../../components/Favoritos/Favoritos';
import TableDetails from '../../components/TableDetails/TableDetails';

export default function CharacterDetail(props) {
  const { navigation, route: { params } } = props;
  // console.log(params.id, params.name)

  return (
    <ImageBackground
      source={require('../../assets/background-img.jpg')}
      style={styles.backgroundImage}
    >

<IconButton
    icon={() => <Image source={require('../../assets/btn-back.png')} />}
    size={40}
    style={styles.btnBack}
    onPress={() => navigation.goBack()}
  />
      <View style={styles.container}>
      <Avatar.Image size={250} source={{ uri: params.image }} style={styles.image} />
      <View style={styles.containerFav}>
        <Text style={styles.title}> {params.name}</Text>
        <Favoritos id={params.id} />
      </View>
      </View>

      <TableDetails params={params} />
    </ImageBackground>
  )
}