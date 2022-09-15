import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { SET_DEVICE_ID } from "../../context/slices/app.slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/app.hooks";
import Stacks from "components/core/Stacks";

export default function MainRoutes() {
  const dispatch = useDispatch();
  const { deviceId } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (deviceId.length > 0) return;
    const id = new Date().getTime().toString(36);
    dispatch(SET_DEVICE_ID(id));
  }, [deviceId]);

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Stacks />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
