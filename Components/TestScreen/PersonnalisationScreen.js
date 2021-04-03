import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, ImageBackground, Image, TouchableOpacity, Button, ActivityIndicator, FlatList,
} from 'react-native';

class PersonnalisationScreen extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>En cours de développement 👨‍💻</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default PersonnalisationScreen;
