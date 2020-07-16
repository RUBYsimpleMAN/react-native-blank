import React, { useState } from 'react'
import { Alert, Keyboard, View, StyleSheet } from 'react-native'
import * as expoFont from 'expo-font'
import { AppLoading } from 'expo'

import { THEME }       from './src/themes/themes'
import { Navbar }      from './src/components/Navbar'
import { MainScreen }  from './src/screens/MainScreen'
import { TodoScreen }  from './src/screens/TodoScreen'

async function loadApplication() {
  await expoFont.loadAsync({
    'rThin': require('./assets/fonts/Roboto-Thin.ttf'),
    'rLight': require('./assets/fonts/Roboto-Light.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1',  title: 'Дело номер 1' },
    {id: '2',  title: 'Дело номер 2' },
    {id: '3',  title: 'Дело номер 3' },
    {id: '4',  title: 'Дело номер 4' },
    {id: '5',  title: 'Дело номер 5' },
    {id: '6',  title: 'Дело номер 6' },
    {id: '7',  title: 'Дело номер 7' },
    // {id: '8',  title: 'Дело номер 8' },
    // {id: '9',  title: 'Дело номер 9' },
    // {id: '10',  title: 'Дело номер 10' },
    // {id: '11',  title: 'Дело номер 11' },
    // {id: '12',  title: 'Дело номер 12' },
    // {id: '13',  title: 'Дело номер 13' },
    // {id: '14',  title: 'Дело номер 14' },
    // {id: '15',  title: 'Дело номер 15' },
    // {id: '16',  title: 'Дело номер 16' },
    // {id: '17',  title: 'Дело номер 17' },
    // {id: '18',  title: 'Дело номер 18' },
    // {id: '19',  title: 'Дело номер 19' },
    // {id: '20',  title: 'Дело номер 20' },
    // {id: '21',  title: 'Дело номер 21' }
  ])

  if (!isReady) {
    return <AppLoading  startAsync={loadApplication}
                        onError={err => console.log(err)}
                        onFinish={() => setIsReady(true)} />
  }

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
