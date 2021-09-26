import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export default function Segment() {
  return (
    <Container>
      <Slider></Slider>
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
`;
