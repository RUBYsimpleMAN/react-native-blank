import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TodoScreen = props => {
  return(
    <View style={styles.todoScreenView}>
      <Text style={styles.todoScreenText}>
        
      </Text>
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