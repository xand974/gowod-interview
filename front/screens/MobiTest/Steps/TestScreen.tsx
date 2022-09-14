import { StyleSheet, Text } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useMemo, useState, useEffect } from "react";
import Header from "components/core/Header";
import styled from "styled-components/native";
import { WHITE } from "assets/styles/@core.style";
import { DEFAULT_IMG, MOBI_TEST } from "mock/data";
import ProgressBar from "components/UI/ProgressBar";
import Avatar from "components/UI/Avatar";
import { MobiTestModel } from "types";
import { AppNavigationProp } from "types";

const Container = styled.View`
  width: 90%;
  margin: 10px auto 0 auto;
  height: 100%;
`;

const WhichSideContainer = styled.View`
  flex-direction: ${(props: { side: "left" | "right" }) =>
    props.side === "left" ? "row" : "row-reverse"};
  align-items: center;
`;
const WhichSideText = styled.Text`
  color: ${WHITE};
`;

const ImagesColumnContainer = styled.View`
  height: 100%;
`;

const ImageColumnButton = styled.TouchableOpacity`
  width: 100%;
  height: ${(props: { length: number }) => `${100 - props.length}px`};
  margin: 10px 0;
  align-items: center;
  justify-content: center;
`;

const ImageColumn = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
`;

const ImageColumnText = styled.Text`
  position: relative;
  color: ${WHITE};
`;

export default function TestScreen() {
  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const [answer, setAnswer] = useState(
    [] as { points: number; archetype: string }[]
  );
  const [total, setTotal] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({} as MobiTestModel);
  const questions = useMemo(() => [...MOBI_TEST], []);
  const navigation = useNavigation<AppNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header canGoBack={true} goBack={goBack} />,
    });
  }, []);

  const goBack = () => {
    setCurrentStepNumber((prev) => {
      if (prev === 0) {
        navigation.navigate("OverviewScreen");
        return 0;
      }

      return prev - 1;
    });
  };

  const goNextStep = (data: { points: number; archetype: string }) => {
    setAnswer((prev) => [...prev, { ...data }]);
    setTotal((prev) => prev + data.points);
    setCurrentStepNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentStepNumber === questions.length) {
      navigation.navigate("LoadingScreen");
      // TODO handle answers + total
      console.log(answer, total);

      return;
    }
    setCurrentQuestion(questions[currentStepNumber]);
  }, [currentStepNumber]);

  return (
    <MainLayout>
      <Container>
        {/* Progress Bar */}
        <ProgressBar
          activeValue={currentStepNumber}
          reference={questions.length}
        ></ProgressBar>

        {/* Top Infos Container */}
        <Avatar data={currentQuestion}></Avatar>

        {/* SIDES */}
        <WhichSideContainer side={"right"}>
          <WhichSideText>Côté gauche</WhichSideText>
        </WhichSideContainer>

        {/* CHOICES */}
        <ImagesColumnContainer>
          {currentQuestion?.responses?.map((item, id) => (
            <ImageColumnButton
              length={currentQuestion?.responses?.length}
              key={id}
              onPress={() =>
                goNextStep({
                  archetype: currentQuestion.archetype,
                  points: item.points,
                })
              }
            >
              <ImageColumn source={{ uri: DEFAULT_IMG }} />
              <ImageColumnText>{item.title}</ImageColumnText>
            </ImageColumnButton>
          ))}
        </ImagesColumnContainer>
      </Container>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
