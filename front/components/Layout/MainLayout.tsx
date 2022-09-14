import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import Header from "../core/Header";
import LinearBackground from "../core/LinearBackground";

interface MainLayoutProp {
  children: React.ReactNode;
}

const SafeLayoutContainer = styled.SafeAreaView`
  height: ${Dimensions.get("window").height}px;
`;

export default function MainLayout({ children }: MainLayoutProp) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  }, []);

  return (
    <SafeLayoutContainer>
      <LinearBackground />
      {children}
    </SafeLayoutContainer>
  );
}

const styles = StyleSheet.create({});
