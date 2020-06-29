import React from 'react';
import { TouchableOpacity, View, StyleSheet} from 'react-native';

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
    alignItems:     'center',
    padding:         25,
    marginVertical: '1%',
    borderWidth:     1,
    borderColor:    'silver',
    borderRadius:    5,
    backgroundColor: THEME.BRAND_COLOR,
  },
  todoItemText: {
    fontSize:        24,
    letterSpacing:   1.2,
    lineHeight:      36,
  }
})
