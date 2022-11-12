import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from '../styles/globalStyles';

export const Controls = () => {
  return (
    <View style={styles.controls as StyleProp<ViewStyle>}>
        <Text style={styles.controls.text}>controls</Text>
    </View>
  )
}
