import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={["", "", "", ""]}
        renderItem={({ item, index }) => {
          <Image source={require(`../assets/males/m-${index}`)} />;
        }}
      />
      <Text>app</Text>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
  },
});
