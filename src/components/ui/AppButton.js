import React from 'react'
import { Platform, TouchableOpacity, TouchableNativeFeedback, View, StyleSheet } from 'react-native'

import { TEXTrLIGHT } from './AppTextRobotoLight'
import { THEME } from '../../themes/themes'

export const AppButton = ({ children, onPress, color=THEME.DANGER_COLOR }) => {
  const Wrapper = Platform.OS === 'android' ?
                  TouchableNativeFeedback
                  :
                  TouchableOpacity
  return(
    <Wrapper onPress={onPress}>
      <View style={{...styles.button, backgroundColor: color}}>
        <TEXTrLIGHT>{children}</TEXTrLIGHT>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  input: {
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
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin: 30
  }
})