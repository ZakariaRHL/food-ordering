import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../HomeStack/HomeStack";
import CustomeHeader from "../../Component/CustomeHeader/CustomeHeader";

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ header: () => <CustomeHeader /> }}>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
