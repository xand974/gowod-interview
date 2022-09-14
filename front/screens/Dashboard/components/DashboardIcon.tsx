import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SimpleIcon from "../../../components/Icons/SimpleIcon";
import { LIGHT_GRAY, LIGHT_BLUE } from "../../../assets/styles/@core.style";
import styled from "styled-components/native";

interface DashboardIconProp {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}

const IconsContainer = styled.View`
  position: relative;
  width: 100%;
  height: 70%;
`;

const FocusDot = styled.Text`
  position: absolute;
  bottom: -10px;
  color: ${(props: Partial<DashboardIconProp>) =>
    props.focused ? "transparent" : LIGHT_BLUE};
  left: -50%;
  transform: translateX(-5px);
`;

export const DashboardIcon = ({
  route,
  focused,
  color,
  size,
}: DashboardIconProp) => {
  let iconName = "";
  color = focused ? LIGHT_BLUE : LIGHT_GRAY;

  switch (route.name) {
    case "OverviewScreen":
      iconName = "ios-grid-outline";
      size = 25;
      break;
    case "HomeScreen":
      iconName = "ios-play-circle-outline";
      size = 30;
      break;
    case "SettingsScreen":
      iconName = "md-settings-outline";
      size = 25;
      break;
  }
  return (
    <IconsContainer>
      <SimpleIcon type="ionicon" name={iconName} size={size} color={color} />
      <FocusDot focused={focused}>{focused}•</FocusDot>
    </IconsContainer>
  );
};

const styles = StyleSheet.create({});
