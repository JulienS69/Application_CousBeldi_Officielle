//region Import
import React from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
//endregion


class MenuScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://zupimages.net/up/21/08/i1sf.png'}}
                />
                <Button
                    title="Se connecter"
                    onPress={() =>
                        this.props.navigation.navigate('Plats')
                    }
                />
            </View>
        );
    }
}

//region Style pour la vue MenuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        left: 150,
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

export default MenuScreen;
