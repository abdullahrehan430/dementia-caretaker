/* eslint-disable @typescript-eslint/no-unused-vars */
import { ParamListBase } from "@react-navigation/native";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
//import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type RoutineScreenNavProp = MaterialBottomTabNavigationProp<
  ParamListBase,
  "RoutineScreen"
>;
export interface RoutineScreenProps {
  route: any;
  navigation: RoutineScreenNavProp;
}
