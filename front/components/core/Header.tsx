import { MAIN_BLUE } from "assets/styles/@core.style";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import SimpleButton from "components/Buttons/SimpleButton";
import SimpleIcon from "components/Icons/SimpleIcon";

const HeaderContainer = styled.View`
  height: 90px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${MAIN_BLUE};
`;

const HeaderWrapper = styled.View`
  height: 18%;
  width: 25%;
  position: absolute;
  bottom: 15px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const GowodLogo = styled.Image`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

interface HeaderProp {
  goBack?: () => void;
  canGoBack?: boolean;
}
export default function Header({ goBack, canGoBack = false }: HeaderProp) {
  return (
    <HeaderContainer>
      {canGoBack ? (
        <BackButton onPress={goBack}>
          <SimpleIcon name="chevron-back-outline" type="ionicon" size={25} />
        </BackButton>
      ) : (
        <></>
      )}
      <HeaderWrapper>
        <GowodLogo source={require("../../assets/img/LogoGowod.png")} />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const styles = StyleSheet.create({});
