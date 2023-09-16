import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";

function index({ averageRating }: { averageRating: number }) {
  return (
    <View
      style={{
        marginTop: 22,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            style={{ height: 46, width: 46, borderRadius: 23 }}
            source={require("../../../assets/hsynkkl.png")}
          />
          <AntDesign
            name="checkcircle"
            color={"#a5cc71"}
            size={16}
            style={{ position: "absolute", bottom: -4, right: 1 }}
          />
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>Hüseyin Kakıl</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 3,
            }}
          >
            {[0, 0, 0, 0, 0].map((el, i) => {
              return (
                <FontAwesome
                  key={i}
                  name="star"
                  size={14}
                  color={i < Math.floor(averageRating) ? "#ffd204" : "#dfdfdf"}
                  style={{ marginRight: 2 }}
                />
              );
            })}
          </View>
        </View>
      </View>
      <Feather name="chevron-right" size={20} color={"gray"} />
    </View>
  );
}

export default index;
