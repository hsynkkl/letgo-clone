import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../LetgoClone/src/screens/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
  },
});
