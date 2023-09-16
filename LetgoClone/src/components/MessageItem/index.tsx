import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Message } from "../../models";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

type MessageItemProps = {
  item: Message;
};
function index({ item }: MessageItemProps) {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1.5,

          borderColor: "#e2e2e2",
        }}
      >
        <View style={styles.messageItem}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 85, height: 85, borderRadius: 12 }}
            />
            <View
              style={{
                height: 36,
                width: 36,
                borderRadius: 18,
                backgroundColor: "#a3c372",
                position: "absolute",
                bottom: 0,
                right: -18,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>H</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 15,
              paddingLeft: 5,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              {item.productName.length > 25
                ? item.productName.substring(0, 22) + "..."
                : item.productName}
            </Text>
            <Text style={{ color: "#8b8b8b", fontWeight: "500" }}>
              {item.date}
            </Text>
          </View>
          <Text style={{ paddingLeft: 5, marginTop: 5, fontSize: 15 }}>
            {item.sellerName}
          </Text>
          {item.situation == "Satıldı" ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <FontAwesome
                style={{ marginRight: 5, marginLeft: 5 }}
                name="times-circle"
                size={16}
                color={"#a0a0a0"}
              />
              <Text style={{ fontSize: 15, color: "#777777" }}>
                Artık mevcut değil
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <MaterialCommunityIcons
                style={{
                  marginRight: 5,
                  marginLeft: 5,
                  backgroundColor: "#f24e61",
                  borderRadius: 8,
                }}
                name="currency-usd"
                size={15}
                color={"white"}
              />
              <Text
                style={{ fontSize: 15, color: "#f24e61", fontWeight: "500" }}
              >
                Satıldı
              </Text>
            </View>
          )}
          <View></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  messageItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default index;
