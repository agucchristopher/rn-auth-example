import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default () => {
  let [fontsLoaded] = useFonts({
    PBold: require("../assets/fonts/Poppins-Medium.ttf"),
    PRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PBolder: require("../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={"black"} />
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
      <Stack.Screen
        name="login"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="fp"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="otp"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="np"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="changed"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
};
