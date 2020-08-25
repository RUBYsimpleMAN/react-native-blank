import React, { useState, useContext } from 'react'
import { Alert, Keyboard, View, StyleSheet } from 'react-native'

import { THEME }       from '../../themes/themes'
import { Navbar }      from '../../components/Navbar'
import { MainScreen }  from '../../screens/MainScreen'
import { TodoScreen }  from '../../screens/TodoScreen'
import { TodoContext } from '../../context/todo/todoContext'


//export default function MainLayout() {
export const MainLayout = () => {
  const TodoContextInLayout = useContext(TodoContext)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1',  title: 'Дело номер 1' },
    {id: '2',  title: 'Дело номер 2' },
    {id: '3',  title: 'Дело номер 3' },
    // {id: '4',  title: 'Дело номер 4' },
    // {id: '5',  title: 'Дело номер 5' },
    // {id: '6',  title: 'Дело номер 6' },
    // {id: '7',  title: 'Дело номер 7' }
  ])

  const addTodo = title => {
      setTodos(prev => {
    return [
        ...prev,
        {
        id: Date.now().toString(),
        title
        }
      ]
    })
  }

  const rmTodoItem = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Удаление из списка',
      `Отменяем "${todo.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'negative'
        },
        { text: 'Delete',
          style: 'positive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(
              todo => todo.id !==id
            ))
          }
        }
      ],
      { cancelable: true }
    );
  }

  // const openTodoItem = id => setTodoId(id)

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen todos={ TodoContextInLayout.todos}
                addTodo={addTodo}
                rmTodoItem={rmTodoItem}
                openTodoItem={setTodoId} />
  )

  if (todoId) {
    const selectedTodo=todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)}
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
