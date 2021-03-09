//region Test de l'intégration des données avec l'api
// Components/Test.js

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from 'react-native';
import MenuItem from '../Helpers/MenuItem';
import {getplats} from '../Api/CousbeldisApi';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = ''; // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      menus: [],
    };
  }

  _searchTextInputChanged(text) {
    this.searchedText = text; // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    console.log('RENDER');
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <FlatList
          data={this.state.menus}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MenuItem menu={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Test;
//endregion mais ça ne marche pas...
