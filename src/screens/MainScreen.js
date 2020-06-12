import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MainScreen = props => {
  return(
    <View style={styles.mainScreenView}>
      <Text style={styles.mainScreenText}>
        
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  mainScreenView: {
    backgroundColor: 'blue',
  },
  mainScreenText: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  }
})