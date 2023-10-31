﻿import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, IconButton, TextInput } from 'react-native-paper'
import { globalStyle } from '../../../styles'
import { userController } from '../../../api/users';
import { useAuth } from '../../../hooks/useAuth';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ChangeName.styles';

export default function ChangeName() {

  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      firstname: user.firstname || '',
      lastname: user.lastname || ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(true),
      lastname: Yup.string().required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
        try {
            await userController.actualizaUser(user.id, formData)
            upDateUser('firstname', formData.firstname)
            upDateUser('lastname', formData.lastname)
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
                label="Nombre(s)"
                style={globalStyle.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('firstname', text)}
                value={formik.values.firstname}
                error={formik.errors.firstname}
            />
            <TextInput
                label="Apellidos"
                style={globalStyle.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('lastname', text)}
                value={formik.values.lastname}
                error={formik.errors.lastname}
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