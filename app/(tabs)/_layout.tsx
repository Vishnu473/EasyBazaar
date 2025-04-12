import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AppHeader from '@/app/components/AppHeader'
import { useTheme } from '@/themes/themes'

export default function TabLayout() {
  const { theme } = useTheme();
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false, headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.backgroundColor,
        borderTopWidth: 1,
        borderTopColor:theme.borderColor,
        position: 'absolute',
        elevation: 8, // ← Android shadow
        height: 40,
        paddingBottom: 8,

        // iOS shadow
        shadowColor: theme.borderColor ?? '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      tabBarActiveTintColor: theme.primaryColor,
      tabBarInactiveTintColor : theme.secondaryColor
    }}>
      <Tabs.Screen name='index' options={{ tabBarIcon: ({ focused, size, color }: { focused: boolean, size: number; color: string }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name='search' options={{ tabBarIcon: ({ focused, size, color }: { focused: boolean, size: number; color: string }) => <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name='liked' options={{ tabBarIcon: ({ focused, size, color }: { focused: boolean, size: number; color: string }) => <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name='profile' options={{ tabBarIcon: ({ focused, size, color }: { focused: boolean, size: number; color: string }) => <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={size} color={color} /> }} />

    </Tabs>
  )
}