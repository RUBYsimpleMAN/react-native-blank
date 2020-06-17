import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {THEME} from '../../themes/themes'

export const AppCard = props => {
  return(
    <View style={styles.default}>
      {props.children}
    </View>
  )
}
// export const AppCard = props => (
//   <View style={styles.default}>
//     <Text>goo</Text>
//     {console.log(props.children)}
//   </View>
// )

  const styles = StyleSheet.create({
    default: {
      padding: 20,
      borderWidth: 8,
      borderColor: THEME.DRAFT_COLOR,
    },
    1: {
    },
    2: {
    },
    3: {
    },
  })