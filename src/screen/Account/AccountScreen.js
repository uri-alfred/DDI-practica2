import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';

import Menu from '../../components/Menu/Menu';
import { userController } from '../../api/users';
import { getFavoriteApi } from '../../api/favorito';

export default function AccountScreen() {
  const { logout, user, upDateUser } = useAuth();
  console.log('Datos del usuario:', user);

  const logoutAlert  = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Cerrar sesión",
          onPress: async () => {
            const pjFavoritos = await getFavoriteApi();
            console.log("Favoritos",pjFavoritos)
            await upDateUser('favoritos', pjFavoritos) 
            await userController.actualizaUser(user.id, user)
            logout()
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Avatar.Image size={200} source={require('../assets/person1.jpeg')} />
      </View> */}
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.name}>{
            user.firstname && user.lastname
              ? `${user.firstname} ${user.lastname}`
              : user.email
          }</Text>

          <Menu />

          <Button
            mode='contained'
            onPress={logoutAlert}
            style={styles.button}
          >
            Cerrar sesión
          </Button>
        </View>
      </ScrollView>
      {/* <View style={styles.footer}>

      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo el espacio disponible
    backgroundColor: "#000"
  },
  title: {
    color: "#79B547",
    fontSize: 40,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 40,
    marginHorizontal: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#79B547",
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
})