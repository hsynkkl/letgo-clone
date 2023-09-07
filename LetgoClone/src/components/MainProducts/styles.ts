import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  productsContainer: {
    width: "92%",
    marginHorizontal: "4%",
  },
  topicTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  topicTitleFiltered: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titleProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f24e61",
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "100%",
  },
});
export default styles;
