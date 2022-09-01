import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./src/routes/BottomTabNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomRoutineScreen from "./src/screens/CustomRoutine";
import NewRoutineScreen from "./src/screens/NewRoutineScreen";

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="NewRoutineScreen" component={NewRoutineScreen} />
          <Stack.Screen
            name="CustomRoutineScreen"
            component={CustomRoutineScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
