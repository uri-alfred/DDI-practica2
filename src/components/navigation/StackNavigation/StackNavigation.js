import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RickAndMortyApi from '../../../api/rm'
import CharacterDetail from '../../../screen/Character/CharacterDetail'
import { Image } from 'react-native'

export default function StackNavigation() {
  const Stack = createNativeStackNavigator()
    return (
    <Stack.Navigator
    initialRouteName='RickAndMortyApi'
    >
        <Stack.Screen 
        name='RickAndMortyApi'
        component={RickAndMortyApi}
        options={{
            title: '',
            headerTransparent: true
        }}
        />
        <Stack.Screen 
        name='Detail'
        component={CharacterDetail}
        options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            // headerBackImage: () => (
            //   <Image source={require('../../../assets/logo-button.png')} style={{ width: 50, height: 50}} />
            //   ),
            // headerLeftContainerStyle: {
              
            // }
        }}
        />
    </Stack.Navigator>
  )
}