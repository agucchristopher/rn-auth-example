import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const app = () => {
  let { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View></View>
      <Text>app</Text>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: "black",
          width: width * 0.9,
          alignSelf: "center",
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "PBold",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: "#fff",
          width: width * 0.9,
          alignSelf: "center",
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "center",
          borderWidth: 2,
          margin: 15,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "PBold",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
