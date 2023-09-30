import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import ButtonSocial from '../../components/ButtonSocial';
import Colors from '../../components/constants/Colors';
import LoginForm from '../../components/auth/login/LoginForm';
import Register from '../../components/auth/register/Register';
import { styles } from './AuthScreen_styles';

export default function AuthScreen() {
  const [showLogin, setShowLogin] = useState(false);
  const imageSource = require('../../assets/logo.jpg');

  const showLoginRegister = () => {
    setShowLogin(prevState => !prevState);
  }

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"}>
        {showLogin ? <LoginForm showRegister={showLoginRegister} /> : <Register showLogin={showLoginRegister} />}
      </KeyboardAvoidingView>


      {/* 
      <Text> {'\n'} </Text>
      <Text style={styles.title}>AuthScreen</Text>
      <Text> {'\n'} </Text>
      <View style={styles.contentButton}>
        <ButtonSocial title="Iniciar sesión con Facebook" imageType="facebook" color={Colors.facebookColor} />
        <ButtonSocial title="Iniciar sesión con Google" imageType="google" color={Colors.googleColor} />
        <ButtonSocial title="Iniciar sesión con Twitter" imageType="twitter" color={Colors.twitterColor} />
      </View> */}
    </View>
  )
}

