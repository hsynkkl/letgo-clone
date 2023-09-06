import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollStyle: {
    height: height * 0.095,
    marginBottom: 22,
    marginTop: 20,
    paddingHorizontal: 8,
  },
  center: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  titleName: {
    fontSize: 11,
    color: "#767575",
    fontWeight: "bold",
  },
});
export default styles;
