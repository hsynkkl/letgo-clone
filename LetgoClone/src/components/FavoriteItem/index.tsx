import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { Product } from "../../models";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
type favoriteItemProps = {
  product: Product;
};
const { height, width } = Dimensions.get("window");
function index({ product }: favoriteItemProps) {
  return (
    <View
      style={{
        padding: 14,
        borderWidth: 2,
        borderColor: "#eaeaea",
        borderRadius: 10,
        marginBottom: 14,
        height: height * 0.2,
        shadowColor: "gray",
        shadowOpacity: 0.12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "red",
          paddingBottom: 18,
          borderBottomWidth: 1.2,
          borderBottomColor: "#dcdee0",
        }}
      >
        <Image
          source={{ uri: product.image }}
          style={{ width: width * 0.17, height: width * 0.17, borderRadius: 8 }}
        />
        <View style={{ width: "80%", marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                style={{ marginTop: 3 }}
                name="turkish-lira"
                size={15}
                color={"black"}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 3,
                  fontSize: 14,
                }}
              >
                {product.price}
              </Text>
            </View>
            <Ionicons name="ios-trash-sharp" size={20} color={"#919191"} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#646464" }}>
            {product.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "78%",
          //   backgroundColor: "red",
          marginHorizontal: "11%",
          marginTop: 14,
          //   marginVertical: "10%",
        }}
      >
        <Text style={{ color: "#7a7a7a", fontWeight: "bold", fontSize: 14 }}>
          Paylaş
        </Text>
        <Text style={{ color: "#ff3e55", fontWeight: "bold", fontSize: 14 }}>
          Sohbet Et
        </Text>
      </View>
    </View>
  );
}

export default index;
