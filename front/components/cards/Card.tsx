import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MAIN_BLUE } from "assets/styles/@core.style";
import { useState, useEffect } from "react";
import { LIGHT_GREEN } from "assets/styles/@core.style";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types/app.types";
import styled from "styled-components/native";
import PercentageChart from "../Charts/PercentageChart";
import BarsChart from "../Charts/BarsChart";
import { PercentageChartModel } from "types";
import { MobiTestModel } from "gowod_interview_types";
import { useAppSelector } from "hooks/app.hooks";
import { getPercentageFromTotal } from "helpers/utils.helpers";
import { MAX_TEST_SCORES } from "mock/data";

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
  const { tests } = useAppSelector((state) => state.mobiTests);
  const [lastTest, setLastTest] = useState({} as MobiTestModel);
  const [value, setValue] = useState([] as PercentageChartModel[]);
  const navigation = useNavigation<AppNavigationProp>();

  const goToMobilityTest = () => {
    navigation.navigate("MobiScoreScreen");
  };

  useEffect(() => {
    const lastElementIndex = tests.length - 1;
    setLastTest(tests[lastElementIndex]);
  }, [tests.length]);

  useEffect(() => {
    if (!lastTest || Object.keys(lastTest).length === 0) return;

    setValue(() => {
      const body = lastTest.body;

      let bodyToArray = [];
      const keys = ["ankles", "hips", "overhead", "postchain", "shoulders"];
      for (const [key, val] of Object.entries(body)) {
        if (!keys.includes(key)) continue;
        bodyToArray.push({ name: key, percentage: val });
      }
      return [...bodyToArray] as PercentageChartModel[];
    });
  }, [lastTest, Object.keys(lastTest ?? {}).length === 0]);

  return (
    <ButtonCard onPress={goToMobilityTest}>
      {/*  header */}
      <Title>Score mobilité</Title>
      <CardWrapper>
        <ShrinkCardContent>
          {/* Percentage */}
          <PercentageChart
            total={getPercentageFromTotal(
              lastTest?.totalPoints,
              MAX_TEST_SCORES.global
            )}
          ></PercentageChart>
          {/*  Charts */}
          <BarsChart value={value}></BarsChart>
        </ShrinkCardContent>
      </CardWrapper>
    </ButtonCard>
  );
}

const styles = StyleSheet.create({});
