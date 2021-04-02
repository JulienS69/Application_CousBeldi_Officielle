//region Import
import React, {useEffect, useState} from 'react';
import {
    StyleSheet, View, ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity, Image, ImageBackground, Button,
} from 'react-native';
//endregion


export default class PlatsScreen extends React.Component {


 //region Constructeur
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
        };
    }
    //endregion


    //region ComponentDidMount permettant l'intérrogation de l'API grâce au fetch
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
    //endregion

    //region FlatListItemSeparator (Celui-ci permet de mettre du style entre les différentes données prises comme par exemple entre chaques plats)
    FlatListItemSeparator = () => {
        return (
            <View style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            />
        );
    };
    //endregion


    //region Récupération des données de la table plats stocké dans une variable "data" et appelé ensuite dans une flatlist. Exemple data.item.Nom va permettre de récupérer le Nom du plat.
    renderItem = (data) =>
        <TouchableOpacity>
            <View style={styles.main_container1}>
                <View style={styles.header_container}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Detail');
                        }}>
                        <Image style={styles.image} source={{uri: data.item.img_path}}/>
                    </TouchableOpacity>
                    <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{data.item.Nom}</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text} numberOfLines={8}>
                                {data.item.description}
                            </Text>
                        </View>
                        <View style={styles.Boutton}>
                            <Button
                                color='#b04e1d'
                                title="Commander  ✔️"
                                onPress={() =>
                                    this.props.navigation.navigate('CommandeStack')
                                }
                            />
                        </View>
                        <Button
                            color='#b04e1d'
                            title=" Personnaliser votre plat  ✏️"
                            onPress={() =>
                                this.props.navigation.navigate('PersonnalisationStack')
                            }
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>;
    //endregion

    // ActivityIndicator permettant d'avoir un mini chargement en attendant que les données puissent chargés
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            );
        }

        // Retourne les éléments de la vue (L'appel de la variable "data" ou sont stockés les données appelées précédement est appelé dans la FlatList)

        return (
            <View style={styles.main_container}>
                <ImageBackground
                    source={require('../../assets/wallpapertip_brown-paper-wallpaper_374990.jpg')}
                    style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={{uri: 'https://zupimages.net/up/21/08/i1sf.png'}}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={item => this.renderItem(item)}
                        keyExtractor={item => item.id.toString()}
                    />
                </ImageBackground>
            </View>
        );
    }
}

//region Style pour la vue PlatsScreen
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 0,
        backgroundColor: 'white',
    },
    Boutton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },

    main_container1: {
        height: 190,
        flexDirection: 'row',
        marginBottom: 20,
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
        width: 120,
        height: 180,
        margin: 6,
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
        fontStyle: 'italic',
        color: '#666666',
        marginBottom: 10,
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
        marginBottom: 20,
        width: 85,
        height: 90,
    },
});
//endregion

