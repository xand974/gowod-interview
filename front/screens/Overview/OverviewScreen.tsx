import { StyleSheet, Text } from "react-native";
import MainLayout from "components/Layout/MainLayout";
import styled from "styled-components/native";
import { WHITE } from "assets/styles/@core.style";
import Card from "components/cards/Card";

const ScrollContainer = styled.ScrollView`
  width: 85%;
  margin: 0 auto;
  padding-top: 20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: 800;
  font-size: 30px;
`;

const CardsContainer = styled.View`
  height: auto;
  width: 100%;
  margin-top: 35px;
  flex-direction: row;
`;

const MidSizeCard = styled.View`
  width: 47%;
  margin: 0 1.5%;
`;

export default function OverviewScreen() {
  return (
    <MainLayout>
      <ScrollContainer>
        <Title>Tableau de bord</Title>
        <CardsContainer>
          <MidSizeCard>
            <Card />
          </MidSizeCard>
          <MidSizeCard>
            <Card />
          </MidSizeCard>
        </CardsContainer>
      </ScrollContainer>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
