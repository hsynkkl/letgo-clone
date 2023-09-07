import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Product } from "../../models";
import { AntDesign } from "@expo/vector-icons";
import FavoriteProductItem from "../FavoriteProductItem";
type mainProductProps = {
  mainProduct: Product[];
  header: string;
  filtered: boolean;
};
function index({ mainProduct, header, filtered }: mainProductProps) {
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProduct}>
        <Text style={!filtered ? styles.topicTitleFiltered : styles.topicTitle}>
          {header}
        </Text>
        {filtered && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.detailTitle}>Düzelt</Text>
            <AntDesign name="right" size={18} color="#f24e61" />
          </View>
        )}
      </View>
      <View style={styles.listContainer}>
        {mainProduct.map((item) => {
          return (
            <FavoriteProductItem product={item} prodType="main" key={item.id} />
          );
        })}
      </View>
    </View>
  );
}

export default index;
