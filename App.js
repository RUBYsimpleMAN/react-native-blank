import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Keyboard, FlatList } from 'react-native'
import { Navbar }     from './src/Navbar'
import { AddToDoItem} from './src/AddToDoItem'
import { Todo }       from './src/TemplateToDo'

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', title: 'Дело номер РАЗ' },
    {id: '2', title: 'Дело номер ДВА' },
    {id: '3', title: 'Дело номер ТРИ' },
    {id: '4', title: 'Дело номер ЧЕТЫРЕ' },
    {id: '5', title: 'Дело номер ПЯТЬ' },
    {id: '6', title: 'Дело номер ШЕСТЬ' },
    {id: '7', title: 'Дело номер СЕМЬ' },
    {id: '8', title: 'Дело номер ВОСЕМЬ' },
    {id: '9', title: 'Дело номер ДЕВЯТЬ' },
    {id: '10', title: 'Дело номер ДЕСЯТЬ' },
    {id: '11', title: 'Дело номер ОДИННАДЦАТЬ' }
  ])

  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title
      }
    ])

    // setTodos([...todos, {
    //   id: Date.now().toString(),
    //   title
    // }])

    // setTodos((prevTodos) => {
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    // setTodos(todos.concat([newTodo]))
  }
  return (
    <View onPress={ () => Keyboard.dismiss()}>
      <Navbar title='ToDoAPP' />
      <View style={styles.container}>
        <AddToDoItem onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} />
          )}
        />

        {/* <ScrollView>
          { todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
          ) ) }
          <Text style={styles.textfont}> WELLCOME TO NATIVE DEV! </Text>
        </ScrollView> */}
      </View>
    </View>
    // ---------------------------------
    // <View onPress={ () => Keyboard.dismiss()}>
    //   <Navbar title='ToDoAPP' />
    //   <View style={styles.container}>
    //     <AddToDoItem onSubmit={addTodo}/>
    //     <ScrollView>
    //       { todos.map(todo => (
    //       <Todo todo={todo} key={todo.id} />
    //       ) ) }
    //       <Text style={styles.textfont}> WELLCOME TO NATIVE DEV! </Text>
    //     </ScrollView>
    //   </View>
    // </View>
    // ---------------------------------
    // <View>
    //   <TouchableOpacity onPress={ () => Keyboard.dismiss()}>
    //   <Navbar title='ToDoAPP' />
    //   <View style={styles.container}>
    //     <AddToDoItem onSubmit={addTodo}/>
    //     <ScrollView>
    //       { todos.map(todo => (
    //       <Todo todo={todo} key={todo.id} />
    //       ) ) }
    //     </ScrollView>
    //       {/* <Text style={styles.textfont}> WELLCOME TO NATIVE DEV! </Text> */}
    //     </View>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    paddingBottom: '23%',
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
