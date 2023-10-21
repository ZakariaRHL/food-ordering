import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 33.595063,
    longitude: -7.618343,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View className="flex-1">
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          const point = details.geometry.location;
          console.log("point", point);
          console.log(data, details);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_API_KEY,
          language: "en",
        }}
        styles={{
          container: {
            zIndex: 1,
          },
        }}
        onFail={(error) => console.log(error)}
        fetchDetails={true}
      />
      <MapView className="flex-1" initialRegion={location} zoomEnabled={true} />
      <View className="absolute w-full items-center justify-center">
        <TouchableOpacity
          className="w-11/12 bg-primary rounded-lg p-3 items-center"
          style={{ bottom: 0, top: 610 }}
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white text-lg font-medium">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapScreen;
