import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

export default function AccountScreen() {
  const { logout, user } = useAuth();
  console.log('Datos del usuario:', user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={200} source={require('../assets/person1.jpeg')} />
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.username}>Nombre: {user.username}</Text>
          <Text style={styles.email}>Correo Electrónico: {user.email}</Text>
          <Button
            mode='contained'
            onPress={logout}
            style={styles.button}
          >
            Cerrar sesión
          </Button>
        </View>
      </ScrollView>
      <View style={styles.footer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo el espacio disponible

  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40

  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginHorizontal: 20
  },
  username: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    marginBottom: 20
  },
  footer: {
    flexDirection: 'row',
    padding: 10,
    // backgroundColor: 'blue'
  }
})