import { ThemeProvider } from "@/themes/themes";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Stack screenOptions={{headerShown:false}}/>
      </SafeAreaView>
    </SafeAreaProvider>
    </ThemeProvider>
    </QueryClientProvider>
  );
  
}
