import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { WHITE } from "assets/styles/@core.style";

const PercentageView = styled.View`
  border-color: ${WHITE};
  padding: 10px;
  border-width: 4px;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const PercentageText = styled.Text`
  color: ${WHITE};
  font-size: 20px;
  font-weight: bold;
`;

interface PercentageChartProp {
  total: number;
}
export default function PercentageChart({ total }: PercentageChartProp) {
  return (
    <PercentageView>
      <PercentageText>{total?.toFixed()}%</PercentageText>
    </PercentageView>
  );
}

const styles = StyleSheet.create({});
