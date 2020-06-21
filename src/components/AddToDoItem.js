import React, {useState} from 'react'
import { Alert, Button, TextInput, View, StyleSheet} from 'react-native'


export const AddToDoItem = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()){
      onSubmit(value)
      setValue('')
    }else{
      Alert.alert('Не может быть, чтоб совсем ничего!!.')
    }
  }
  
  return(
    <View style={styles.block}>
      <TextInput  style={styles.input}
                  onChangeText={setValue}
                  value={value}
                  placeholder='У Вас есть план мистер Фикс?..'
                  autoCorrect={false}
                  autoCapitalize={"none"}
      />
      <Button style={styles.btn} title='AddItem' onPress={pressHandler} />
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
  },
  input: {
    marginVertical: '1%',
    paddingHorizontal: '2%',
    borderBottomColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 1.2,
    color: 'darkgrey',
    fontSize: 16,
  },
  placeholder: {
  },
  btn: {
    marginVertical: 20,
    padding: 20,
    letterSpacing: 3,
    lineHeight: 40
  }
})