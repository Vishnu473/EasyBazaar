import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/themes/themes'

const AppHeader = () => {
    const styles = useStyles();
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>AppHeader</Text>
            <Ionicons name='cart-outline' size={28} color={'gray'} />
        </View>

    )
}

export default AppHeader



const useStyles = () => {
    const {theme} = useTheme();

    return StyleSheet.create({
        headerContainer: {
            height: 50,
            backgroundColor: theme.backgroundColor,
            boxShadow: `0px 2px 4px ${theme.borderColor}`,
            width: "100%",
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
        },
        title: {
            fontSize: 20,
            fontWeight: '700',
            color: theme.primaryColor,
            paddingLeft: 4,
            letterSpacing: 0.5,
            fontFamily: 'System',
        },
    })
}