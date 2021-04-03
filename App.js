
//region Import
// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import
    MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import DetailsScreen from './Components/TestScreen/DetailScreen';
import ConnexionScreen from './Components/TestScreen/ConnexionScreen';
import PlatsScreen from './Components/TestScreen/PlatsScreen';
import MenuScreen from './Components/TestScreen/MenuScreen';
import DetailScreen from './Components/TestScreen/DetailScreen';
import CommandeScreen from './Components/TestScreen/CommandeScreen';
import { mdiAccount } from '@mdi/js';
import PersonnalisationScreen from './Components/TestScreen/PersonnalisationScreen';
import {func} from 'prop-types';
import LoginScreen from './Components/TestScreen/LoginScreen';
import EnregistrementScreen from './Components/TestScreen/EnregistrementScreen';
import MonCompteScreen from './Components/TestScreen/MonCompteScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//endregion


// Les fonctions terminant par Stack, permmettent d'être appelées dans la fonction HomeTabs pour l'affichage de nos vues lorsque l'on va cliquer sur un onglet.
// Comme par exemple PlatStack permet l'affichage de notre vue PlatsScreen et DétailScreen, car lorsque l'on va cliquer sur l'onglet Plats, nous voulons
// voir les plats et les détails d'un plats lorsque l'on va cliqué sur l'une des photos d'un plats.
function PlatsStack() {
    return (
        <Stack.Navigator
            initialRouteName="Plats"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="Bienvenue"
                component={PlatsScreen}
                options={{ title: 'Bienvenue 👨‍🍳' }}/>
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'Detail du plat 👨‍🍳' }}/>
        </Stack.Navigator>
    );
}

function MonCompteStack() {
    return (
        <Stack.Navigator
            initialRouteName="MonCompte"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="MonCompte"
                component={MonCompteScreen}
                options={{ title: 'Mon Compte' }}/>
        </Stack.Navigator>

    );
}

function CommandeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Commandes"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="Commandes"
                component={CommandeScreen}
                options={{ title: 'Mes Commandes' }}/>
        </Stack.Navigator>

    );
}

function LoginStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="Connexion"
                component={ConnexionScreen}
                options={{ title: 'Se connecter' }}/>
        </Stack.Navigator>

    );
}

function PersonnalisationStack() {
    return (
        <Stack.Navigator
            initialRouteName="Personnalisation"
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="Personnaliser"
                component={PersonnalisationScreen}
                options={{ title: 'Personnalisation' }}/>
        </Stack.Navigator>
    );
}

//region Cette fonction permet de construire la barre de navigation d'en bas, un TabScreen correspond à un onglet avec son icon et l'appel de son component qui va lui permmettre d'envoyer nos différentes vues.
function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#b04e1d',
            }}>
            <Tab.Screen
                name="Plats"
                component={PlatsStack}
                options={{
                    tabBarLabel: 'Plats',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chef-hat"
                            color={color}
                            size={size}
                        />
                    ),
                }}  />
            <Tab.Screen
                name="PersonnalisationStack"
                component={PersonnalisationStack}
                options={{
                    tabBarLabel: 'Personnaliser',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bowl-mix"
                            color={color}
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="CommandeStack"
                component={CommandeStack}
                options={{
                    tabBarLabel: 'Commande',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="basket"
                            color={color}
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="MonCompteStack"
                component={MonCompteStack}
                options={{
                    tabBarLabel: 'Mon Compte',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}
//endregion

// La fonction App est la fonction Chef, c'est celle qui va diriger l'affichage de notre application en générale. Nous avons appelé les components
// ConnexionScreen, LoginScreen, EnregistrementScreen afin que la vue Connexion, Enregistrement et Login puissent apparaître avant que la bottom bar
// et que la vue pricipale de l'application (Plats) ne s'affiche, car nous avons voulus faire en sorte qu'un client si il veut avoir accès
// aux plats et aux divers options du restaurant, il doit forcément se crée un compte et se connecté, si ce n'est pas le cas, il ne peut pas voir les différents plats etc...

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Connexion" component={ConnexionScreen} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen name="Enregistrement" component={EnregistrementScreen} />
                <Stack.Screen options={{headerShown: false}} name="Plats" component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
