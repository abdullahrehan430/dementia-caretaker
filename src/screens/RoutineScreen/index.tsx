import { View, Text, FlatList } from "react-native";
import { RoutineScreenProps } from "./utils";
import { commonStyles } from "../../styles/commonStyles";
import Header from "../../shared/Header";
import RoutineData from "../../shared/Components/RoutineSharedData/RoutineData";
import React from "react";
import colors from "../../constants/colors";

const RoutineScreen: React.FC<RoutineScreenProps> = (
  props: RoutineScreenProps
) => {
  const { navigation } = props;
  const navigateBack = () => {
    navigation.goBack();
  };
  const renderItems = ({ item, index }: any) => {
    return <RoutineData />;
  };
  return (
    <View
      style={[
        commonStyles.container,
        { backgroundColor: colors.PurpleNavy, paddingBottom: 10 },
      ]}
    >
      <Header onPressBack={navigateBack} backgroundColor={colors.AliceBlue} />
      <Text
        style={{
          alignSelf: "center",
          color: colors.AntiFlashWhite,
          fontSize: 26,
        }}
      >
        Current routine
      </Text>
      <View
        style={{
          backgroundColor: colors.PurpleNavy,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 5,
          padding: 15,
          maxHeight: "90%",
        }}
      >
        <Text
          style={{
            color: colors.AliceBlue,
            paddingBottom: 10,
          }}
        >
          Daily Tasks
        </Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={renderItems}
        />
      </View>
    </View>
  );
};

export default RoutineScreen;
