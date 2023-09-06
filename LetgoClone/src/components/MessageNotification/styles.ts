import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c2c",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  textMessage: {
    color: "white",
    fontSize: 13,
    marginLeft: 5,
  },
  iconRightArrow: {
    marginRight: 8,
  },
});
export default styles;
