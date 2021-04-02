// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import MenuScreen from '../Components/Screens'
import PlatsScreen from '../Components/PlatsScreen'

const MoviesTabNavigator = createBottomTabNavigator({
    Plats: {
        screen: PlatsScreen
    },
    Menu: {
        screen: MenuScreen
    }
})



export default createAppContainer(MoviesTabNavigator)
