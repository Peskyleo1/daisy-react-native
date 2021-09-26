import React, { Fragment } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export default function SettingsScreen() {
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "#df3030" }}></SafeAreaView>
      <ScrollView style={{ height: "100%", backgroundColor: "#df3030" }}>
        <Container>
          <Info>Settings</Info>
          <SectionTitle>Language</SectionTitle>
          <Card></Card>
          <SectionTitle>Dark Mode</SectionTitle>
          <Card></Card>
          <SectionTitle>Skin Type</SectionTitle>
          <Card></Card>
          <SectionTitle>Favourite Creams</SectionTitle>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Container>
      </ScrollView>
    </Fragment>
  );
}

SettingsScreen.navigationOptions = {
  headerShown: false,
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-bottom: 60px;
`;

const Info = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: "JosefinSans-Bold";
  margin-bottom: 20px;
  color: white;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-family: "JosefinSans-Bold";
  color: white;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Card = styled.View`
  background-color: white;
  width: 100%;
  height: 100px;
  border-radius: 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;
