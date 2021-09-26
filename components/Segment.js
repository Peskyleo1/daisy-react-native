import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function Segment() {
  return (
    <Container>
      <Slider></Slider>
      <OptionWrapper>
        <Option>
          <Ionicons name="image" size={32} color="#fff" />
          <Description style={{ color: "#fff" }}>On Land</Description>
        </Option>
        <Option>
          <Ionicons name="snow" size={32} color="#000" />
          <Description>Beach / Snow</Description>
        </Option>
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

const Slider = styled.View`
  width: 50%;
  height: 100%;
  background-color: #df3030;
  border-radius: 16px;
  position: absolute;
  top: 5px;
  left: 5px;
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
