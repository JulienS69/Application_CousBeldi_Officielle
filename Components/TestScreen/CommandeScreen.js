import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class CommandeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>En cours de développement 👨‍💻👨‍💻</Text>
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

export default CommandeScreen;
