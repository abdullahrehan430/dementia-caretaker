import { View, Text, FlatList } from "react-native";
import Header from "../../shared/Header";
import { NewRoutineProps } from "./utils";
import { commonStyles } from "../../styles/commonStyles";
import React from "react";
import FontAwesom from "react-native-vector-icons/FontAwesome";
import RoutineData from "../../shared/Components/RoutineSharedData/RoutineData";
import colors from "../../constants/colors";
import { TouchableRipple } from "react-native-paper";

const NewRoutineScreen: React.FC<NewRoutineProps> = (
  props: NewRoutineProps
) => {
  const { navigation } = props;
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateToCustomScreen = () => {
    navigation.navigate("CustomRoutineScreen");
  };
  const renderItems = ({ item, index }: any) => {
    return <RoutineData />;
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      <View style={commonStyles.container}>
        <Header onPressBack={navigateBack} />
        <Text
          style={{
            alignSelf: "center",
            color: colors.OceanBlue,
            fontSize: 26,
          }}
        >
          Create a routine
        </Text>

        <Text
          style={{
            color: colors.black,
            fontSize: 20,
            fontWeight: "600",
            marginTop: 40,
            marginLeft: 10,
          }}
        >
          Recommended
        </Text>
        <View
          style={{
            backgroundColor: colors.PurpleNavy,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
            padding: 15,
            maxHeight: "70%",
          }}
        >
          <Text
            style={{
              color: colors.AliceBlue,
              paddingBottom: 20,
            }}
          >
            Daily Tasks
          </Text>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: colors.AliceBlue, paddingRight: 20 }}>
            8:00
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.AliceBlue,
              width: "85%",
              paddingLeft: 15,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 5,
            }}
          >
            <FontAwesom name="wrench" color={colors.black} />
            <Text style={{ color: colors.black, marginLeft: 7 }}>Exersice</Text>
          </View>
        </View> */}
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={renderItems}
          />
        </View>
      </View>
      <TouchableRipple
        onPress={navigateToCustomScreen}
        style={{
          alignSelf: "center",
          width: "70%",
          backgroundColor: colors.OceanBlue,
          marginBottom: 25,
          alignItems: "center",
          borderRadius: 20,
          elevation: 20,
          shadowColor: colors.PurpleNavy,
          shadowOffset: { width: -2, height: 8 },
          shadowOpacity: 0.6,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: colors.AntiFlashWhite,
            padding: 12,
            fontWeight: "800",
          }}
        >
          CREATE A CUSTOM ROUTINE
        </Text>
      </TouchableRipple>
    </View>
  );
};

export default NewRoutineScreen;
