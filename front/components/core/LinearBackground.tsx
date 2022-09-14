import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MAIN_BLUE, DARK } from "assets/styles/@core.style";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearBackground() {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0.9, y: 0.6 }}
      locations={[0, 0.7]}
      colors={[MAIN_BLUE, DARK]}
      style={styles.linear__container}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  linear__container: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
