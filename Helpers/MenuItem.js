// Helpers/MenuItem.js

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Button} from '@ui-kitten/components';



class MenuItem extends React.Component {
  render() {
    const menu = this.props.menu;
    return (
      <View style={styles.main_container}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              alert(menu.description);
            }}>
            <Image style={styles.image} source={{uri: menu.img_path}}  />
          </TouchableOpacity>
        </View>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{menu.Nom}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              {menu.description}
            </Text>
          </View>
          <View style={styles.date_container}>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
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
    flex: 10,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: 20,
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 13,
    marginBottom: 50,
  },
});

export default MenuItem;
