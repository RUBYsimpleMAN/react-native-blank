import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import { THEME }      from '../themes/themes';
import { TEXTrLIGHT } from './ui/AppTextRobotoLight';

export const Todo = ({todo, onRemove, onOpen}) => {
  return(
    <TouchableOpacity activeOpacity={0.7}
                      onPress={() => onOpen(todo.id)}
                      onLongPress={onRemove.bind(null, todo.id)}>
      <View style={styles.todoItem}>
        <TEXTrLIGHT style={styles.todoItemText}>
          {todo.title}
        </TEXTrLIGHT>
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
    marginVertical: '10%',
    backgroundColor: THEME.BRAND_COLOR,
  },
  todoItemText: {
    fontSize: 20,
    letterSpacing: 2,
    lineHeight: 40,
    // color: THEME.TEXT_DARK_COLOR
  }
})
