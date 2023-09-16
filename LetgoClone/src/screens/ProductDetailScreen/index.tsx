import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailsTextBox from "../../components/DetailsTextBox";
import SellerProfile from "../../components/SellerProfile";
import SocialMedias from "../../components/SocialMedias";
import MappingComponent from "../../components/MappingComponent";
import MessageBox from "../../components/MessageBox";
function index(props) {
  const [product, setProduct] = useState<Product>(props.route.params.product);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: "white", flex: 1, marginBottom: "32%" }}
      >
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
          <SocialMedias />
        </View>
      </ScrollView>
      <MessageBox />
    </View>
  );
}

export default index;
