//region import
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet, ImageBackground, Image, TouchableOpacity, Button, ActivityIndicator, FlatList,
} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import {Font} from 'expo'
import {loadAsync} from 'expo-font';
//endregion

// Le problème rencontré actuellement avec cette vue est lorsque nous allons cliqué sur l'image d'un plat cette vue va nous afficher
// tous les détails des plats, mais nous ne voulons pas cela, nous souhaitons affiché uniquement le détail du plat en question mais pas tous les
// détails de tous les plats. Nous n'avons pas eu le temps d'y remédié.

class DetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
        };
    }

    componentDidMount() {
        fetch('http://192.168.1.48:8000/api/plats')
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson,
                });
            })
            .catch(error => console.log(error)); //to catch the errors if any
    }


    FlatListItemSeparator = () => {
        return (
            <View style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                marginBottom: 1200,

            }}
            />
        );
    };

    //Même fonctionnement que pour la vue PlatsScreen sauf que nous appellons différentes données.
    renderItem = (data) =>
        <View style={styles.main_container1}>
                <View style={styles.content_container}>
                    <View style={styles.text_detail}>
                        <Text style={styles.title_text1}>{data.item.Nom}™</Text>
                    </View>
                    <Image style={styles.image} source={{uri: data.item.img_path}}/>
                    <View style={styles.description_container}>
                        <Text style={styles.histoire_text}>Histoire</Text>
                        <Text style={styles.description_text} numberOfLines={15}>
                            {data.item.histoire}
                        </Text>
                    </View>
                    <View style={styles.text_detail}>
                        <Text style={styles.title_text2}>Ingrédients</Text>
                        <Text style={styles.ingredients_text}>
                            {data.item.ingredients}
                        </Text>
                    </View>
                    <View style={styles.text_detail1}>
                        <Text style={styles.prix_titre}>Prix</Text>
                        <Text style={styles.prix_text}>
                            {data.item.prix}€
                        </Text>
                    </View>
                </View>
        </View>;

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            );
        }

        return (
            <View style={styles.main_container}>
                <ImageBackground
                    source={require('../../assets/istockphoto-582283768-170667a.jpg')}
                    style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={{uri: 'https://zupimages.net/up/21/08/i1sf.png'}}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={item => this.renderItem(item)}
                        keyExtractor={item => item.id.toString()} />
                        <Button
                            color='#b04e1d'
                            title="Voulez-vous commander ce plat ?️"
                            onPress={() =>
                                this.props.navigation.navigate('CommandeStack')
                            }
                        />
                </ImageBackground>
            </View>
        );
    }
}

//region Style pour la vue DétailScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 0,
        backgroundColor: 'white',
    },
    Boutton: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text_detail: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
    },
    text_detail1: {
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
    },
    histoire_text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        color: '#b04e1d',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
    prix_text: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        top: 680,
        fontSize: 20,
        marginTop: 10,
    },

    prix_titre: {
        fontWeight: 'bold',
        fontSize: 20,
        top: 670,
        color: '#b04e1d',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },

    title_text2: {
        fontWeight: 'bold',
        marginTop: 1030,
        fontSize: 20,
        color: '#b04e1d',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
    title_text3: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        paddingLeft: 250,
    },
    ingredients_text: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 15,
        lineHeight: 25,
    },
    main_container1: {
        height: 190,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
    },
    title_text1: {
        fontWeight: 'bold',
        fontSize: 30,
        flexWrap: 'wrap',
        paddingRight: 5,
        textAlign: 'center',
        marginTop: 20,
    },
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 130,
        left: 85,
        margin: 6,
        marginTop: 65,
        marginBottom: 50,
        backgroundColor: 'gray',
    },
    content_container: {
        flex: 1,
        margin: 5,
    },
    header_container: {
        flex: 3,
        flexDirection: 'row',
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#7c3c16',
    },
    description_container: {
        flex: 1,
        top: -40,
        alignItems: 'center',
    },
    description_text: {
        fontStyle: 'normal',
        color: '#000',
        margin: 25,
        marginTop: 20,
        justifyContent: 'center',
        lineHeight: 25,
        alignItems: 'center',
    },
    date_container: {
        flex: 1,
    },
    date_text: {
        textAlign: 'right',
        fontSize: 13,
        marginBottom: 50,
    },
    logo: {
        left: 160,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 5,
        width: 85,
        height: 90,
    },
});
//endregion

export default DetailScreen;
