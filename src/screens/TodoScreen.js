import React, {useState} from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

import { THEME }      from '../themes/themes'
import { AppCard }    from '../components/ui/AppCard'
import { EditModal }  from '../components/EditModal'
import { TEXTrLIGHT } from '../components/ui/AppTextRobotoLight'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false)
  const saveHandler = title => {
    onSave(todo.id, title)
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
        <Button   title='Edit'
                  onPress={() => setModal(true)}/>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Delete'
                  color={THEME.DANGER_COLOR}
                  onPress={() => onRemove(todo.id)} />
        </View>
        <View style={styles.button}>
          <Button title='GoBack'
                  color={THEME.USE_COLOR}
                  onPress={goBack} />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  todoScreenView: {
    backgroundColor: THEME.BRAND_COLOR,
  },
  todoScreenText: {
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  },
  card: {
    marginBottom: 20,
    padding: 100
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '50%',
  },
})