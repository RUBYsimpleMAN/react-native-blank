import React, {useState} from 'react'
import {StyleSheet, Text, View, ScrollView, Keyboard} from 'react-native'
import {Navbar} from './src/components/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import {TodoScreen} from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1',  title: 'Дело номер РАЗ' },
    {id: '2',  title: 'Дело номер ДВА' },
    {id: '3',  title: 'Дело номер ТРИ' },
    {id: '4',  title: 'Дело номер ЧЕТЫРЕ' },
    {id: '5',  title: 'Дело номер ПЯТЬ' },
    {id: '6',  title: 'Дело номер ШЕСТЬ' },
    {id: '7',  title: 'Дело номер СЕМЬ' },
    {id: '8',  title: 'Дело номер ВОСЕМЬ' },
    {id: '9',  title: 'Дело номер ДЕВЯТЬ' },
    {id: '10', title: 'Дело номер ДЕСЯТЬ' },
    {id: '11', title: 'Дело номер ОДИННАДЦАТЬ' }
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
    setTodos(prev => prev.filter(
      todo => todo.id !==id
    ))
  }

  let content = (
    <MainScreen todos={todos}
                addTodo={addTodo}
                rmTodoItem={rmTodoItem}/>
  )

  if (todoId) {
    content = <TodoScreen />
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
