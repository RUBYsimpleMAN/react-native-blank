import React, {useState} from 'react'
import { Alert, Button, TextInput, View, StyleSheet} from 'react-native'

import { THEME } from '../themes/themes';

export const AddToDoItem = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()){
      onSubmit(value)
      setValue('')
    }else{
      Alert.alert('Не может быть чтоб совсем ничего!!.')
    }
  }
  
  return(
    <View style={styles.block}>
      <TextInput  style={styles.input}
                  onChangeText={setValue}
                  value={value}
                  placeholder='Итак, планируем...'
                  autoCorrect={false}
                  autoCapitalize={"none"}
      />
      <View style={styles.btn}>
        <Button title='AddItem'
                color={THEME.USE_COLOR}
                onPress={pressHandler} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
  },
  input: {
    marginVertical:    '2%',
    paddingHorizontal: '2%',
    paddingVertical:   '4%',
    borderStyle:       'solid',
    borderBottomColor:  THEME.USE_COLOR,
    borderBottomWidth:  1.2,
    fontSize:           24,
    letterSpacing:      1.2,
    color:              THEME.TEXT_SHINE_COLOR,
  },
  btn: {
    marginVertical:    '2%',
    paddingVertical:    10,
    backgroundColor:    THEME.USE_COLOR
  }
})