import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const TodoScreen = ({ goBack }) => {
  return(
    <View style={styles.todoScreenView}>
      <Text style={styles.todoScreenText}> Todo Screen </Text>
      <Button title='Back' onPress={goBack} />
    </View>
  )
};

const styles = StyleSheet.create({
  todoScreenView: {
    backgroundColor: 'blue',
  },
  todoScreenText: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  }
})