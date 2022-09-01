import { View, Text } from "react-native";
import { styles } from "../../../screens/NewRoutineScreen/styles";
import React from "react";
import colors from "../../../constants/colors";
import FontAwesom from "react-native-vector-icons/FontAwesome";

const RoutineData: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
      <Text style={{ color: colors.AliceBlue, paddingRight: 20 }}>8:00</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.AliceBlue,
          width: "85%",
          paddingLeft: 15,
          paddingTop: 15,
          paddingBottom: 15,
          borderRadius: 8,
        }}
      >
        <FontAwesom name="wrench" color={colors.black} />
        <Text style={{ color: colors.black, marginLeft: 7 }}>Exersice</Text>
      </View>
    </View>
  );
};

export default RoutineData;
