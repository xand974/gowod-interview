import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { LIGHT_GRAY, LIGHT_GREEN, WHITE } from "assets/styles/@core.style";
import SimpleIcon from "components/Icons/SimpleIcon";
import SvgIcon from "../Icons/SvgIcon";

const ChartsContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: ${(props: { detailed: boolean }) =>
    props.detailed ? "space-evenly" : "center"};
  height: 60px;
`;

const ChartsBar = styled.View`
  height: ${(props: { item: number; id: number; detailed: boolean }) =>
    props.item * 10}%;
  width: ${(props) => (props.detailed ? "10px" : "3px")};
  background-color: ${LIGHT_GREEN};
  margin-right: ${(props) => props.id + 10}px;
`;

const BarContainer = styled.View`
  align-items: center;
`;

const ChartNumber = styled.Text`
  color: ${WHITE};
  font-weight: 900;
  background: #000;
  border-radius: 3px;
  position: relative;
  right: 5px;
`;
const InfoContainer = styled.View`
  margin-top: 15px;
  align-items: center;
`;

const InfoText = styled.Text`
  color: ${LIGHT_GRAY};
  font-size: 10px;
`;

const SvgIconContainer = styled.View`
  width: 100%;
  height: 100%;
`;

interface BarsChartsProp {
  value: number[];
  detailed?: boolean;
}
export default function BarsChart({ value, detailed = false }: BarsChartsProp) {
  return (
    <ChartsContainer detailed={detailed}>
      {value.map((item, id) => (
        <BarContainer key={id}>
          {detailed && <ChartNumber>{item * 10}</ChartNumber>}
          <ChartsBar detailed={detailed} item={item} id={id}></ChartsBar>
          {detailed && (
            <InfoContainer>
              <SvgIcon type=""></SvgIcon>
              <InfoText>epaules</InfoText>
            </InfoContainer>
          )}
        </BarContainer>
      ))}
    </ChartsContainer>
  );
}

const styles = StyleSheet.create({});
