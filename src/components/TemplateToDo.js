import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { THEME } from '../themes/themes';

export const Todo = ({todo, onRemove, onOpen}) => {
  return(
    <TouchableOpacity activeOpacity={0.7}
//                    onPress={() => console.log('Pressed', todo.id)}
                      onPress={() => onOpen(todo.id)}
                      onLongPress={onRemove.bind(null, todo.id)}>
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    marginVertical: '1%',
    backgroundColor: 'lightblue',
  },
  todoItemText: {
    fontSize: 20,
    letterSpacing: 2,
    lineHeight: 40,
    color: THEME.TEXT_DARK_COLOR
  }
})
