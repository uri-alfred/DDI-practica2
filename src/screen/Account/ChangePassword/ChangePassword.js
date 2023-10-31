﻿import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { userController } from '../../../api/users';
import Toast from 'react-native-root-toast';
import { globalStyle } from '../../../styles';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { styles } from './ChangePassword.styles';

export default function ChangePassword() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required(true).min(8, true),
      repeatPassword: Yup.string().required(true).min(8, true).oneOf([Yup.ref('password')], true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.actualizaUser(user.id, formData)

        navigation.goBack();
        Toast.show('Datos actualizados con exito.', {
          position: Toast.positions.CENTER
        })
      } catch (error) {
        // console.log(error)
        Toast.show('Datos incorrectos.', {
          position: Toast.positions.CENTER
        })
      }
    }
  });

  return (
    <View style={styles.container}>
      
      <IconButton
        icon={() => <Image source={require('../../../assets/btn-back.png')} />}
        size={40}
        style={styles.btnBack}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.form}>
        <TextInput
          label="Contraseña"
          style={globalStyle.form.input}
          secureTextEntry
          onChangeText={(text) => formik.setFieldValue('password', text)}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <TextInput
                label="Repetir contraseña"
                style={globalStyle.form.input}
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />
        <Button
          mode="contained"
          style={globalStyle.form.buttonSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Guardar
        </Button>
      </View>
    </View>
  )
}