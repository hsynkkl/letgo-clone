import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import HomeNavigator from "./HomeNavigator";
import {
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import PostNavigator from "./PostNavigator";
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: "#f32f5a",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
          borderWidth: 5,
          marginTop: -15,
          borderColor: "white",
        }}
      >
        <FontAwesome name="camera" size={20} color="white" />
        <Text style={{ color: "white", marginTop: 2, fontWeight: "600" }}>
          Sat
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#f24e61",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 55,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bildirimler"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: "#f24e61",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: -9,
                  top: -4,
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sat"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Sohbet"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-processing"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="İlanlarım"
        component={PostNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore1" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
