import { View } from "react-native";
import styled from "styled-components/native";
import { SvgUri } from "react-native-svg";

const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
interface SvgIconProp {
  type: string;
  color: string;
}
export default function SvgIcon({ type, color }: SvgIconProp) {
  return (
    <View style={{ width: 20, height: 20 }}>
      <SvgUri
        width="100"
        height="100"
        uri="https://raw.githubusercontent.com/xand974/gowod-interview/10005406f8fcdc3b577abacc830d48b0e40c41cf/front/assets/img/leg.svg"
      />
    </View>
  );
}
