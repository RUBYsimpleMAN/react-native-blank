import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

import { THEME } from '../themes/themes';

export const Navbar = ({title}) => {
  return(
    <View style={{...styles.navbar, ...Platform.select({
      ios:     styles.navbarIOS,
      android: styles.navbarAndroid
    })}}>
      <Text style={styles.navbarText}>
        {title}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    padding:           '5%',
  },
  navbarAndroid: {
    backgroundColor:    THEME.NAVBAR_COLOR,
  },
  navbarIOS: {
    backgroundColor:    THEME.TEXT_SHINE_COLOR,
    borderBottomColor:  THEME.DANGER_COLOR,
    borderBottomWidth:  1
  },
  navbarText: {
    textAlign:         'center',
    fontFamily:        'rThin',
    fontSize:           30,
    letterSpacing:      2,
    lineHeight:         48,
    color:              Platform.OS === 'ios' ?
                        THEME.TEXT_DARK_COLOR
                        :
                        THEME.TEXT_SHINE_COLOR,
  }
})
