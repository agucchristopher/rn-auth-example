import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default () => {
  let [fontsLoaded] = useFonts({
    PBold: require("../assets/fonts/Poppins-Medium.ttf"),
    PBolder: require("../assets/fonts/Poppins-Bold.ttf"),
  });
  if (fontsLoaded)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  return (
    <Stack
      screenOptions={{
        // statusBarColor: "#fff",
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="register"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
};
