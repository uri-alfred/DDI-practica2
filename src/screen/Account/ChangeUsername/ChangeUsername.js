﻿import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { userController } from '../../../api/users';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { globalStyle } from '../../../styles';
import { styles } from './ChangeUsername.styles';
import Toast from 'react-native-root-toast';

export default function ChangeUsername() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      username: user.username
    },
    validationSchema: Yup.object({
      username: Yup.string().required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
        try {
            await userController.actualizaUser(user.id, formData)
            upDateUser('username', formData.username)
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
                label="Nombre de usuario"
                style={globalStyle.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
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