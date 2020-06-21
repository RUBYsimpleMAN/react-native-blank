import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { AddToDoItem } from '../components/AddToDoItem'
import { Todo }        from '../components/TemplateToDo'
import { THEME } from '../themes/themes';

export const MainScreen = ({addTodo, todos, rmTodoItem, openTodoItem}) => {

  let mainScreenContent = (
    <FlatList
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
  mainScreenText: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 40,
    height:500
  },
  img: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    // padding: 40,
    // height:256
  }
})