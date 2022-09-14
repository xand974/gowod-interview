import { StyleSheet, Text } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import SimpleButton from "components/Buttons/SimpleButton";
import styled from "styled-components/native";
import { WHITE } from "assets/styles/@core.style";
import { MID_BLUE } from "assets/styles/@core.style";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types";
import PercentageChart from "components/Charts/PercentageChart";
import BarsChart from "components/Charts/BarsChart";
import { useState } from "react";

const Container = styled.ScrollView`
  width: 85%;
  margin: 20px auto 0 auto;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.View`
  margin-bottom: 20px;
`;

const LightText = styled.Text`
  color: ${WHITE};
  font-weight: 400;
  margin-bottom: 5px;
`;

const BoldText = styled.Text`
  color: ${WHITE};
  font-weight: 800;
  font-size: 17px;
`;
const PercentageChartContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

const BarChartsContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export default function MobiScoreScreen() {
  const [value, setValue] = useState([1, 3, 5, 8, 9]);
  const navigation = useNavigation<AppNavigationProp>();
  const goToTest = () => {
    navigation.navigate("MobiTestScreen");
  };
  return (
    <MainLayout>
      <Container>
        <Title>Score mobilité</Title>
        <HeaderContainer>
          <LightText>14 septembre 2022</LightText>
          <BoldText>Global</BoldText>
        </HeaderContainer>
        <PercentageChartContainer>
          <PercentageChart></PercentageChart>
        </PercentageChartContainer>
        <BarChartsContainer>
          <BarsChart detailed={true} value={value}></BarsChart>
        </BarChartsContainer>

        <SimpleButton
          onPress={goToTest}
          bg={MID_BLUE}
          text="Take the test"
        ></SimpleButton>
      </Container>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
