import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import HomeScreen from "../LetgoClone/src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsExports);
LogBox.ignoreAllLogs();
function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);
const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
  },
});
