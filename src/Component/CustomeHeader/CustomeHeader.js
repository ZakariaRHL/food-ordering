import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import SearshHeader from "./SearshHeader";
import BottomSheetMod from "../BottomSheat/BottomSheetMod";

const CustomeHeader = ({ navigation }) => {
  const bottomSheetRef = useRef(null);

  const openModel = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={{ height: 100, backgroundColor: "white" }}>
      <BottomSheetMod ref={bottomSheetRef} />
      <SafeAreaView>
        <View className="flex-row justify-between items-center px-4">
          <View className="flex-row items-center">
            <Image
              source={require("./assest/bike.png")}
              style={{ width: 40 }}
              resizeMode="contain"
            />
            <TouchableOpacity className="ml-5" onPress={openModel}>
              <Text className="text-gray-400 ">Delivery . Now</Text>
              <View className="flex-row items-center">
                <Text className="font-semibold">London</Text>
                <Entypo name="chevron-down" size={24} color="#20E1B2" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity className="bg-lightGrey rounded-full p-2">
              <Ionicons name="person-outline" size={24} color="#20E1B2" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SearshHeader />
    </View>
  );
};

export default CustomeHeader;
