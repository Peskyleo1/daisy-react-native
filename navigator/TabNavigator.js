import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Homescreen from "../Screens/HomeScreen";
import NerdModeScreen from "../Screens/NerdModeScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const DaisyRed = "#df3030";
const InactiveColor = "#7f7f7f";
const TabBarRadius = 40;

const HomeStack = createStackNavigator(
  {
    Home: Homescreen,
    Settings: SettingsScreen,
  },
  {
    mode: "card",
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Settings") {
    tabBarVisible = false;
  }
  return {
    tabBarLabel: "HOME",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="home"
        size={26}
        color={focused ? DaisyRed : InactiveColor}
      />
    ),
    tabBarVisible,
  };
};

const NerdModeStack = createStackNavigator({
  NerdMode: NerdModeScreen,
});

NerdModeStack.navigationOptions = {
  tabBarLabel: "NERD MODE",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="speedometer"
      size={26}
      color={focused ? DaisyRed : InactiveColor}
    />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    NerdModeStack,
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: DaisyRed,
      inactiveTintColor: InactiveColor,
      labelStyle: {
        fontWeight: "bold",
        fontFamily: "JosefinSans-Bold",
      },
      style: {
        /* backgroundColor: "#000",
            fontColor: "#fff",
            height: 50,
            borderRadius: TabBarRadius,
            borderTopLeftRadius: TabBarRadius,
            borderTopRightRadius: TabBarRadius,
            elevation: 0,
            borderTopWidth: 0, */
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: TabBarRadius,
        borderTopRightRadius: TabBarRadius,
        height: 60,
        borderTopWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
    },
  }
);

export default TabNavigator;
