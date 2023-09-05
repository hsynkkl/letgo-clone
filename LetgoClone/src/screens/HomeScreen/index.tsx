import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
function index() {
  return (
    <View style={styles.container}>
      {/*Render header */}
      <View style={styles.titleProduct}>
        <Text style={styles.topicTitle}>Vitrin İlanları</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>Hepsini gör</Text>
          <AntDesign name="right" size={20} color="#f24e61" />
        </View>
      </View>
      <ScrollView bounces={true} horizontal={true}>
        <Text>hsyn</Text>
      </ScrollView>
    </View>
  );
}

export default index;
