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
import { QuestionnaireModel } from "types";
import { MobiTestModel } from "gowod_interview_types";
import { AppNavigationProp } from "types";
import { useDispatch } from "react-redux";
import { SET_CURRENT_TEST } from "context/slices/mobi-test.slice";
import { useAppSelector } from "../../../hooks/app.hooks";

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
  const [currentQuestion, setCurrentQuestion] = useState(
    {} as QuestionnaireModel
  );
  const questions = useMemo(() => [...MOBI_TEST], []);
  const navigation = useNavigation<AppNavigationProp>();
  const { deviceId } = useAppSelector((state) => state.app);
  const dispatch = useDispatch();

  useLayoutEffect((): void => {
    navigation.setOptions({
      header: () => <Header canGoBack={true} goBack={goBack} />,
    });
  }, []);

  /**
   * @description
   * when go back
   * reset the previous state
   */
  const goBack = (): void => {
    // TODO move these to context
    setCurrentStepNumber((prev) => {
      if (prev === 0) {
        prev = 0;
        navigation.navigate("DashboardScreen");
        return prev;
      }
      return prev - 1;
    });

    // TODO refactor this
    setAnswer((prev) => {
      const answerWithoutLastElementRemoved = prev.filter(
        (_, id) => id !== prev.length - 1
      );

      setTotal((curr) => {
        const lastElement = prev[prev.length - 1];
        return curr - lastElement.points;
      });

      return answerWithoutLastElementRemoved;
    });
  };

  /**
   * @name goNextStep
   * @description
   * - increments the total by the points related to the card selected
   * - add the selected answer to the state
   * - increments the step number
   * @param data {points: number; archetype: string }
   */
  const goNextStep = (data: { points: number; archetype: string }): void => {
    // TODO move these to context
    setAnswer((prev) => [...prev, { ...data }]);
    setTotal((prev) => prev + data.points);
    setCurrentStepNumber((prev) => prev + 1);
  };

  /**
   * @description
   * it will trigger when the user select all the answers
   */
  useEffect(() => {
    if (currentStepNumber === questions.length) {
      const mobiTest = {
        deviceId,
        totalPoints: total,
        body: {
          ankles: getTotalPointByArchetype("ankles"),
          hips: getTotalPointByArchetype("hips"),
          overhead: getTotalPointByArchetype("overhead"),
          postchain: getTotalPointByArchetype("postchain"),
          shoulders: getTotalPointByArchetype("shoulders"),
        },
      } as MobiTestModel;

      // TODO move these to context
      dispatch(SET_CURRENT_TEST({ ...mobiTest }));
      setCurrentStepNumber(0);
      setTotal(0);
      setAnswer([]);

      navigation.navigate("LoadingScreen");
      return;
    }
    setCurrentQuestion(questions[currentStepNumber]);
  }, [currentStepNumber]);

  const getTotalPointByArchetype = (key: string) => {
    return answer.reduce((prev, curr) => {
      if (curr.archetype === key) {
        return prev + curr.points;
      }
      return prev;
    }, 0);
  };

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
