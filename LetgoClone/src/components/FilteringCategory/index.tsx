import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import filteringsData from "../../../assets/filterings";
import { Filtering } from "../../models";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
function index() {
  const [filtering, setFiltering] = useState<Filtering[]>([]);
  useEffect(() => {
    setFiltering(filteringsData);
    return () => {
      setFiltering([]);
    };
  }, []);
  return (
    <ScrollView
      style={{ marginHorizontal: 10, marginVertical: 12 }}
      horizontal={true}
      bounces={true}
      showsHorizontalScrollIndicator={false}
    >
      {filtering.map((item: Filtering) => (
        <View
          key={item.id}
          style={[{ backgroundColor: "#e5e5e5" }, styles.filteringBadge]}
        >
          <Text>{item.name}</Text>
          <Feather
            style={{ marginLeft: 4 }}
            name="chevron-down"
            size={20}
            color={"#818181"}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filteringBadge: {
    flexDirection: "row",
    paddingHorizontal: 6,
    height: height * 0.047,
    marginRight: 7,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 18,
  },
});
export default index;
