import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function Segment() {
  const [fromPosition, setFromPosition] = useState(
    (Dimensions.get("window").width - 120) / 2
  );
  const [distance, setDistance] = useState(new Animated.Value(fromPosition));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(0);
  const [targetValue, setTargetValue] = useState(0);

  /* useEffect(() => {
    // Anything in here is fired on component mount.
    Animated.timing(distance, {
      toValue: targetValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    console.log(position);
  }, []); */

  const moveLeft = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    setPosition(0);
    //setDistance(new Animated.Value(fromPosition));
    Animated.timing(distance, {
      toValue: 5,
      duration: 300,
      useNativeDriver: false,
    }).start();
    console.log(position);
  };

  const moveRight = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    setPosition(1);
    //setDistance(new Animated.Value(0));
    Animated.timing(distance, {
      toValue: fromPosition,
      duration: 300,
      useNativeDriver: false,
    }).start();
    console.log(position);
  };

  return (
    <Container>
      <Slider style={{ left: distance }}></Slider>
      <OptionWrapper>
        <TouchableOpacity onPress={moveLeft}>
          <Option>
            <Ionicons name="image" size={32} color="#fff" />
            <Description style={{ color: "#fff" }}>On Land</Description>
          </Option>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveRight}>
          <Option>
            <Ionicons name="snow" size={32} color="#000" />
            <Description>Beach / Snow</Description>
          </Option>
        </TouchableOpacity>
      </OptionWrapper>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 70px;
  background-color: #e5e5e5;
  border-radius: 20px;
  margin-top: 10px;
  padding: 5px;
`;

const Slider = styled(Animated.View)`
  width: 50%;
  height: 100%;
  background-color: #df3030;
  border-radius: 16px;
  position: absolute;
  top: 5px;
`;

const Option = styled.View`
  width: 100px;
  overflow: visible;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const OptionWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Description = styled.Text`
  font-family: "JosefinSans-Medium";
  font-size: 16px;
`;
