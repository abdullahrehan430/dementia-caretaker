import { View, Image, ScrollView } from "react-native";
import { commonStyles } from "../../styles/commonStyles";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import colors from "../../constants/colors";
import { HomeScreenProps } from "./utils";
import { Text, TouchableRipple } from "react-native-paper";

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const image = require("../../assets/images/HomePageImage.png");
  const image1 = require("../../assets/images/HomePageNew.png");
  const { navigation } = props;
  const navigateToNewRoutine = () => {
    navigation.navigate("NewRoutineScreen");
  };
  return (
    <ScrollView
      bounces={false}
      style={{ backgroundColor: colors.backgroundColor }}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <>
        <View style={commonStyles.container}>
          <View
            style={{ alignSelf: "flex-end", paddingRight: 20, paddingTop: 20 }}
          >
            <MaterialIcon name="notifications" color={colors.black} size={30} />
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ fontSize: 28 }}>Hello , Abdullah!</Text>
            <Text style={{ fontSize: 14, marginTop: 10 }}>
              You don't have a routine for helder yet
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.AliceBlue,
            paddingBottom: 50,
            // borderTopLeftRadius: 80,
            // borderTopRightRadius: 80,

            //  marginTop: 50,
          }}
        >
          <Image
            source={image1}
            style={{
              // paddingTop: 20,
              width: "100%",
              //  marginTop: "60%",
            }}
          />
          {/* <View
            style={{
              flexDirection: "row",
              paddingLeft: 65,
              justifyContent: "space-between",
              paddingRight: 65,
            }}
          >
            <Text>Text1 </Text>
            <Text>Text2</Text>
          </View> */}
          <TouchableRipple
            onPress={navigateToNewRoutine}
            // rippleColor="rgba(0, 0, 0, .32)"
            style={{
              marginTop: 70,
              backgroundColor: colors.OceanBlue,
              padding: 13,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              width: "50%",
              borderRadius: 22,
            }}
          >
            <Text style={{ color: colors.AntiFlashWhite }}>
              CREATE A ROUTINE
            </Text>
          </TouchableRipple>
        </View>
      </>
    </ScrollView>
  );
};

export default HomeScreen;
