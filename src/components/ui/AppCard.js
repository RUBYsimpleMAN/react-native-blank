import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard = props => {
  return(
    <View style={ {...styles.default, ...props.style} }>
      {props.children}
    </View>
  )
}

  const styles = StyleSheet.create({
    default: {
      padding:     2,
      alignItems: 'center',
    }
  })