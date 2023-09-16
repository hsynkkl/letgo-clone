import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import MappingComponent from "../../components/MappingComponent";
function index(props) {
  const [product, setProduct] = useState<Product>(props.route.params.product);

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      {/*image carousel */}
      <ImageCarousel images={product.images} />
      <View style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
        <DetailsTextBox
          price={product.price}
          name={product.name}
          description={product.description}
        />
        <SellerProfile averageRating={product.rating} />
        <MappingComponent />
      </View>
    </ScrollView>
  );
}

export default index;
