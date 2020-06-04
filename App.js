import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddToDoItem} from './src/AddToDoItem'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])

    // setTodos((prevTodos) => {
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    // setTodos(todos.concat([newTodo]))
  }
  return (
    <View>
      <Navbar title='ToDoAPP' />
      <View style={styles.container}>
        <AddToDoItem onSubmit={addTodo}/>
        <View> { todos.map(todo => (<Todo todo={todo} key={todo.id} />) ) } </View>

        <Text style={styles.textfont}> WELLCOME TO NATIVE DEV! </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textfont: {
    color: 'red',
    fontSize: 20,
    letterSpacing: 2,
    // lineHeight: 2
  },
});
