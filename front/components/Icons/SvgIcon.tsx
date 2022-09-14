import { SvgUri } from "react-native-svg";

interface SvgIconProp {
  type: string;
}
export default function SvgIcon({ type }: SvgIconProp) {
  return (
    <SvgUri
      width={20}
      height={20}
      uri={`https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg`}
    ></SvgUri>
  );
}
