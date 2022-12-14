import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import styled from "styled-components/native";
import { LIGHT_BLUE, WHITE, LIGHT_GREEN } from "assets/styles/@core.style";
import SimpleIcon from "components/Icons/SimpleIcon";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types";
import { useMutation } from "@apollo/client";
import { CREATE_TEST } from "../../Graphql/mutations";
import { useAppSelector } from "../../hooks/app.hooks";
import { useDispatch } from "react-redux";
import { sleep } from "../../helpers/utils.helpers";
import { ADD_ONE_TEST, RESET_CURRENT } from "context/slices/mobi-test.slice";

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
  const navigation = useNavigation<AppNavigationProp>();
  const { current } = useAppSelector((state) => state.mobiTests);
  const [loading, setLoading] = useState(false);
  const [createTest] = useMutation(CREATE_TEST);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = false;
    const createOneTest = async () => {
      setLoading(true);
      const res = await createTest({
        variables: {
          test: current,
        },
      });

      if (isSubscribed) return;
      const testCreated = res.data.createTest;
      dispatch(ADD_ONE_TEST(testCreated));
      dispatch(RESET_CURRENT());
      await sleep(2000);
      setLoading(false);
      navigation.navigate("DashboardScreen");
    };
    createOneTest().catch(console.error);
    return () => {
      isSubscribed = true;
    };
  }, []);

  return (
    <MainLayout>
      <LoadingWrapper>
        <Title>Calcul de votre score de mobilit??</Title>
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
          <LoadingText>Tout est pr??t !</LoadingText>
        )}
      </LoadingWrapper>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
