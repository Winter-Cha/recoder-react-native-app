import React, { FC } from "react";
import { formatMsecsString } from "../../utils/time";
import { View, Text } from "react-native";

type TimeProps = {
  seconds: number;
  size: "small" | "large";
};

export const Time: FC<TimeProps> = ({ seconds, size }) => (
  <View>
    <Text style={{ fontSize: size === "small" ? 16 : 32 }}>
      {formatMsecsString(seconds)}
    </Text>
  </View>
);
