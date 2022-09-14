import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardIcon } from "./components/DashboardIcon";
import OverviewScreen from "../Overview/OverviewScreen";
import HomeScreen from "../Home/HomeScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import { DARK } from "assets/styles/@core.style";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function DashboardScreen() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: any }) => ({
        tabBarIcon: (props: any) => {
          return <DashboardIcon route={route} {...props} />;
        },
        tabBarStyle: {
          backgroundColor: `${DARK}`,
          borderTopColor: "transparent",
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="OverviewScreen" component={OverviewScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
