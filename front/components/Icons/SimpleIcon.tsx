import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

export type CtmIconHost =
  | "material"
  | "material-community"
  | "simple-line-icon"
  | "zocial"
  | "font-awesome"
  | "octicon"
  | "ionicon"
  | "foundation"
  | "evilicon"
  | "entypo"
  | "antdesign"
  | "font-awesome-5"
  | "ant-design";

type SimpleIconType = {
  type: CtmIconHost;
  name: string;
  size?: number;
  color?: string;
};
export default function SimpleIcon({
  type,
  name,
  size,
  color,
}: SimpleIconType) {
  return (
    <Icon
      type={type}
      name={name}
      size={size ?? 20}
      color={color ?? "#d1d1d1"}
    />
  );
}

const styles = StyleSheet.create({});
