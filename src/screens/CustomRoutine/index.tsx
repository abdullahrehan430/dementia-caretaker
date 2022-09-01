import { View, Text } from "react-native";
import { CustomScreenProps } from "./utils";
import { commonStyles } from "../../styles/commonStyles";
import Header from "../../shared/Header";
import React from "react";
import colors from "../../constants/colors";

const CustomRoutineScreen: React.FC<CustomScreenProps> = (
  props: CustomScreenProps
) => {
  const { navigation } = props;
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[commonStyles.container, { backgroundColor: colors.PurpleNavy }]}
    >
      <Header onPressBack={navigateBack} backgroundColor={colors.AliceBlue} />
    </View>
  );
};

export default CustomRoutineScreen;
