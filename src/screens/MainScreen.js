import React, { useContext } from 'react'
import { Dimensions, FlatList, Image, View, StyleSheet } from 'react-native'

import { THEME }       from '../themes/themes'
import { AddToDoItem } from '../components/AddToDoItem'
import { Todo }        from '../components/TemplateToDo'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const MainScreen = ({ openTodoItem}) => {
  const { toggleScreen } = useContext(ScreenContext)
  const { addTodo, todos, rmTodoItem } = useContext(TodoContext)

  let mainScreenContent

  if (todos.length === 0) {
    mainScreenContent = (
      <View style={styles.imgWrap}>
        <Image  style={styles.img}
                source={require('../../assets/splash.png')} />
      </View>
    )
  }

  if (todos.length === 1) {
    mainScreenContent = (
    <View>
      <FlatList style={styles.flatlist}
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
        <Todo todo={item}
              onRemove={rmTodoItem}
              onOpen={toggleScreen} />
      )} />
      <View style={styles.flatlistImgWrap01}>
        <Image  style={styles.img}
                source={require('../../assets/splash.png')} />
      </View>
      <View style={styles.imgWrap}></View>
    </View>
    )
  }

  if (todos.length === 2) {
    mainScreenContent = (
    <View>
      <FlatList style={styles.flatlist}
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
        <Todo todo={item}
              onRemove={rmTodoItem}
              onOpen={toggleScreen} />
      )} />
      <View style={styles.flatlistImgWrap02}>
        <Image  style={styles.img}
                source={require('../../assets/splash.png')} />
      </View>
      <View style={styles.imgWrap}></View>
    </View>
    )
  }

  if (todos.length > 2) {
    mainScreenContent = (
    <View>
      <FlatList style={styles.flatlist}
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
        <Todo todo={item}
              onRemove={rmTodoItem}
              onOpen={toggleScreen} />
      )} />
      {/* <View style={styles.imgWrap}></View> */}
    </View>
    )
  }

  return(
    <View style={styles.mainScreenView}>
      <AddToDoItem onSubmit={addTodo}/>
      { mainScreenContent }
    </View>
  )
};

const styles = StyleSheet.create({
  mainScreenView: {
    flex:            1,
    backgroundColor: THEME.BRAND_COLOR,
    paddingBottom:   128,
  },
  flatlist: {
    backgroundColor: THEME.BRAND_COLOR,
  },
  flatlistImgWrap01: {
    alignItems:     'center',
    padding:         30,
    height:          420
  },
  flatlistImgWrap02: {
    alignItems:     'center',
    padding:         20,
    height:          300
  },
  imgWrap: {
    alignItems:     'center',
    height:          800,
  },
  img: {
    width:           Dimensions.get('window') > 400 ? '75%' : '50%',
    height:          Dimensions.get('window') > 400 ? '75%' : '50%',
    resizeMode:     'contain',
  }
})