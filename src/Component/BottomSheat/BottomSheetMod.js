import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomSheetMod = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const navigation = useNavigation();

  const modelClose = useCallback(() => {
    ref.current?.close();
  }, []);

  const goMap = () => {
    modelClose();
    navigation.navigate("Map");
  };

  const renderBackDrop = useCallback((props) => {
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      {...props}
    />;
  }, []);

  return (
    <BottomSheetModal
      backgroundStyle={{ borderRadius: 0 }}
      ref={ref}
      overDragResistanceFactor={0}
      backdropComponent={renderBackDrop}
      snapPoints={snapPoints}
    >
      <View
        className="w-full flex-row items-center justify-center "
        style={{ gap: 40 }}
      >
        <TouchableOpacity
          className="bg-primary p-3 rounded-3xl items-center"
          style={{ width: 100 }}
        >
          <Text className="text-lightGrey">Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" bg-lightGrey p-3 rounded-3xl items-center"
          style={{ width: 100 }}
        >
          <Text className="text-primary">Pickup</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-lg font-bold mb-2 mt-2 p-2">Your Location</Text>
        <TouchableOpacity
          className="w-full flex-row justify-between p-3 items-center bg-lightGrey border-y-2 border-gray-100"
          onPress={goMap}
        >
          <View className="flex-row items-center" style={{ gap: 20 }}>
            <EvilIcons name="location" size={30} color="black" />
            <Text>Location</Text>
          </View>
          <AntDesign name="right" size={24} color="#20E1B2" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-lg font-bold mb-2 mt-2 p-2">Arrival time</Text>
        <TouchableOpacity className="w-full flex-row justify-between p-3 items-center bg-lightGrey border-y-2 border-gray-100">
          <View className="flex-row items-center" style={{ gap: 20 }}>
            <Ionicons name="time-outline" size={28} color="black" />
            <Text>Time</Text>
          </View>
          <AntDesign name="right" size={24} color="#20E1B2" />
        </TouchableOpacity>
      </View>
      <View className="w-full items-center">
        <TouchableOpacity
          className="bg-primary mt-4 p-4 w-4/5 items-center rounded-lg"
          onPress={modelClose}
        >
          <Text className="text-white">Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheetMod;
