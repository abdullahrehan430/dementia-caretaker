import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Appbar, TouchableRipple } from "react-native-paper";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import colors from "../../constants/colors";
interface HeaderProps {
  onPressBack: () => void;
  backgroundColor?: string;
}
const HomeScreen: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { onPressBack, backgroundColor } = props;
  return (
    <TouchableOpacity
      onPress={onPressBack}
      style={{ height: 25, marginLeft: 20, marginTop: 10 }}
    >
      <MaterialIcon
        name="arrow-back-ios"
        size={25}
        color={
          backgroundColor !== undefined ? backgroundColor : colors.PurpleNavy
        }
      />
    </TouchableOpacity>
    // <Appbar.Header
    //   style={{ backgroundColor: colors.backgroundColor }}
    //   shouldRasterizeIOS={false}
    // >
    //   <Appbar.BackAction onPress={onPressBack} />
    // </Appbar.Header>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
