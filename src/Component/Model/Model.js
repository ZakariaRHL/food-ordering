import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./slice/filter-slice";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import categories from "../../assets/data/filter.json";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Model = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(categories);

  const clearAll = () => {
    const updateItems = items.map((item) => {
      item.checked = false;
    });
    setItems(updateItems);
  };

  const ItemRender = ({ title, index, item }) => {
    return (
      <View className="m-2 flex-row justify-between">
        <Text className="text-lg font-semibold ml-4">{title}</Text>
        <BouncyCheckbox
          isChecked={items[index].checked}
          onPress={() => {
            const checked = items[index].checked;
            const updateItems = items.map((item) => {
              if (item.name === items[index].name) {
                item.checked = !checked;
              }
              return item;
            });
            setItems(updateItems);
          }}
          unfillColor="white"
          disableBuiltInState
          fillColor="#20E1B2"
        />
      </View>
    );
  };

  return (
    <View className="flex-1 bg-lightGrey">
      <TouchableOpacity
        className="items-center justify-center mt-2"
        onPress={clearAll}
      >
        <Text className="text-primary text-lg">Clear All</Text>
      </TouchableOpacity>
      <ScrollView className="mt-3 flex-1">
        <TouchableOpacity className="flex-row bg-lightGrey justify-between p-2 items-center border-b-2 mx-4 border-gray-200">
          <View className="flex-row items-center" style={{ gap: 15 }}>
            <FontAwesome name="sort-amount-asc" size={20} color="gray" />
            <Text>Sort</Text>
          </View>
          <Entypo name="chevron-small-right" size={28} color="#20E1B2" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row mt-2 bg-lightGrey justify-between p-2 items-center border-b-2 mx-4 border-gray-200">
          <View className="flex-row items-center" style={{ gap: 15 }}>
            <Ionicons name="md-fast-food-outline" size={24} color="gray" />
            <Text>Sort</Text>
          </View>
          <Entypo name="chevron-small-right" size={28} color="#20E1B2" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row mt-2 bg-lightGrey justify-between p-2 items-center border-b-2 mx-4 border-gray-200">
          <View className="flex-row items-center" style={{ gap: 15 }}>
            <FontAwesome name="sort-amount-asc" size={20} color="gray" />
            <Text>Sort</Text>
          </View>
          <Entypo name="chevron-small-right" size={28} color="#20E1B2" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-lightGrey mt-2 justify-between p-2 items-center border-b-2 mx-4 border-gray-200">
          <View className="flex-row items-center" style={{ gap: 15 }}>
            <FontAwesome name="sort-amount-asc" size={20} color="gray" />
            <Text>Sort</Text>
          </View>
          <Entypo name="chevron-small-right" size={28} color="#20E1B2" />
        </TouchableOpacity>
        <View>
          <FlatList
            data={items}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            renderItem={({ item, index }) => (
              <ItemRender
                title={item.name}
                item={item}
                key={index}
                index={index}
              />
            )}
          />
        </View>
      </ScrollView>
      <View
        className="absolute left-0 bottom-0 right-0 bg-white p-3 shadow-lg shadow-black flex-1"
        style={{ height: 110 }}
      >
        <TouchableOpacity className="bg-primary rounded-md p-4 items-center mt-2">
          <Text className="text-white">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Model;
