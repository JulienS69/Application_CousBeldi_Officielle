/*
import React from 'react'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
        )
    }
}

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './Components/Screens';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConnexionScreen from './Components/TestScreen/ConnexionScreen';
import PlatsScreen from './Components/TestScreen/PlatsScreen';
import AccueilScreen from './Components/TestScreen/AccueilScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from './Components/TestScreen/MenuScreen';
import DetailScreen from './Components/TestScreen/DetailScreen';
import CommandeScreen from './Components/TestScreen/CommandeScreen';

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Connexion"
                        component={ConnexionScreen}
                    />
                    <Stack.Screen
                        name="Plats"
                        component={PlatsScreen}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={MenuScreen}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={DetailScreen}
                    />
                    <Stack.Screen
                        name="Commande"
                        component={CommandeScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;

/*
import ScreenHome from './Components/ScreenHome';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

class App extends React.Component {
  render() {
    return <HomeNavigator />;
  }
}

const HomeNavigator = createSwitchNavigator({
  Home: ScreenHome,
});

export default createAppContainer(HomeNavigator);


import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

*/
/*
import * as React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Router, ListItem} from './Outils';
import {MainScreen} from './Components/MainScreen';
import {ReactNavigationScreen} from './Components/ReactNavigationScreen';

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

export class App extends React.Component<{}> {
    render() {
        return (
            <Router
                initialNode={
                    <MainScreen
                        footer={
                            <ListItem
                                label="React Navigation"
                                description="React Navigation Demo"
                                onPress={() => Router.push(<ReactNavigationScreen />)}
                            />
                        }
                    />
                }
            />
        );
    }
}
*/
