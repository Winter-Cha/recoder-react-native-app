import Button from "../shared/Button";
import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import type { ReactElement } from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Stopwatch } from "../stopwatch/Stopwatch";

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: blue;
  margin-bottom: 8px;
`;

interface stopwatchProps {
  timerStart?: Boolean;
  stopwatchStart?: Boolean;
  totalDuration?: Number;
  timerReset?: Boolean;
  stopwatchReset?: Boolean;
}

const initialState: stopwatchProps = {
  timerStart: false,
  stopwatchStart: false,
  totalDuration: 90000,
  timerReset: false,
  stopwatchReset: false,
};

function Page(): ReactElement {
  return (
    <Container>
      <StyledText testID="myText">Screen 1</StyledText>
      <Stopwatch />
    </Container>
  );
}

export default Page;
