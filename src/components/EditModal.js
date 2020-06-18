import React from 'react';
import {View, Modal, TextInput, Button, StyleSheet} from 'react-native';
import { THEME } from '../themes/themes';

export const EditModal = ({visibleProp, onCancel}) => {
  return(
    <Modal  visibleAttribute={visibleProp}
            animationType='fade'
            transparent={false} >
      <View style={styles.wrap}>
        <TextInput  placeholder='new text please'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Save'
                    color='green' />
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
    borderBottomWidth: 3,
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