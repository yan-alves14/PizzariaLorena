import React, { useEffect, useRef } from "react";
import { FlatList, Dimensions, View, Image } from "react-native";

const { width } = Dimensions.get("window");

export default function Carrossel({ data }) {
  const flatListRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      currentIndexRef.current = nextIndex;
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <FlatList
      ref={flatListRef}
      pagingEnabled
      data={data}
      snapToAlignment="start"
      scrollEventThrottle={30}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View
          style={{
            width: width,
          }}
        >
          <Image
            source={item.image} // Removendo o objeto extra
            style={{ width: width, height: width / 1.9 }}
          />
        </View>
      )}
    />
  );
}
