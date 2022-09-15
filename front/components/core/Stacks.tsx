import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DashboardScreen from "screens/Dashboard/DashboardScreen";
import MobiTestScreen from "screens/MobiTest/MobiTestScreen";
import MobiScoreScreen from "screens/MobiScore/MobiScoreScreen";
import LoadingScreen from "screens/Loading/LoadingScreen";
import { useDispatch } from "react-redux";
import { GET_ALL_TESTS, GET_MOBI_TESTS } from "Graphql/queries";
import { SET_TESTS } from "context/slices/mobi-test.slice";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../hooks/app.hooks";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../../types/app.types";

export default function Stacks() {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const { deviceId } = useAppSelector((state) => state.app);
  const { tests } = useAppSelector((state) => state.mobiTests);
  const navigation = useNavigation<AppNavigationProp>();

  const { loading, data } = useQuery(GET_MOBI_TESTS, {
    variables: { deviceId: deviceId },
  });

  useEffect(() => {
    if (!data?.getTestsById) return;
    dispatch(SET_TESTS([...data.getTestsById]));
  }, [data]);

  console.log(tests);

  return (
    <Stack.Navigator
      initialRouteName={
        tests.length !== 0 ? "DashboardScreen" : "MobiTestScreen"
      }
    >
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
