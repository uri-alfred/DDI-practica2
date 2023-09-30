﻿import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Fonts from './constants/Fonts';

export default function ButtonSocial(props) {

    const { title, imageType, color } = props;
    // console.log(color);

    let imageSource;
    if (imageType === 'facebook') {
        imageSource = require('../assets/facebook.png');
    } else if (imageType === 'google') {
        imageSource = require('../assets/google.png');
    } else {
        imageSource = require('../assets/twitter.png');
    }
    const buttonStyle = {
        backgroundColor: color,
    }
    return (
        <TouchableOpacity style={[styles.contentButton, buttonStyle]}>
            <View>
                <Image source={imageSource} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contentButton: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        // width: "100%",
        borderRadius: 30,
        height: 55,
        padding: 15,
        marginVertical: 10,
    },
    image: {
        marginLeft: 15
    },
    title: {
        paddingLeft: 30,
        color: "#FFF",
        fontFamily: Fonts.family.regular,
        fontSize: Fonts.size.medium,
    }
});