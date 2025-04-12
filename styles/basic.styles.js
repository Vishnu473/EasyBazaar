import { useTheme } from "@/themes/themes";
import {StyleSheet} from "react-native"

export const useStyles = () =>{
  const {theme} = useTheme();
  return StyleSheet.create({
    themeChange:{
      backgroundColor: theme.backgroundColor,
      color:theme.textColor,
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: "center",
    },
    container:{
      flex: 1,
      backgroundColor: theme.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
    title:{
      color:theme.borderColor,
      fontSize:30
    }
  })
} 