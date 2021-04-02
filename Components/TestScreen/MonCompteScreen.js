//region Import
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
//endregion

class MonCompteScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>En cours de développement 👨‍💻👨‍💻👨‍💻</Text>
            </View>
        );
    }
}

//region Style pour la vue MonCompteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//endregion

export default MonCompteScreen;
