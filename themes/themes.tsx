import React, { createContext, useState, useContext, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

// Define the theme types
interface Theme {
  name: string;
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  cardColor: string;
  borderColor: string;
}

// Define the available themes.
const lightTheme: Theme = {
  name: 'light',
  backgroundColor: '#F8F8F8',
  textColor: '#212121',
  primaryColor: '#007AFF',
  secondaryColor: 'grey',
  cardColor: 'coral',
  borderColor: '#E0E0E0',
};

const darkTheme: Theme = {
  name: 'dark',
  backgroundColor: '#121212',
  textColor: '#FFFFFF',
  primaryColor: '#03DAC6',
  secondaryColor: '#acacac',
  cardColor: '#acacac',
  borderColor: '#373737',
};

const blueTheme: Theme = {
  name: 'blue',
  backgroundColor: '#E3F2FD',
  textColor: '#1A237E',
  primaryColor: '#2196F3',
  secondaryColor: '#64B5F6',
  cardColor: 'blue',
  borderColor: '#90CAF9',
};

const greenTheme: Theme = {
  name: 'green',
  backgroundColor: '#F1F8E9',
  textColor: '#388E3C',
  primaryColor: '#4CAF50',
  secondaryColor: '#8BC34A',
  cardColor: 'green',
  borderColor: '#A5D6A7',
};

const sunsetTheme: Theme = {
  name: 'sunset',
  backgroundColor: '#FFF3E0',
  textColor: '#E65100',
  primaryColor: '#FF9800',
  secondaryColor: '#FFD54F',
  cardColor: 'orange',
  borderColor: '#FFB74D',
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
  blue: blueTheme,
  green: greenTheme,
  sunset: sunsetTheme,
};

// Create the Theme Context
interface ThemeContextType {
  theme: Theme;
  setTheme: (themeName: keyof typeof themes) => void;
  themes: typeof themes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the Theme Provider
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: keyof typeof themes;
}

export const ThemeProvider = ({ children, defaultTheme = 'light' }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(themes[defaultTheme]);

  const setTheme = (themeName: keyof typeof themes) => {
    const selectedTheme = themes[themeName];
    setThemeState(selectedTheme);
    // You can add AsyncStorage here later if you want persistence
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

