import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddToDoItem} from './src/AddToDoItem'

export default function App() {
  return (
    <View>
      <Navbar title='ToDoAPP' />
      <View style={styles.container}>
        <AddToDoItem />
        <Text style={styles.textfont}>
          WELLCOME TO NATIVE DEV!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textfont: {
    color: 'red',
    fontSize: 26,
    letterSpacing: 2,
    // lineHeight: 2
  },
});
