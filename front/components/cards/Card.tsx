import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MAIN_BLUE } from "assets/styles/@core.style";
import { useState } from "react";
import { LIGHT_GREEN } from "assets/styles/@core.style";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types/app.types";
import styled from "styled-components/native";
import PercentageChart from "../Charts/PercentageChart";
import BarsChart from "../Charts/BarsChart";

const ButtonCard = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${MAIN_BLUE};
  padding: 20px 10px 0 10px;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
`;

const CardWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const ShrinkCardContent = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export default function Card() {
  const [value, setValue] = useState([10, 4, 3, 9, 5, 3]);
  const navigation = useNavigation<AppNavigationProp>();

  const goToMobilityTest = () => {
    navigation.navigate("MobiScoreScreen");
  };

  return (
    <ButtonCard onPress={goToMobilityTest}>
      {/*  header */}
      <Title>Score mobilité</Title>
      <CardWrapper>
        <ShrinkCardContent>
          {/* Percentage */}
          <PercentageChart></PercentageChart>
          {/*  Charts */}
          <BarsChart value={value}></BarsChart>
        </ShrinkCardContent>
      </CardWrapper>
    </ButtonCard>
  );
}

const styles = StyleSheet.create({});
