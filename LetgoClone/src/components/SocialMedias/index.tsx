import React from "react";
import { View, Text } from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
const SocialMediaContainer = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: 40,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginRight: 12,
      }}
    >
      {props.children}
    </View>
  );
};
function index() {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          marginBottom: 12,
          fontSize: 16,
          color: "#424242",
        }}
      >
        Bu ilanı paylaş
      </Text>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <SocialMediaContainer color="#60e14a">
          <MaterialCommunityIcons name="chat" size={24} color={"white"} />
        </SocialMediaContainer>
        <SocialMediaContainer color="#56acee">
          <FontAwesome5 name="twitter" size={20} color={"white"} />
        </SocialMediaContainer>
        <SocialMediaContainer color="#5ebe4b">
          <FontAwesome5 name="whatsapp" size={23} color={"white"} />
        </SocialMediaContainer>
        <SocialMediaContainer color="#7fac53">
          <AntDesign name="link" size={20} color={"white"} />
        </SocialMediaContainer>
        <SocialMediaContainer color="#747474">
          <Entypo name="dots-three-horizontal" size={20} color={"white"} />
        </SocialMediaContainer>
      </View>
      <View
        style={{
          marginTop: "7%",
          marginBottom: "12%",
          borderWidth: 1.2,
          borderColor: "#ff3e55",
          height: 44,
          borderRadius: 22,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ff3e55" }}>
          İlani şikayet et
        </Text>
      </View>
    </View>
  );
}

export default index;
