import { FlatList, Image, Text, View } from "react-native";
import { useStyles } from "../../styles/basic.styles";
import { Link } from "expo-router";
import React from "react";
import { useTheme } from "@/themes/themes";
import AppHeader from "../components/AppHeader";
import CategorychipList from "../home/components/CategorychipList";


export default function Index() {
  const styles = useStyles();
  return (
    <View>
      <AppHeader />
      <CategorychipList />
    </View>
/* <FlatList
data={[{ key: 'header' }, { key: 'categories' }]}
renderItem={({ item }) => {
  if (item.key === 'header') {
    return <AppHeader />;
  } else if (item.key === 'categories') {
    return <CategoryChipsList />;
  }
  return null;
}}
keyExtractor={(item) => item.key}
/> */
  );
}


