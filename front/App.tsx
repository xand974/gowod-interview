import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./context/store";
import MainRoutes from "./components/core/MainRoutes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "react-native-gesture-handler";

export default function App() {
  const LOCAL_SYSTEM_IP_ADDRESS = "192.168.1.69";
  const PORT = "3000";

  const client = new ApolloClient({
    uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaProvider>
          <MainRoutes></MainRoutes>
        </SafeAreaProvider>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
