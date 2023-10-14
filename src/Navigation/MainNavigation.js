import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppBottomTab from "./appNavigation/AppBottomTab";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
};

export default MainNavigation;
