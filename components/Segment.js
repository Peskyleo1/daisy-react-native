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

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Segment() {
  const [fromPosition, setFromPosition] = useState(
    (Dimensions.get("window").width - 120) / 2
  );
  const [distance, setDistance] = useState(new Animated.Value(5));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(0);
  const [targetValue, setTargetValue] = useState(0);
  const [leftColor, setLeftColor] = useState("#fff");
  const [rightColor, setRightColor] = useState("#000");

  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    // Anything in here is fired on component mount and when "position" changes
    console.log(position);
    setFromPosition((dimensions.window.width - 120) / 2);
    console.log("orientation Change");
    if (position == 0) {
      //if position is left
      Animated.timing(distance, {
        toValue: 5,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setLeftColor("#fff");
      setRightColor("#000");
    } else {
      //if position is right
      Animated.timing(distance, {
        toValue: fromPosition,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setLeftColor("#000");
      setRightColor("#fff");
    }
  }, [position, dimensions]);

  return (
    <Container>
      <Slider style={{ left: distance }}></Slider>
      <OptionWrapper>
        <TouchableOpacity
          onPress={() => setPosition(0)}
          style={{ width: "50%" }}
        >
          <Option>
            <Ionicons name="image" size={32} color={leftColor} />
            <Description style={{ color: leftColor }}>On Land</Description>
          </Option>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPosition(1)}
          style={{ width: "50%" }}
        >
          <Option>
            <Ionicons name="snow" size={32} color={rightColor} />
            <Description style={{ color: rightColor }}>
              Beach / Snow
            </Description>
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
