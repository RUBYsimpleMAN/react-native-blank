import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {AddToDoItem} from '../components/AddToDoItem'
import {Todo}        from '../components/TemplateToDo'

export const MainScreen = ({addTodo, todos, rmTodoItem, openTodoItem}) => {
  return(
    <View style={styles.mainScreenView}>
      <AddToDoItem onSubmit={addTodo}/>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item}
                onRemove={rmTodoItem}
                onOpen={openTodoItem} />
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mainScreenView: {
    backgroundColor: 'blue',
  },
  mainScreenText: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  }
})