import {
  Dimensions,
  ImageBackground,
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
    <ImageBackground
      source={require("../assets/images/img.png")}
      style={styles.container}
    >
      <StatusBar style="dark" backgroundColor="#CBD9E1" />
      <View
        style={{
          height: height * 0.5,
          backgroundColor: "#fff",
          margin: 5,
          alignSelf: "center",
        }}
      >
        <Image
          style={{ width: width }}
          resizeMode="cover"
          source={require("../assets/images/img.png")}
        />
      </View>
      <Image
        style={{ width: 150, height: 150, alignSelf: "center" }}
        resizeMode="contain"
        source={require("../assets/images/Branding.png")}
      />
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
        onPress={() => router.push("/login")}
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
          borderWidth: 3,
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
            fontSize: 15,
            borderBottomWidth: 1,
          }}
        >
          Continue as a guest
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    resizeMode: "cover",
    marginTop: 20,
  },
});
