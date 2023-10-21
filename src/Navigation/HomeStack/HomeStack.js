import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home/Home";
import Model from "../../Component/Model/Model";
import MapScreen from "../../Screens/MapScreen/MapScreen";

const HomeStackContainer = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackContainer.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackContainer.Screen name="HomeContainer" component={Home} />
      <HomeStackContainer.Group screenOptions={{ presentation: "modal" }}>
        <HomeStackContainer.Screen
          name="Filter"
          component={Model}
          options={{ headerShown: true, headerTitle: "Filter" }}
        />
        <HomeStackContainer.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: true, headerTitle: "Select Location" }}
        />
      </HomeStackContainer.Group>
    </HomeStackContainer.Navigator>
  );
};

export default HomeStack;
