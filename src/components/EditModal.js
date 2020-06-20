import React, {useState} from 'react';
import {View, Modal, TextInput, Button, Alert, StyleSheet} from 'react-native';
import { THEME } from '../themes/themes';

export const EditModal = ({visibleProp, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value)
  const saveHandlerModal = () => {
    if(title.trim().length < 3) {
      Alert.alert('Ой-вей... я Вас умоляю!..', 
                  `Хотя бы 3 буковки чтобы меня уважить!.. 
                  А здесь всего ${title.trim().length}..`)
    } else {
      onSave(title)
    }
  }
  return(
    <Modal  visible={visibleProp}
            animationType='fade'
            transparent={false} >
      <View style={styles.wrap}>
        <TextInput  placeholder='теперь это будет...'
                    value={title}
                    onChangeText={setTitle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Save'
                    color='green'
                    onPress={saveHandlerModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.USE_COLOR,
    borderWidth: 3,
    height: 100,
    width: '96%',
    textAlign: 'center',
    color: THEME.DANGER_COLOR,
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    width: '96%'
  },
  button: {
    width: '50%',
  },
})