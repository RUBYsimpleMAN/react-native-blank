import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.textfont}>
        WELLCOME TO NATIVE DEV!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfont: {
    color: 'red',
    fontSize: 26,
    letterSpacing: 2,
    // lineHeight: 2
  },
});
