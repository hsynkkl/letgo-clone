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
import { Category, Filtering } from "../../models";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
function index({ category }: { category: Category }) {
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
      <View style={[{ backgroundColor: "#616161" }, styles.filteringBadge]}>
        <Image
          source={category.src}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginRight: 4,
            marginLeft: -3,
          }}
        />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>
          {category.name}
        </Text>
        <Feather
          style={{ marginLeft: 4 }}
          name="chevron-down"
          size={20}
          color={"#818181"}
        />
      </View>
      {filtering.map((item: Filtering) => (
        <View
          key={item.id}
          style={[{ backgroundColor: "#e5e5e5" }, styles.filteringBadge]}
        >
          <Text style={{ fontWeight: "600", color: "#424242" }}>
            {item.name}
          </Text>
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
