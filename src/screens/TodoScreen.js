import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {THEME} from '../themes/themes'
import { AppCard } from '../components/ui/AppCard';

export const TodoScreen = ({ goBack, todo }) => {
  return(
    <View style={styles.todoScreenView}>
      <AppCard>
        <Text style={styles.todoScreenText}> {todo.title} </Text>
        <Button title='Edit' />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Delete'
                  color={THEME.DANGER_COLOR}
                  onPress={() => console.log('Will be Removed')} />
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
    textAlign: 'center',
    color: 'snow',
    fontSize: 24,
    letterSpacing: 2,
    lineHeight: 48
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '50%',
  },
})