import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, ImageBackground,
} from 'react-native';


class LoginScreen extends React.Component {

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
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Mot de passe"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <Button
                            color='#b04e1d'
                            title="Se connecter"
                            onPress={() =>
                                this.props.navigation.navigate('Plats')
                            }
                        />
                    </View>
                    <View>
                        <Button
                            color='#b04e1d'
                            title="S'enregistrer"
                            onPress={() =>
                                this.props.navigation.navigate('Enregistrement')
                            }
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    button: {
        justifyContent: 'center',
        marginBottom: 20,
    },

    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    logo: {
        left: 138,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 140,
        height: 90,
    },

    /*
    left: 150,
    marginTop: -80,
    marginBottom: 90,
    width: 85,
    height: 90,*/

    inputView: {
        backgroundColor: '#fff',
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },

    TextInput: {
        width: 350,
        left: 20,
        height: 55,
        backgroundColor: '#fff',
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        justifyContent: 'center',
        textAlign: 'center',
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#fff',
    },
});
export default LoginScreen;
