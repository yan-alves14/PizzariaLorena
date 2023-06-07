import React from "react";
import { FlatList, Dimensions, View } from "react-native";

const {width} = Dimensions.get("window");

export default function Carrossel({data}){
    return (
        <FlatList
            pagingEnabled
            data={data}
            snapToAlignment="start"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item)}
            horizontal
            renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: item,
                            height: width / 2.6,
                        width: width
                    }}
                />
            )}
        />
    );
};