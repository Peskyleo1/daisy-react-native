import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Homescreen from "../Screens/HomeScreen";
import NerdModeScreen from "../Screens/NerdModeScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
  Home: Homescreen,
  NerdMode: NerdModeScreen,
});

export default createAppContainer(TabNavigator);
