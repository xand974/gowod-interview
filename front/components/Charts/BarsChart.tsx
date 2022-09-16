import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { LIGHT_GRAY, LIGHT_GREEN, WHITE } from "assets/styles/@core.style";
import SimpleIcon from "components/Icons/SimpleIcon";
import SvgIcon from "../Icons/SvgIcon";
import { getPercentageByName } from "../../helpers/utils.helpers";
import { PercentageChartModel } from "types";

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
  height: ${(props: {
    item: PercentageChartModel;
    id: number;
    detailed: boolean;
  }) => getPercentageByName(props.item.percentage, props.item.name)}%;
  width: ${(props) => (props.detailed ? "10px" : "3px")};
  background-color: ${LIGHT_GREEN};
  margin-right: ${(props) => props.id + 10}px;
  position: relative;
  left: ${(props) => (props.detailed ? "5px" : "10px")};
`;

const BarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const ChartNumberContainer = styled.View`
  width: auto;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const ChartNumber = styled.Text`
  color: ${WHITE};
  font-weight: 900;
  background: #000;
  border-radius: 3px;
`;
const InfoContainer = styled.View`
  margin-top: 10px;
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
  value: PercentageChartModel[];
  detailed?: boolean;
}
export default function BarsChart({ value, detailed = false }: BarsChartsProp) {
  return (
    <ChartsContainer detailed={detailed}>
      {value.map((item: PercentageChartModel, id) => (
        <BarContainer key={id}>
          {detailed && (
            <ChartNumberContainer>
              <ChartNumber>
                {getPercentageByName(item.percentage, item.name)}
              </ChartNumber>
            </ChartNumberContainer>
          )}
          <ChartsBar detailed={detailed} item={item} id={id}></ChartsBar>
          {detailed && (
            <InfoContainer>
              {/* <SvgIcon color={LIGHT_GRAY} type=""></SvgIcon> */}
              <InfoText>{item.name}</InfoText>
            </InfoContainer>
          )}
        </BarContainer>
      ))}
    </ChartsContainer>
  );
}

const styles = StyleSheet.create({});
