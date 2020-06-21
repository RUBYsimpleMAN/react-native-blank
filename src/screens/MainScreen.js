import React from 'react'
import { FlatList, Image, View, StyleSheet } from 'react-native'

import { THEME }       from '../themes/themes'
import { AddToDoItem } from '../components/AddToDoItem'
import { Todo }        from '../components/TemplateToDo'

export const MainScreen = ({addTodo, todos, rmTodoItem, openTodoItem}) => {

  let mainScreenContent = (
    <FlatList style={styles.flatlist}
              keyExtractor={item => item.id.toString()}
              data={todos}
              renderItem={({item}) => (
      <Todo todo={item}
            onRemove={rmTodoItem}
            onOpen={openTodoItem} />
    )} />
  )

  if (todos.length === 0) {
    mainScreenContent = (
      <View style={styles.imgWrap}>
        <Image  style={styles.img}
                source={require('../../assets/splash.png')} />
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
    backgroundColor: THEME.BRAND_COLOR,
  },
  flatlist: {
    backgroundColor: THEME.BRAND_COLOR,
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height:500
  },
  img: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  }
})