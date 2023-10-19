import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Input from "../components/Input";
import { Path, Svg } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const fp = () => {
  let { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <View style={{ width: 55, marginTop: 30 }}>
        <TouchableOpacity
          style={{ margin: 15, width: 55, backgroundColor: "#fff" }}
          onPress={() => router.back()}
        >
          <Image
            style={{ height: 55, width: 55 }}
            resizeMode="cover"
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 25,
          fontFamily: "PBold",
          margin: 15,
          marginBottom: 0,
        }}
        numberOfLines={2}
      >
        <Text> Forgot Password? </Text>
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "PRegular",
          margin: 15,
          marginTop: 0,
        }}
        numberOfLines={2}
      >
        <Text>
          {" "}
          Don't worry it occurs. Please enter the email address linked with your
          account.{" "}
        </Text>
      </Text>

      <View
        style={{
          margin: 15,
          gap: 15,
          columnGap: 5,
        }}
      >
        <Input title="Enter Your Email" />

        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: "#000",
            width: width * 0.9,
            alignSelf: "center",
            borderRadius: 10,
            alignContent: "center",
            justifyContent: "center",
            borderWidth: 2,
            margin: 20,
            marginTop: 5,
          }}
          onPress={() => router.push("/login")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "PBolder",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            Send Code
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontFamily: "PBold",
          margin: 15,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Remeber Password?{" "}
        <Text
          style={{
            color: "#00D0C2",
            borderColor: "#00D0C2",
            fontFamily: "PBold",
            alignSelf: "center",
          }}
          onPress={() => router.push("/login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default fp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
