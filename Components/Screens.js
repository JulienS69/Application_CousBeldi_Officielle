//region Imports
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    BottomNavigation,
    BottomNavigationTab,
    Layout,
    Text,
} from '@ui-kitten/components';
import {
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    View,
    ImageBackground,
} from 'react-native';
import menus from '../Helpers/MenuData';
import MenuItem from '../Helpers/MenuItem';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
    Button,
} from '@ui-kitten/components';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//endregion

//region Icon appelés via la librairie MaterialCommunityIcons
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



/*
fetchData = async () => {
    const response = await fetch('http://192.168.1.48:8000/api/plats');
    const json = await response.json();
    this.setState({data: json.results});
};
*/

const MenuScreen = () => {
    /*
    const [menu, setMenu] = useState(null);
    const [first, setFirst] = useState(true);
    useEffect(() => {
        if (first) {
            setFirst(false);
            fetch('http://192.168.1.48:8000/api/plats', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(json => console.log(json))
        }
    });
*/
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
                    renderItem={({item}) => <MenuItem menu={item} /> }
                />
            </ImageBackground>
        </View>
    );
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

const MoncompteScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Mon compte</Text>
    </Layout>
);

const MesCommandesScreen = () => (
    <Layout style={styles.mescommandes}>
        <Text category="h2">Vous n'avez passé aucunes commandes</Text>
    </Layout>
);


//endregion

//region BottomTabBar (Bare de navigation du bas de l'application)

// Constante permettant de crée la BottomTabBar, en incluant les icons récupérés sur https://materialdesignicons.com/ .

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={MenuIcon} title="Menu"/>
        <BottomNavigationTab icon={PlatsIcon} title="Plats"/>
        <BottomNavigationTab icon={CommandesIcon} title="Commandes"/>
        <BottomNavigationTab icon={MonCompteIcon} title="Mon Compte"/>
    </BottomNavigation>
);

//endregion

//region TabNavigator (Permet la navigation d'un screen à un autre)

// Constante permettant d'afficher les différents screens en appellant
// différentes constante crées juste au-dessus (MenuScreen, PlatsScreen, MesCommandes, Moncompte)
const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen name="Menu" component={MenuScreen}/>
        <Screen name="Plats" component={PlatsScreen}/>
        <Screen name="Mon Compte" component={MesCommandesScreen}/>
        <Screen name="Mes Commandes" component={MoncompteScreen}/>
    </Navigator>
);
//endregion

//region AppNavigator (Appelé dans l'App.js pour pouvoir affiché notre component Screen.js
// Constante permettant d'appeler notre component dans l'App.js

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);
//endregion

//region StyleSheet de l'application
// Style de l'application (Screens et NavBar)

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 60,
        backgroundColor: 'white',
    },
    zd: {
        borderColor: '#f5cc7f',
        marginTop: 50,
    },
    topnavig: {
        marginTop: -10,
        backgroundColor: 'white',
    },
    backgroundImage: {
        width: 26,
        height: 26,
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
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
    BottomNavigationTab: {
        backgroundColor: '#f5cc7f',
    },

    BottomNavigationTabMenu: {
        backgroundColor: '#f5cc7f',
        color: '#f5cc7f',
    },
    textinput: {
        alignItems: 'center',
        height: 50,
        marginBottom: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        marginTop: 150,
        color: 'black',
    },
    tab: {
        height: 192,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mescommandes: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 40,
        paddingRight: 30,
    },
});
//endregion
