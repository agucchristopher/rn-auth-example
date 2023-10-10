import { Stack } from "expo-router";

export default () => {
  return (
    <Stack
      screenOptions={{
        statusBarColor: "dodgerblue",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
