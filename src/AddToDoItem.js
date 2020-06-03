import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export const AddToDoItem = props => {
  return(
    <View style={styles.block}>
      <TextInput style={styles.input}/>
      <Button  style={styles.btn} title='AddItem'/>
    </View>
// <Text style={}> </Text>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    // backgroundColor: 'lightblue',
  },
  input: {
    paddingHorizontal: '2%',
    width: '70%',
    borderBottomColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 1.2,
    color: 'darkgrey',
    fontSize: 16,
  },
  // btn: {
  //   letterSpacing: 3,
  //   lineHeight: 40
  // }
})