import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';

export const AddToDoItem = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    // onSubmit('Long and Long String Test ToDo Item')
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
               // onChangeText={text => serValue(text)}
                  onChangeText={setValue}
                  value={value}
                  placeholder='У Вас есть план мистер Фикс?..'
                  autoCorrect={false}
                  autoCapitalize={"none"}
      />
      <Button style={styles.btn} title='AddItem' onPress={pressHandler} />
    </View>
// <Text style={}> </Text>
  )
};

const styles = StyleSheet.create({
  block: {
    // flexDirection: 'row',
    // justifyContent: 'space-between'
    // backgroundColor: 'lightblue',
  },
  input: {
    marginVertical: '1%',
    paddingHorizontal: '2%',
    // width: '70%',
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