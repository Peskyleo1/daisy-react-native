import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";

export default function TimerButton() {
  return (
    <View>
      <Progress.Pie
        size={100}
        indeterminate={false}
        animated={true}
        indeterminateAnimationDuration={10000}
        progress={1}
        color={"#df3030"}
        borderWidth={5}
        borderColor={"#e5e5e5"}
        unfilledColor={"#e5e5e5"}
      />
    </View>
  );
}
