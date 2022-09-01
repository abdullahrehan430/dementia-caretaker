import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import RoutineScreen from "../screens/RoutineScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntIcons from "react-native-vector-icons/AntDesign";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import colors from "../constants/colors";

const BottomTabNav: React.FC = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor={colors.OceanBlue}
      inactiveColor={colors.black}
      barStyle={{ backgroundColor: colors.backgroundColor }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RoutineScreen"
        component={RoutineScreen}
        options={{
          tabBarLabel: "Routine",
          tabBarIcon: ({ color }) => (
            <AntIcons name="profile" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
