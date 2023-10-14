import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home/Home";

const HomeStackContainer = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackContainer.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackContainer.Screen name="Home" component={Home} />
    </HomeStackContainer.Navigator>
  );
};

export default HomeStack;
