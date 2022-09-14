import { MID_BLUE, WHITE } from "assets/styles/@core.style";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import TransparentBackground from "components/core/TransparentBackground";
import SimpleIcon from "components/Icons/SimpleIcon";
import SimpleButton from "components/Buttons/SimpleButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types";
import { DEFAULT_IMG } from "../../../mock/data";

const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;
const SafeContainer = styled.SafeAreaView`
  height: 100%;
  justify-content: flex-end;
`;

const Wrapper = styled.View`
  width: 85%;
  margin: 0 auto 10px auto;
  height: 30%;
  flex: 1;
  justify-content: flex-end;
`;
const Title = styled.Text`
  color: ${WHITE};
  font-weight: 800;
  font-size: 30px;
`;
const InfoContainer = styled.View`
  margin-top: 20px;
`;

const IconTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const InfoText = styled.Text`
  color: ${WHITE};
  font-weight: 400;
  margin-left: 10px;
`;
const ButtonWrapper = styled.View`
  margin: 20px 0;
`;

export default function GetStartedScreen() {
  const navigation = useNavigation<AppNavigationProp>();
  const startTest = () => {
    navigation.navigate("TestScreen");
  };
  const goBack = () => {
    navigation.navigate("OverviewScreen");
  };
  return (
    <>
      <BackgroundImage
        source={{
          uri: DEFAULT_IMG,
        }}
      />
      <TransparentBackground />
      <SafeContainer>
        <Wrapper>
          <Title>Testez votre mobilité {"\n"} maintenant</Title>
          <InfoContainer>
            <IconTextContainer>
              <SimpleIcon
                type="ionicon"
                name="information-circle-outline"
                size={25}
                color={MID_BLUE}
              />
              <InfoText>Durée moyenne: 12 min</InfoText>
            </IconTextContainer>

            <IconTextContainer>
              <SimpleIcon
                type="font-awesome-5"
                name="dumbbell"
                size={20}
                color={MID_BLUE}
              />
              <InfoText>
                Aucun équipement requis, juste un mur et une carte au format
                business/carte de crédit pour prendre des mesures
              </InfoText>
            </IconTextContainer>
          </InfoContainer>
          <ButtonWrapper>
            <SimpleButton
              onPress={startTest}
              bg={MID_BLUE}
              text="C'est parti !"
            ></SimpleButton>
            <SimpleButton
              onPress={goBack}
              bg="transparent"
              text="pas maintenant"
            ></SimpleButton>
          </ButtonWrapper>
        </Wrapper>
      </SafeContainer>
    </>
  );
}

const styles = StyleSheet.create({});
