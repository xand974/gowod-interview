import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  padding: 20px 10px;
  background: ${(props: { bg: string }) => props.bg};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface SimpleButtonProp {
  text: string;
  bg: string;
  onPress: () => void;
}
export default function SimpleButton({ text, bg, onPress }: SimpleButtonProp) {
  return (
    <Button onPress={onPress} bg={bg}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

const styles = StyleSheet.create({});
