import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = (props) => {
  return(
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>
        Navbar 4 my app
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'blue',
  },
  navbarText: {
    lineHeight: 48
  }
})