import Button from "../shared/Button";
import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import type { ReactElement } from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const Container = styled.View`
  flex: 1;
  background-color: orange;
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
  const [state, setState] = useState(initialState);

  const toggleTimer = () => {
    setState({ timerStart: !state.timerStart, timerReset: false });
  };

  const resetTimer = () => {
    setState({ timerStart: false, timerReset: true });
  };

  const toggleStopwatch = () => {
    setState({
      stopwatchStart: !state.stopwatchStart,
      stopwatchReset: false,
    });
  };

  const resetStopwatch = () => {
    setState({ stopwatchStart: false, stopwatchReset: true });
  };

  const getFormattedTime = (time) => {
    this.currentTime = time;
  };
  const handleTimerComplete = () => alert("custom completion function");

  const options = {
    container: {
      backgroundColor: "#000",
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 30,
      color: "#FFF",
      marginLeft: 7,
    },
  };
  return (
    <Container>
      <StyledText testID="myText">Screen 1</StyledText>
      <View>
        <Stopwatch
          laps
          msecs
          start={state.stopwatchStart}
          reset={state.stopwatchReset}
          options={options}
          getTime={getFormattedTime}
        />
        <TouchableHighlight onPress={toggleStopwatch}>
          <Text style={{ fontSize: 30 }}>
            {!state.stopwatchStart ? "Start" : "Stop"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={resetStopwatch}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
      </View>
    </Container>
  );
}

export default Page;
