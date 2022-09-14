import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import styled from "styled-components/native";
import { LIGHT_BLUE, WHITE, LIGHT_GREEN } from "assets/styles/@core.style";
import SimpleIcon from "components/Icons/SimpleIcon";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types";

const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: ${LIGHT_BLUE};
  font-weight: 900;
  font-size: 17px;
`;
const SpinnerContainer = styled.View`
  margin: 20px 0;
`;

const LoadingText = styled.Text`
  color: ${WHITE};
  font-weight: 300;
`;
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<AppNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("MobiScoreScreen");
    }, 3000);
  }, []);

  return (
    <MainLayout>
      <LoadingWrapper>
        <Title>Calcul de votre score de mobilité</Title>
        {/* Spinner */}
        <SpinnerContainer>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <SimpleIcon
              name="checkmark-circle-outline"
              type="ionicon"
              color={LIGHT_GREEN}
            />
          )}
        </SpinnerContainer>
        {loading ? (
          <LoadingText>En cours</LoadingText>
        ) : (
          <LoadingText>Tout est prêt !</LoadingText>
        )}
      </LoadingWrapper>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
