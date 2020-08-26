import React, { useState, useContext } from 'react'
import { Alert, Keyboard, View, StyleSheet } from 'react-native'

import { THEME }       from '../../themes/themes'
import { Navbar }      from '../../components/Navbar'
import { MainScreen }  from '../../screens/MainScreen'
import { TodoScreen }  from '../../screens/TodoScreen'
import { TodoContext } from '../../context/todo/todoContext'
import { ScreenContext } from '../../context/screen/screenContext'


//export default function MainLayout() {
export const MainLayout = () => {
  const { todos, addTodo, updateTodo, rmTodoItem } = useContext(TodoContext)
  const { todoId, toggleScreen } = useContext(ScreenContext)


  // const rmTodoItem = id => {
  //   const todo = todos.find(t => t.id === id)
  //   Alert.alert(
  //     'Удаление из списка',
  //     `Отменяем "${todo.title}"?`,
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'negative'
  //       },
  //       { text: 'Delete',
  //         style: 'positive',
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prev => prev.filter(
  //             todo => todo.id !==id
  //           ))
  //         }
  //       }
  //     ],
  //     { cancelable: true }
  //   );
  // }


  let content = <MainScreen />

  if (todoId) {
    const selectedTodo=todos.find(todo => todo.id === todoId)
      content = <TodoScreen goBack={() => toggleScreen(null)}
                            onRemove={rmTodoItem}
                            onSave={updateTodo}
                            todo={selectedTodo} />
  }

  return (
    <View  style={styles.appScoupe}
           onPress={() => Keyboard.dismiss()}>
      <Navbar title='SclerozzIO' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appScoupe: {
    flex: 1,
    backgroundColor: THEME.BRAND_COLOR,
    marginTop: '6%',
  },
  container: {
    flex: 1,
    backgroundColor: THEME.BRAND_COLOR,
    padding: '2%',
  },
});
