import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Keyboard, Alert } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    // {id: '1',  title: 'Дело номер РАЗ' }
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
    <MainScreen todos={todos}
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
    <View onPress={ () => Keyboard.dismiss()}>
      <Navbar title='ToDoAPP' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    paddingBottom: '23%',
  },
});
