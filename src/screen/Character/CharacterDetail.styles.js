import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFav:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    image: {
        marginBottom: 20,
        marginTop: 90
    },
    title: {
        color: '#79B547',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btnBack: {
        marginTop: 60,
        marginLeft: 15,
        backgroundColor: '#79B547'
    }

});