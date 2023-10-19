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
import { router } from "expo-router";

const app = () => {
  let { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          height: height * 0.65,
          backgroundColor: "dodgerblue",
          margin: 5,
        }}
      ></View>
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
        onPress={() => router.push("/register")}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "PBolder",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: "#00D0C2",
            borderColor: "#00D0C2",
            fontFamily: "PBold",
            alignSelf: "center",
            fontSize: 18,
            borderBottomWidth: 1,
          }}
        >
          Continue as a guest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});
