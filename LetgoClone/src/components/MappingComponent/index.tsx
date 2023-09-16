import React from "react";
import { View, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const { width, height } = Dimensions.get("window");
function index() {
  return (
    <View style={{}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          height: height * 0.18,
          borderRadius: 12,
          marginTop: 19,
        }}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      />
      <View
        style={{
          height: height * 0.044,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          backgroundColor: "white",
          marginTop: -height * 0.04,
          borderBottomWidth: 0.4,
          borderRightWidth: 0.3,
          borderLeftWidth: 0.3,
          borderColor: "#a6a6a6",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingHorizontal: 16 }}>34890,Pendik</Text>
      </View>
    </View>
  );
}

export default index;
