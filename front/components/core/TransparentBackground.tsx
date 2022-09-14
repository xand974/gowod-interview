import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BLACK } from "assets/styles/@core.style";

export default function TransparentBackground() {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.2 }}
      end={{ x: 0.9, y: 0.9 }}
      locations={[0, 0.7]}
      colors={["transparent", BLACK]}
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
