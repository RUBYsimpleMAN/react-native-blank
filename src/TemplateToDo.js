import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Todo = ({todo}) => {
  return(
    <View style={styles.todoItem}>
      <Text style={styles.todoItemText}>
        {todo.title}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: silver,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
  todoItemText: {
    // textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  }
})