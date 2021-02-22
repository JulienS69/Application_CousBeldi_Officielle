import React from 'react';
import menus from '../Helpers/MenuData';
import MenuItem from '../Helpers/MenuItem';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = '';
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      menus: [],
    };
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://zupimages.net/up/21/07/krpy.jpg'}}
        />
        <TextInput style={styles.textinput} placeholder="Rechercher un menu" />
        <Button
          style={styles.button}
          title="Rechercher"
          color="#B04E1D"
          onPress={() => {}}
        />
        <FlatList
          data={menus}
          KeyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MenuItem menu={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 60,
  },
  logo: {
    left: 160,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    width: 85,
    height: 70,
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
});

export default Menu;
