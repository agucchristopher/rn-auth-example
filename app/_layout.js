import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default () => {
  let [fontsLoaded] = useFonts({
    PBold: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  return (
    <Stack
      screenOptions={{
        // statusBarColor: "#fff",
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
