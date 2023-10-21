import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Input from "../components/Input";
import { Path, Svg } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const np = () => {
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
        {" "}
        Create new password{" "}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "PRegular",
          margin: 15,
          marginTop: 0,
          marginLeft: 20,
          color: "#8391A1",
        }}
        numberOfLines={2}
      >
        Your new password must be unique from those previously used
      </Text>

      <View
        style={{
          margin: 15,
          gap: 15,
          columnGap: 5,
        }}
      >
        <Input title="New Password" />
        <Input title="Confirm Password" />

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
          onPress={() => router.push("/changed")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "PBolder",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default np;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
