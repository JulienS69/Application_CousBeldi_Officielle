import React from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';

class ConnexionScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/wallpapertip_brown-paper-wallpaper_374990.jpg')}
                    style={styles.header}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://zupimages.net/up/21/08/i1sf.png'}}
                />
                <View>
                <Button
                    color='#b04e1d'
                    title="Bienvenue chez Coubeldi"
                    onPress={() =>
                        this.props.navigation.navigate('Login')
                    }
                />
                </View>
                </ImageBackground>
            </View>
        );
    }
}

//region Style pour la vue ConnexionScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        marginBottom: 20,
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        left: 160,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80,
        marginBottom: 90,
        width: 85,
        height: 90,
    },
});
//endregion

export default ConnexionScreen;
