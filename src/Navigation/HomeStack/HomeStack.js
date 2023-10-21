import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home/Home";
import Model from "../../Component/Model/Model";

const HomeStackContainer = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackContainer.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackContainer.Screen name="HomeContainer" component={Home} />
      <HomeStackContainer.Group screenOptions={{ presentation: "modal" }}>
        <HomeStackContainer.Screen name="MyModal" component={Model} />
      </HomeStackContainer.Group>
    </HomeStackContainer.Navigator>
  );
};

export default HomeStack;
