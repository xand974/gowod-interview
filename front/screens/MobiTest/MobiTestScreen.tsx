import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./Steps/GetStartedScreen";
import TestScreen from "./Steps/TestScreen";

export default function MobiTestScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="GetStartedScreen">
      <Stack.Screen
        component={GetStartedScreen}
        name="GetStartedScreen"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen component={TestScreen} name="TestScreen"></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
