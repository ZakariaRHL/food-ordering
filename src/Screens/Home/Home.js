import { View, Text, ScrollView } from "react-native";
import React from "react";
import Categories from "../../Component/Categories/Categories";

const Home = () => {
  return (
    <ScrollView className="bg-green-400 flex-1" style={{ paddingTop: 50 }}>
      <Categories />
    </ScrollView>
  );
};

export default Home;
