/*

import React, {useEffect, useState} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import MenuItem from '../Helpers/MenuItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BackIcon = (props) => <Icon {...props} name="arrow-back"/>;

const BackAction = () => <TopNavigationAction icon={BackIcon}/>;

const MonCompteIcon = (props) => (
    <MaterialCommunityIcons name="home-account" color={'#b04e1d'} size={26}/>
);

const CommandesIcon = (props) => (
    <MaterialCommunityIcons name="pot-mix" color={'#b04e1d'} size={26}/>
);

const MenuIcon = (props) => (
    <MaterialCommunityIcons
        name="book-open-variant"
        color={'#b04e1d'}
        size={26}
    />
);

const PlatsIcon = (props) => (
    <MaterialCommunityIcons name="chef-hat" color={'#b04e1d'} size={26}/>
);
//endregion

//region Screens

state = {
    data: [useEffect],
};

const PlatsScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://192.168.1.48:8000/api/plats", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((response) => setData(response));
    }, []);
    return (
        <View style={styles.main_container}>
            <TopNavigation
                style={styles.topnavig}
                accessoryLeft={BackAction}
                title="Application Cousbeldi"
            />
            <ImageBackground
                source={require('../assets/wallpapertip_brown-paper-wallpaper_374990.jpg')}
                style={styles.header}>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://zupimages.net/up/21/08/i1sf.png'}}
                />
                <FlatList
                    data={data}
                    KeyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MenuItem menu={item}/>}
                />
            </ImageBackground>
        </View>
    );
};

export default PlatsScreen;
*/
