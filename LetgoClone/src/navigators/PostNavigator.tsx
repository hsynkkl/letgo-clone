import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import PostScreen from "../screens/PostScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();

function PostNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PostScreen}
        options={{
          headerStyle: { backgroundColor: "#f1f1f1" },
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                İlanlarım
              </Text>
            );
          },
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="lightbulb-on"
                size={24}
                color="#949494"
                style={{ marginLeft: 10 }}
              />
            );
          },
          headerRight: () => {
            return (
              <Ionicons
                name="ios-arrow-redo-sharp"
                size={24}
                color="#949494"
                style={{ marginRight: 10 }}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default PostNavigator;
