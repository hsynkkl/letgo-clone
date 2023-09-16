import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import ChatScreen from "../screens/ChatScreen";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
const Stack = createStackNavigator();

function ChatNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ChatScreen}
        options={{
          headerStyle: { backgroundColor: "#f1f1f1" },
          headerTitleAlign: "center",
          headerTitle: () => {
            return <Text style={{ fontSize: 16 }}>Sohbet - Hepsi</Text>;
          },

          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", marginRight: 18 }}>
                <MaterialIcons
                  name="settings-input-component"
                  size={24}
                  color="#939393"
                  style={{ marginRight: 16 }}
                />
                <Entypo
                  name="dots-three-horizontal"
                  size={24}
                  color={"#939393"}
                />
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
