import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Text, Image } from "react-native";
import categoriesData from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";
function index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    setCategories(categoriesData);
    return () => {
      setCategories([]);
    };
  }, []);
  return (
    <ScrollView
      style={styles.scrollStyle}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      {categories.map((item: Category) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoryFiltering")}
            style={styles.center}
          >
            <Image source={item.src} style={styles.image} />
            <Text style={styles.titleName}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

export default index;
