import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = ({title}) => {
  return(
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>
        {title}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'blue',
  },
  navbarText: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  }
})