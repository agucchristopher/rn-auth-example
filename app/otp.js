import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Input from "../components/Input";
import { Path, Svg } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const otp = () => {
  let { width, height } = Dimensions.get("screen");
  const [SelectedItem, setSelectedItem] = useState(0);
  let inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    console.log(this);
  }, []);

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
        <Text> OTP Verification </Text>
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
        // numberOfLines={2}
      >
        Enter the verification code we just sent to your email.
      </Text>

      <View
        style={{
          margin: 15,
          gap: 15,
          columnGap: 5,
        }}
      >
        <FlatList
          data={["", "", "", ""]}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 15,
            alignSelf: "center",
          }}
          renderItem={({ index, item }) => {
            return (
              <View
                style={{
                  //   paddingLeft: 20,
                  backgroundColor: "#F7F8F9",
                  height: 80,
                  borderRadius: 10,
                  alignItems: "center",
                  borderColor: SelectedItem == index ? "#00D0C2" : "#E8ECF4",
                  borderWidth: 1,
                  width: 70,
                  justifyContent: "center",
                }}
              >
                <TextInput
                  ref={SelectedItem == index ? inputRef : null}
                  onFocus={() => {
                    // console.log(inputRef);
                    setSelectedItem(index);
                  }}
                  onTextInput={() => {
                    if (index != 3) {
                      setSelectedItem(index + 1);
                      inputRef.current.focus();
                    } else {
                      setSelectedItem((value) => (value = 3));
                    }
                  }}
                  style={{ height: 50, width: 50, textAlign: "center" }}
                  maxLength={1}
                />
              </View>
            );
          }}
        />

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
          onPress={() => router.push("/np")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "PBold",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={{
          fontSize: 15,
          fontFamily: "PBold",
          // margin: 15,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 2,
          flex: 1,
        }}
        behavior="height"
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "PBold",
            // margin: 15,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 2,
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
      </KeyboardAvoidingView>
    </View>
  );
};

export default otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 10,
  },
});
