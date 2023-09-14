import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
function index(props) {
  const [product, setProduct] = useState<Product>(props.route.params.product);

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      {/*image carousel */}
      <ImageCarousel images={product.images} />
    </ScrollView>
  );
}

export default index;
