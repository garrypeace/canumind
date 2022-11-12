import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import { styles } from '../styles/globalStyles'

export const FrontCard: React.FC = () => {
  return (
    <View style={styles.card as StyleProp<ViewStyle>}>
      <Text style={styles.card.text as StyleProp<TextStyle>}>teasst</Text>
    </View>
  )
}
