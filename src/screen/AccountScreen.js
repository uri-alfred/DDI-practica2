import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Avatar.Image size={24} source={require('../assets/person1.jpeg')} />
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>

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
    flexDirection: 'row', // para separar por linea cada contenido del header
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    
   },
   mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

   },
   footer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'blue'
   }
})