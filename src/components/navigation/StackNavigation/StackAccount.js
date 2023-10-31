import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountScreen from '../../../screen/Account/AccountScreen'
import ChangeName from '../../../screen/Account/ChangeName/ChangeName'
import ChangeEmail from '../../../screen/Account/ChangeEmail/ChangeEmail'
import ChangeUsername from '../../../screen/Account/ChangeUsername/ChangeUsername'
import ChangePassword from '../../../screen/Account/ChangePassword/ChangePassword'

export default function StackAccount() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    initialRouteName='AccountScreen'
    >
      <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ChangeName'
        component={ChangeName}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ChangeEmail'
        component={ChangeEmail}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ChangeUsername'
        component={ChangeUsername}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{
          headerShown: false
        }}
      />
      
    </Stack.Navigator>
  )
}