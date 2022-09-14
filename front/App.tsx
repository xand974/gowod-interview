import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./context/store";
import MainRoutes from "./components/core/MainRoutes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainRoutes></MainRoutes>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
