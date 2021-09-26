import { StatusBar } from "expo-status-bar";
import React, { Fragment, useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Segment from "../components/Segment";

export default function Homescreen({ navigation }) {
  return (
    <Fragment>
      <StatusBar style="light" />
      <SafeAreaView style={{ backgroundColor: DaisyRed }} />
      <ScrollView style={{ backgroundColor: offWhiteColor }}>
        <Container>
          <Header>
            <HeaderContainer>
              <HMenu>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Settings");
                  }}
                >
                  <Ionicons name="settings-sharp" size={32} color="#fff" />
                </TouchableOpacity>
              </HMenu>
              <HInfo>
                <HeaderStaticText>YOU CAN STAY</HeaderStaticText>
                <HeaderDynamicText>4 HRS</HeaderDynamicText>
                <HeaderStaticText>IN THE SUN, WITH</HeaderStaticText>
                <HeaderDynamicText>SPF 30</HeaderDynamicText>
              </HInfo>
              <HShield></HShield>
            </HeaderContainer>
          </Header>
          <Content>
            <Card>
              <CardText>Where Are you?</CardText>
              <Segment></Segment>
            </Card>
            <Card>
              <CardText>
                You will be notified when you've been too long in the sun
              </CardText>
            </Card>
          </Content>
        </Container>
      </ScrollView>
    </Fragment>
  );
}

Homescreen.navigationOptions = {
  headerShown: false,
};

const headerRadius = "40px";
const headerHeight = "1250px";
const DaisyRed = "#df3030";
const offWhiteColor = "#fff2f2";

const Container = styled.View`
  flex: 1;
  background-color: #fff2f2;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  height: ${headerHeight};
  width: 100%;
  background-color: ${DaisyRed};
  border-bottom-left-radius: ${headerRadius};
  border-bottom-right-radius: ${headerRadius};
  z-index: 100;
  margin-top: -1000px;
  padding-top: 1000px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Content = styled.View`
  background-color: ${offWhiteColor};
  width: 100%;
  margin-top: -${headerRadius};
  padding-top: ${headerRadius};
  align-items: center;
  padding: 30px;
  padding-top: 60px;
`;

const HeaderStaticText = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: "JosefinSans-Medium";
  font-weight: 400;
  line-height: 50px;
  text-transform: uppercase;
`;

const HeaderDynamicText = styled.Text`
  font-size: 40px;
  color: #fff;
  font-family: "JosefinSans-Bold";
  font-weight: 600;
  text-transform: uppercase;
`;

const HeaderContainer = styled.View`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 30px;
  justify-content: flex-end;
`;

const HMenu = styled.View`
  background-color: transparent;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;
const HInfo = styled.View`
  background-color: transparent;
`;
const HShield = styled.View`
  background-color: white;
`;

const Card = styled.View`
  background-color: white;
  width: 100%;
  border-radius: ${headerRadius};
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const CardText = styled.Text`
  font-family: "JosefinSans-Medium";
  font-size: 16px;
`;
