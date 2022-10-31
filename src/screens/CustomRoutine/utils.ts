/* eslint-disable @typescript-eslint/no-unused-vars */
import { ParamListBase } from "@react-navigation/native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
//import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type CustomRoutineNavProp = MaterialBottomTabNavigationProp<
  ParamListBase,
  "CustomRoutine"
>;
export interface CustomScreenProps {
  route: any;
  navigation: CustomRoutineNavProp;
}
