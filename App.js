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
import HomeScreen from "./Screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";

const getFonts = () =>
  Font.loadAsync({
    JosefinSans: require("./assets/fonts/JosefinSans-VariableFont_wght.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-Medium": require("./assets/fonts/JosefinSans-Medium.ttf"), //Used in StaticText in Hea
    "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"), //Used On DynamicText in Header
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <AppNavigator></AppNavigator>;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={(error) => console.warn(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

const headerRadius = "40px";
const headerHeight = "1250px";
const DaisyRed = "#df3030";

const Container = styled.View`
  flex: 1;
  background-color: #000;
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
  background-color: #fff;
  width: 100%;
  height: 1000px;
  margin-top: -${headerRadius};
  padding-top: ${headerRadius};
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
