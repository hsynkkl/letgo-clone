import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import products from "../../../assets/products";
import FavoriteItem from "../../components/FavoriteItem";
import { Product } from "../../models";
function index() {
  const [favoriteProducts, setFavoriteProduct] = useState<Product[]>([]);
  const [headerTexts, setHeaderTexts] = useState<string[]>([
    "Favoriler",
    "Satıyor",
    "Süresi Dolmuş",
    "Satıldı",
  ]);
  useEffect(() => {
    setFavoriteProduct(products);
    return () => {
      setFavoriteProduct([]);
    };
  }, []);
  return (
    <View style={{ padding: 13 }}>
      <FlatList
        data={favoriteProducts}
        renderItem={({ item, index }) => {
          return <FavoriteItem product={item} />;
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 5,
                marginBottom: 15,
                backgroundColor: "#f1f1f1",
              }}
            >
              {headerTexts.map((item, index) => {
                return (
                  <View
                    style={{
                      paddingVertical: 10,
                      borderBottomColor: "#ff3e55",
                      borderBottomWidth: index === 0 ? 3 : 0,
                    }}
                  >
                    <Text
                      style={{
                        color: index === 0 ? "#ff3e55" : "#797979",
                        fontWeight: index === 0 ? "bold" : "500",
                        fontSize: 15,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        }}
      />
    </View>
  );
}

export default index;
