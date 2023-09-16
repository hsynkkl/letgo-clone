import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
function index({
  price,
  name,
  description,
}: {
  price: number;
  name: string;
  description?: string;
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name={"turkish-lira"} size={24} color={"black"} />
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{price}</Text>
        </View>
        <View
          style={{
            width: 42,
            height: 42,
            backgroundColor: "#f1f1f1",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 21,
          }}
        >
          <AntDesign name="heart" size={24} color={"#9e9e9e"} />
        </View>
      </View>
      <Text style={{ fontSize: 22, fontWeight: "600", marginTop: 6 }}>
        {name}
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="local-fire-department"
            size={20}
            color={"#f24e61"}
          />
          <Text style={{ color: "#f24e61", marginLeft: 3 }}>58 dk</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "16%",
            paddingHorizontal: 7,
            backgroundColor: "#f3f3f3",
            justifyContent: "space-around",
            paddingVertical: 4,
            borderRadius: 14,
          }}
        >
          <AntDesign name="eye" color={"#9e9e9e"} size={18} />
          <Text style={{ color: "#9e9e9e" }}>14</Text>
        </View>
      </View>
      <Text style={{ marginTop: 25 }}>{description}</Text>
    </View>
  );
}
//f24e61
export default index;
