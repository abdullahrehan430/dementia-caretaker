/* eslint-disable @typescript-eslint/no-unused-vars */
import { ParamListBase } from "@react-navigation/native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
//import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type NRScreenNavProp = MaterialBottomTabNavigationProp<
  ParamListBase,
  "HomeScreen"
>;
export interface NewRoutineProps {
  route: any;
  navigation: NRScreenNavProp;
}
