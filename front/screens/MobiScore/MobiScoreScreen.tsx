import { StyleSheet, Text, View } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import SimpleButton from "components/Buttons/SimpleButton";
import styled from "styled-components/native";
import { LIGHT_BLUE, WHITE } from "assets/styles/@core.style";
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

const HorizontalScrollContainer = styled.ScrollView`
  margin-bottom: 20px;
  height: 150px;
`;

const LeftJoinedContainer = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const LeftJoinedText = styled.Text`
  font-weight: 200;
  color: ${WHITE};
  line-height: 20px;
`;
const Divider = styled.View`
  position: absolute;
  height: 30%;
  width: 1px;
  right: 0;
  top: 40%;
  background: ${WHITE};
`;
const RightChartContainer = styled.View`
  flex: 2;
  margin-left: 10px;
  width: ${(props: { count: number }) => props.count + 500}px;
  flex-direction: row;
`;

const TestCountContainer = styled.View`
  height: 100%;
  width: 30px;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 2px;
  position: relative;
  align-items: center;
  margin-right: 10px;
`;

const TestCountText = styled.Text`
  width: 30px;
  text-align: center;
  color: ${WHITE};
  left: 0;
  bottom: 0;
  font-size: 10px;
`;

const TestSelectedContainer = styled.View`
  height: 100%;
  width: 30px;
  background: #508dd39b;
  position: absolute;
  left: ${(props: { scrollX: number }) => Math.floor(props.scrollX)}px;
  z-index: 10;
  border-radius: 10px;
  align-items: center;
`;

const SmallBoldText = styled.Text`
  font-weight: bold;
  background: #000;
  font-size: 11px;
  text-align: center;
  width: 80%;
  margin-top: 10px;
  padding: 2px;
  color: ${WHITE};
`;

export default function MobiScoreScreen() {
  const [testCount, setTestCount] = useState([3, 2, 3, 3, 4, 49, 2]);
  const [value, setValue] = useState([1, 3, 5, 8, 9]);
  const [scrollX, setScrollX] = useState(0);
  const navigation = useNavigation<AppNavigationProp>();
  const goToTest = () => {
    navigation.navigate("MobiTestScreen");
  };
  const handleScroll = (event: any) => {
    setScrollX(event.nativeEvent.contentOffset.x);
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

        <HorizontalScrollContainer
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onScroll={handleScroll}
        >
          <LeftJoinedContainer>
            <LeftJoinedText>
              A rejoint GOWOD {"\n"} le 12 septembre {"\n"} 2022
            </LeftJoinedText>
            <Divider />
          </LeftJoinedContainer>

          <RightChartContainer count={testCount.length}>
            <TestSelectedContainer scrollX={scrollX}>
              <SmallBoldText>10</SmallBoldText>
            </TestSelectedContainer>
            {testCount.map((item, id) => (
              <TestCountContainer key={id} id={id}>
                <TestCountText>{item}</TestCountText>
              </TestCountContainer>
            ))}
          </RightChartContainer>
        </HorizontalScrollContainer>

        <SimpleButton
          onPress={goToTest}
          bg={MID_BLUE}
          text="Refaire le test"
        ></SimpleButton>
      </Container>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
