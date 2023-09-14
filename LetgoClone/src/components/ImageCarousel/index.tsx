import React, { useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
function index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              style={{
                width: width,
                height: height * 0.4,
                resizeMode: "stretch",
              }}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotsView}>
        {images.map((image, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? "#fffffd" : "#cbcad0",
                },
              ]}
            ></View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dotsView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    position: "absolute",
    right: 12,
    bottom: 12,
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 6,
    marginHorizontal: 8,
  },
});
export default index;
