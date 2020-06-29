import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME } from '../../themes/themes';

export const TEXTrLIGHT = props => {
  return(
      <Text style={{...styles.font, ...props.style}}>
        {props.children}
      </Text>
  )
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'rLight',
    color:       THEME.TEXT_SHINE_COLOR
  }
})