import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { categories } from "../../assets/data/home";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ padding: 10 }}
    >
      {categories.map((item, index) => {
        return (
          <View
            className="flex-col bg-white shadow-md shadow-grey"
            key={index}
            style={{ width: 100, height: 100, margin: 6 }}
          >
            <Image
              source={item.img}
              resizeMode="contain"
              style={{ width: 100 }}
            />
            <Text className=" font-medium p-2">{item.text}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
