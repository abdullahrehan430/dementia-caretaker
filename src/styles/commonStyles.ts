import { StyleSheet, ViewStyle } from "react-native";
import colors from "../constants/colors";
interface CommonStyles {
  container: ViewStyle;
}
export const commonStyles = StyleSheet.create<CommonStyles>({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
});
