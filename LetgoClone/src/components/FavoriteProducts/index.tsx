import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import productsAssets from "../../../assets/products";
import { Product } from "../../models";
import FavoriteProductItem from "../FavoriteProductItem";
type FavoriteProductType = {
  productArray: Product[];
};
function index({ productArray }: FavoriteProductType) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsAssets);
  }, []);

  return (
    <View style={styles.container}>
      {/*Render header */}
      <View style={styles.titleProduct}>
        <Text style={styles.topicTitle}>Vitrin İlanları</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Hepsini gör</Text>
          <AntDesign name="right" size={18} color="#f24e61" />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        {productArray.map((item) => {
          return (
            <FavoriteProductItem
              prodType="favorite"
              key={item.id}
              product={item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default index;
