import React, { FC } from "react";
import { Text } from "react-native";

export const Container: FC = ({ children }: any) => (
  <Text style={{ textAlign: "center", fontFamily: "Avenir, Helvetica, Arial" }}>
    {children}
  </Text>
);
