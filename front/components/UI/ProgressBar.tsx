import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { LIGHT_BLUE, DARK } from "assets/styles/@core.style";
import { useState, useEffect } from "react";

const ProgressBarContainer = styled.View`
  margin-bottom: 10px;
  position: relative;
`;

const ProgressBarInactive = styled.View`
  width: 100%;
  height: 5px;
  background-color: ${DARK};
`;

const ProgressBarActive = styled.View`
  width: ${(props: { percentage: number }) => `${props.percentage}%`};
  height: 5px;
  position: absolute;
  background-color: ${LIGHT_BLUE};
`;

interface ProgressBarProp {
  activeValue: number;
  reference: number;
}
export default function ProgressBar({
  activeValue,
  reference,
}: ProgressBarProp) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(() => {
      return (activeValue / reference) * 100;
    });
  }, [activeValue]);

  return (
    <ProgressBarContainer>
      <ProgressBarInactive></ProgressBarInactive>
      <ProgressBarActive percentage={percentage}></ProgressBarActive>
    </ProgressBarContainer>
  );
}

const styles = StyleSheet.create({});
