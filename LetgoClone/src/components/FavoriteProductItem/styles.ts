import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  favorite: {
    width: width * 0.29,
  },
  favoriteView: {
    width: width * 0.27,
    height: width * 0.27,
  },
  favoriteImage: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 10,
  },
  labeledFav: {
    position: "absolute",
    right: -25,
    top: 12,
    paddingVertical: 3,
    paddingHorizontal: 20,
    backgroundColor: "white",
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  //*******************//
  main: {
    width: width * 0.46,
    height: width * 0.46,
    alignItems: "center",
  },
  mainView: {
    width: width * 0.42,
    height: width * 0.42,
  },
  mainImage: {
    width: width * 0.43,
    height: width * 0.43,
    borderRadius: 12,
  },
});
export default styles;
