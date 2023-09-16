import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const MessageBox = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        marginLeft: 8,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff3e55",

        height: 35,
      }}
    >
      <Text
        style={{
          paddingHorizontal: 10,
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
function index() {
  const [searchValue, setSearchValue] = useState<string>("Hala müsait mi?");
  const [messages, setMessage] = useState<string[]>([
    "Hala satılık mı?",
    "Fiyatta pazarlık payı var mı?",
    "Ne durumda?",
  ]);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: height * 0.18,
        backgroundColor: "white",
        // shadowColor: "gray",
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      <View>
        <ScrollView
          horizontal={true}
          bounces={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16, marginLeft: 5 }}
        >
          {messages.map((item) => {
            return <MessageBox title={item} />;
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 13,
          marginLeft: 10,
        }}
      >
        <TextInput
          style={{
            height: 45,
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
            flex: 1,
            paddingLeft: 15,
          }}
          onChangeText={setSearchValue}
          value={searchValue}
        />
        <Text
          style={{ fontWeight: "bold", color: "#ff3e55", marginHorizontal: 15 }}
        >
          Gönder
        </Text>
      </View>
    </View>
  );
}

export default index;
