import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { IC_MASK } from "../../utils/Icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import React from "react";
import type { ReactElement } from "react";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Screen3 from "../screen/Screen3";
import Screen4 from "../screen/Screen4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useThemeContext } from "../../providers/ThemeProvider";

export type BottomTabParamList = {
  default: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

export type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = "default"
> = BottomTabNavigationProp<BottomTabParamList, T>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabBarIcon = (focused: boolean, iconName: string): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18,
      }}
      source={IC_MASK}
    />
  );
};

function RootNavigator(): ReactElement {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }): React.ReactElement => {
            let iconName: string = "";

            if (route.name === "Screen1") {
              iconName = "Screen1";
            } else if (route.name === "Screen2") {
              iconName = "Screen2";
            } else if (route.name === "Screen3") {
              iconName = "Screen3";
            } else if (route.name === "Screen4") {
              iconName = "Screen4";
            }

            return TabBarIcon(focused);
          },
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        })}
      >
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{
            tabBarLabel: "Screen1",
            tabBarIcon: ({ focused }): React.ReactElement =>
              TabBarIcon(focused),
          }}
        />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
