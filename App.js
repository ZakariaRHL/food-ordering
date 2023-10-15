import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/Navigation/MainNavigation";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler'


export default function App() {
  return (
  <>
  <GestureHandlerRootView style={{ flex: 1 }}>
  <BottomSheetModalProvider>
  <MainNavigation />
  </BottomSheetModalProvider>
  </GestureHandlerRootView>
  </>
  );
}
