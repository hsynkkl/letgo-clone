import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailScreen from "../screens/CategoryFilterScreen";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
const MainHeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity>
        <Image
          source={require("../../assets/hsynkkl.png")}
          style={{ width: 38, height: 38, borderRadius: 20 }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          backgroundColor: "#e5e5e5",
          marginHorizontal: 10,
          height: 35,
          textAlign: "center",
          fontSize: 15,
          borderRadius: 10,
        }}
        placeholder="Ara.."
      />
      <Text style={{ color: "#ff184d", fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  );
};
const CategoryHeaderComponent = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={24} color="#989898" />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          backgroundColor: "#e5e5e5",
          marginHorizontal: 10,
          height: 35,
          textAlign: "center",
          fontSize: 15,
          borderRadius: 10,
        }}
        placeholder="Ara.."
      />
      <Text style={{ color: "#ff184d", fontSize: 18 }}>Filtrele (1)</Text>
    </SafeAreaView>
  );
};
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <MainHeaderComponent /> }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{ header: () => <CategoryHeaderComponent /> }}
      />
      <Stack.Screen
        name="CategoryFiltering"
        component={CategoryFilterScreen}
        options={{ header: () => <CategoryHeaderComponent /> }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
