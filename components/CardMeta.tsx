import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from '../styles/globalStyles';

export const CardMeta = () => {
  return (
    <View style={styles.card.meta as StyleProp<ViewStyle>}>
          <Text style={styles.card.meta.text}>meta, tags etc</Text>
    </View>
  )
}
