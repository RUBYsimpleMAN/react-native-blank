import React, { useState, useContext } from 'react'
import { Button, View, StyleSheet } from 'react-native'

import { THEME }         from '../themes/themes'
import { AppCard }       from '../components/ui/AppCard'
import { EditModal }     from '../components/EditModal'
import { TEXTrLIGHT }    from '../components/ui/AppTextRobotoLight'
import { TodoContext }   from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {
  const { todos, updateTodo, rmTodoItem } = useContext(TodoContext)
  const { todoId, toggleScreen } = useContext(ScreenContext)
  const [modal, setModal] = useState(false)

  const todo = todos.find(t => t.id === todoId)
  
  const saveHandler = title => {
    updateTodo(todo.id, title)
    setModal(false)
  }
  return(
    <View style={styles.todoScreenView}>
      <EditModal  visibleProp={modal}
                  value={todo.title}
                  onCancel={() => setModal(false)}
                  onSave={saveHandler}
                  />
      <AppCard style={styles.card}>
        <TEXTrLIGHT style={styles.todoScreenText}> {todo.title} </TEXTrLIGHT>
        <View style={styles.editButton}>
        <Button   title='Edit'
                  color={THEME.USE_COLOR}
                  width={'100%'}
                  onPress={() => setModal(true)}/>
        </View>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Delete'
                  color={THEME.DANGER_COLOR}
                  onPress={() => rmTodoItem(todo.id)} />
        </View>
        <View style={styles.button}>
          <Button title='GoBack'
                  color={THEME.USE_COLOR}
                  onPress={() => toggleScreen(null)} />
        </View>
      </View>
      <View style={styles.bottomSpan}></View>
    </View>
  )
};

const styles = StyleSheet.create({
  todoScreenView: {
    backgroundColor: THEME.BRAND_COLOR,
  },
  todoScreenText: {
    fontSize:        24,
    letterSpacing:   2,
    lineHeight:      36,
    padding:        '1%',
    marginVertical: '10%',
  },
  card: {
    marginBottom:    20,
    paddingVertical: 6
  },
  editButton: {
    width:          '100%',
    marginVertical: '2%',
    paddingVertical: 10,
    backgroundColor: THEME.USE_COLOR
  },
  buttons: {
    flexDirection:  'row',
    justifyContent: "flex-end",
    marginVertical: '2%',
    paddingVertical: 10,
    backgroundColor: THEME.USE_COLOR
  },
  button: {
    width:          '49.8%',
  },
  bottomSpan: {
    height:          800,
  },
})