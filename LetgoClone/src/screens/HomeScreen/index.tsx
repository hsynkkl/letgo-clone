import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import productsAssets from "../../../assets/products";
import { Product } from "../../models";
import MessageNotification from "../../components/MessageNotification";
import CategoryFilter from "../../components/CategoryFilter";
import FavoriteProducts from "../../components/FavoriteProducts";
import MainProducts from "../../components/MainProducts";
function index() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsAssets);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <MessageNotification />
      <CategoryFilter />
      <FavoriteProducts />
      <MainProducts mainProduct={products} />
    </ScrollView>
  );
}

export default index;
