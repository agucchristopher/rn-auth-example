import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const changed = () => {
  let { width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Successmark.png")}
        style={{ margin: 15 }}
      />
      <Text style={{ fontFamily: "PBolder", fontSize: 25 }}>
        Password Changed
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "PRegular",
          color: "#8391A1",
          marginTop: 0,
        }}
      >
        Your Password have been changed
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "PRegular",
          color: "#8391A1",
          marginTop: 0,
        }}
      >
        successfully.
      </Text>
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
          marginTop: 15,
        }}
        onPress={() => router.push("/login")}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "PBold",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Back To Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default changed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
