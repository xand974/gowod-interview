import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DashboardScreen from "screens/Dashboard/DashboardScreen";
import MobiTestScreen from "screens/MobiTest/MobiTestScreen";
import MobiScoreScreen from "screens/MobiScore/MobiScoreScreen";
import LoadingScreen from "screens/Loading/LoadingScreen";

export default function MainRoutes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen
              options={{ headerShown: false }}
              name="MobiTestScreen"
              component={MobiTestScreen}
            />
            <Stack.Screen
              name="MobiScoreScreen"
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
              component={MobiScoreScreen}
            />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
