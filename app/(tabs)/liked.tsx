import { View, Text } from 'react-native'
import React from 'react'
import { useStyles } from '@/styles/basic.styles';

export default function liked() {
  const styles = useStyles();
  return (
    <View style={styles.themeChange}>
      <Text>liked</Text>
    </View>
  )
}