import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "96%",
    marginLeft: "4%",
  },
  titleProduct: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
    marginRight: "4%",
  },
  topicTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f24e61",
  },
  detailContainer: { flexDirection: "row", alignItems: "center" },
});
export default styles;
