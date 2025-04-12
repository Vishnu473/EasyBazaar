import { View, Text } from 'react-native'
import React from 'react'
import {useStyles} from "../../styles/basic.styles"
import ThemeSelection from "../components/ThemeSelection"

export default function profile() {
  const styles = useStyles();
  return (
    <View style={styles.themeChange}>
      <Text>profile</Text>
      <ThemeSelection />
    </View>
  )
}