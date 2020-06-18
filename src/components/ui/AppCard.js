import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {THEME} from '../../themes/themes'

export const AppCard = props => {
  return(
    // <View style={styles.default}>
    <View style={ {...styles.default, ...props.style} }>
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
      // borderWidth: 8,
      // borderColor: THEME.DRAFT_COLOR,
      // borderRadius: 10,
      alignItems: 'center',
// "v""v""v""v""v""v""v""v""v""v""v""v""v""v""v""v""v""
      // shadowColor: '#F2FAFF',                 // iOS only
      // shadowRadius: 5,                        // iOS only
      // shadowOpacity: 0.8,                     // iOS only
      // shadowOffset:{width: 3, height: 3},     // iOS only
// ..^..^..^..^..^..^..^..^..^..^..^..^..^..^..^..^..^..^
      // elevation: 12,                          // android
    },
    1: {
      // : '',
    },
    2: {
    },
    3: {
    },
  })