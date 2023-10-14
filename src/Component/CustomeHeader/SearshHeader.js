import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const SearshHeader = () => {
  return (
    <View
      className="flex-row justify-between px-4 items-center"
      style={{ height: 60, backgroundColor: "white" }}
    >
      <View className="flex-row bg-grey items-center">
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={{ padding: 8 }}
        />
        <TextInput
          placeholder="Search..."
          className="p-3 "
          style={{ width: 260 }}
        />
      </View>
      <TouchableOpacity>
        <Ionicons name="options-outline" size={25} color={"#20E1B2"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearshHeader;
