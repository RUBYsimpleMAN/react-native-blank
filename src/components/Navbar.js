import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { THEME } from '../themes/themes';

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
    backgroundColor: THEME.NAVBAR_COLOR,
    marginTop: '5%',
    padding: '5%',
  },
  navbarText: {
    textAlign: 'center',
    color: THEME.TEXT_SHINE_COLOR,
    fontFamily: 'rThin',
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 48
  }
})