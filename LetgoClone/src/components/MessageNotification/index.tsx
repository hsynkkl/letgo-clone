import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import styles from "./styles";
//<Entypo name="chevron-right" size={24} color="black" />
//<MaterialCommunityIcons name="message-processing" size={24} color="black" />
function index() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          name="message-processing"
          size={24}
          color="#757575"
        />
        <Text style={styles.textMessage}>Mesaj Bildirimlerini Aç</Text>
      </View>
      <Entypo
        name="chevron-right"
        size={30}
        color="#969696"
        style={styles.iconRightArrow}
      />
    </View>
  );
}

export default index;
