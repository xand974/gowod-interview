import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  OverviewScreen: undefined;
  MobiTestScreen: undefined;
  SettingsScreen: undefined;
  HomeScreen: undefined;
  MobiScoreScreen: undefined;
  GetStartedScreen: undefined;
  TestScreen: undefined;
  DashboardScreen: undefined;
  LoadingScreen: undefined;
};

export type AppNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
