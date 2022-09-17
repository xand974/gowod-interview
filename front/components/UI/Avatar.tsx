import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { WHITE } from "assets/styles/@core.style";
import { DEFAULT_IMG } from "mock/data";

const TopInfosContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const RoundedImageContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 60px;
  margin-right: 10px;
`;

const RoundedImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`;

const TextInfosContainer = styled.View`
  flex: 4;
`;

const TextInfoTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: ${WHITE};
  margin-bottom: 3px;
`;
const TextInfoDescription = styled.Text`
  color: ${WHITE};
  font-weight: 200;
`;

interface AvatarProp {
  data: {
    name: string;
    description: string;
  };
}
export default function Avatar({ data }: AvatarProp) {
  return (
    <TopInfosContainer>
      <RoundedImageContainer>
        <RoundedImage source={{ uri: DEFAULT_IMG }}></RoundedImage>
      </RoundedImageContainer>
      <TextInfosContainer>
        <TextInfoTitle>{data.name}</TextInfoTitle>
        <TextInfoDescription>{data.description}</TextInfoDescription>
      </TextInfosContainer>
    </TopInfosContainer>
  );
}

const styles = StyleSheet.create({});
