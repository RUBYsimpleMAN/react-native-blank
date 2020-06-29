import React, {useState} from 'react';
import {View, Modal, TextInput, Button, Alert, StyleSheet} from 'react-native';

import { THEME } from '../themes/themes';

export const EditModal = ({visibleProp, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value)
  const saveHandlerModal = () => {
    if(title.trim().length < 3) {
      Alert.alert('Ой-вей... я Вас умоляю!..', 
                  `Хотя бi 3 буковкі чтобi міня уважiть!.. 
                  А здесь йiх всего ${title.trim().length}..`)
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
            <Button title='Cancel'
                    color={THEME.USE_COLOR}
                    onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Save'
                    color={THEME.ACCEPT_COLOR}
                    onPress={saveHandlerModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex:            1,
    justifyContent: 'center',
    alignItems:     'center',
    backgroundColor: THEME.BRAND_COLOR
  },
  input: {
    padding:         10,
    height:          100,
    width:          '96%',
    borderColor:     THEME.USE_COLOR,
    borderWidth:     1,
    backgroundColor: THEME.TEXT_SHINE_COLOR,
    textAlign:      'center',
    color:           THEME.DANGER_COLOR,
    fontSize:        24,
    letterSpacing:   2,
  },
  buttons: {
    flexDirection:  'row',
    justifyContent: 'center',
    width:          '96%',
    marginVertical: '5%',
    paddingVertical: 10,
    backgroundColor: THEME.USE_COLOR,
  },
  button: {
    width:          '50%',
  },
})