import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/themes/themes";

const ThemeSelection = () => {
  const {theme, themes, setTheme } = useTheme();

  const allThemeEntries = Object.entries(themes);
  return (
    <View style={styles.wrapper}>
      {allThemeEntries.map(([themeName,themeObject]) => (
        <TouchableOpacity key={themeName} 
          style={[styles.themeBlock, themeName === theme.name ? {borderColor:theme.cardColor} : {backgroundColor:"#dfdfdf"}]}
          onPress={() => setTheme(themeName as keyof typeof themes)}
          activeOpacity={0.7}>
            <Text style={{ fontWeight: "bold", marginBottom: 4, color: theme.name === themeName ? themeObject.primaryColor : "gray" }}>
              {themeName.toUpperCase()}
            </Text>
            <View key={themeName} style={styles.themeContainer}>
              {Object.entries(themeObject).map(
                ([key,value]) =>
                  key === "name" ? null : (
                    <View key={key}
                      style={[styles.themeBox, { backgroundColor: value}]}
                    />
                  )
              )}
            </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-between",
    padding: 12,
  },
  themeBlock: {
    flexBasis:"48%",
    marginBottom: 16,
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:6,
    padding:2
  },
  themeTitle: {
    fontWeight: "bold",
    color:"#ff0000"
  },
  themeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding:2,
    
  },
  themeBox: {
    width: 20,
    height: 30,
    borderColor:"#ccc",
    borderWidth:1
  },
});

export default ThemeSelection;
