import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { DataStore } from "aws-amplify";
import MessageNotification from "../../components/MessageNotification";
import CategoryFilter from "../../components/CategoryFilter";
import FavoriteProducts from "../../components/FavoriteProducts";
import MainProducts from "../../components/MainProducts";
import { Product } from "../../models/index";

function index() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await DataStore.query(Product);
        console.log(results);
        setProducts(results);
      } catch (error) {
        console.error("Error querying products:", error);
      }
    };
    fetchProducts();
  }, []);
  if (!products) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <MessageNotification />
      <CategoryFilter />
      <FavoriteProducts productArray={products} />
      <MainProducts mainProduct={products} header="Pendik" filtered={true} />
    </ScrollView>
  );
}

export default index;
