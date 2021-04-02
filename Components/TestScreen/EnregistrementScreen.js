import React from 'react'
import {
    View,
    Button,
    TextInput,
    StyleSheet, Image, ImageBackground,
} from 'react-native';

class EnregistrementScreen extends React.Component {


    state = {
        identifiant: '', password: '', email: '', phone_number: '', adresse: ''
    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    signUp = async () => {
        const { username, password, email, phone_number, adresse } = this.state
        try {
            // here place your signup logic
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

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
                <View style={styles.main}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Identifiant'
                    autoCapitalize="none"
                    placeholderTextColor='#003f5c'
                    onChangeText={val => this.onChangeText('identifiant', val)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#003f5c'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='#003f5c'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Telephone'
                    autoCapitalize="none"
                    placeholderTextColor='#003f5c'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Adresse'
                    autoCapitalize="none"
                    placeholderTextColor='#003f5c'
                    onChangeText={val => this.onChangeText('adresse', val)}
                />
                    <View style={styles.button}>
                <Button
                    color='#b04e1d'
                    title="S'enregistrer"
                    onPress={() =>
                        this.props.navigation.navigate('Login')
                    }
                    //onPress={this.signUp}
                />
                    </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#E87E15',
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    button: {
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 120,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        top: 20,
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
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
    },
    logo: {
            left: 138,
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 50,
            width: 140,
            height: 90,
    },
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});


export default EnregistrementScreen;
