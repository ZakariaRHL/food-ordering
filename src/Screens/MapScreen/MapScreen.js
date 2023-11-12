import { View, Text, TouchableOpacity } from "react-native";
import React, { createRef, useEffect, useRef, useState } from "react";
import MapView, {
  AnimatedRegion,
  Marker,
  MarkerAnimated,
  Polygon,
} from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as geolib from 'geolib';
import * as Location from "expo-location";

const MapScreen = () => {
  const navigation = useNavigation();
  const mapRef = useRef(null);
  const [locationTest, setLocationTest] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isInside, setIsInside] = useState(false);

  const vertices = [
    { latitude: 33.703, longitude: -7.364 },
    { latitude: 33.702, longitude: -7.362 },
    { latitude: 33.701, longitude: -7.361 },
    { latitude: 33.700, longitude: -7.363 },
    { latitude: 33.701, longitude: -7.365 },
  ];


  const goToMyLocation = async (location) => {
    if (mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        zoom: 15,
      });
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      try {
        await Location.getCurrentPositionAsync({}).then((res) => {
          if (res.coords) {
            console.log("res get loc", res);
            setLocationTest(res);
            goToMyLocation(res);
          }
        });
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    })();
  }, []);

  console.log("location", locationTest);

  const coordinate = new AnimatedRegion({
    latitude: 33.70140000805669,
    longitude: -7.36299999767183,
  });

  useEffect(() => {
    coordinate
      .timing({
        latitude: 33.70140000805669,
        longitude: -7.36299999767183,
        duration: 3000,
        useNativeDriver: false,
      })
      .start();
  }, [locationTest]);

  useEffect(() => {
    let center = geolib.getCenter(vertices)
    let checkIfinside = geolib.isPointInPolygon(center, vertices)
    console.log("checkIfinside", checkIfinside)
    console.log("center", center)
  },[])

  return (
    <View className="flex-1">
      <GooglePlacesAutocomplete
        placeholder="Search..."
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
            flex: 0,
            zIndex: 1,
          },
          textInput: {
            backgroundColor: "#EEE9F0",
            padding: 8,
            borderRadius: 10,
          },
        }}
        onFail={(error) => console.log(error)}
        fetchDetails={true}
      />
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        showsUserLocation={true}
        // {"latitude": 33.701866334003874, "longitude": -7.361812491722766}
        initialRegion={{
          latitude: 33.70140000805669,
          longitude: -7.36299999767183,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polygon
          coordinates={vertices}
          fillColor="rgba(0, 200, 0, 0.5)"
          strokeWidth={2}
        />
        {locationTest && <MarkerAnimated coordinate={coordinate} />}
      </MapView>
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
