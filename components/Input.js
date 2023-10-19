import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ title, secureTextEntry }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 20,
        backgroundColor: "#F7F8F9",
        height: 60,
        borderRadius: 10,
        alignItems: "center",
        borderColor: "#E8ECF4",
        borderWidth: 1,
      }}
    >
      <TextInput
        style={{
          color: "#8693A3",
          fontFamily: "PBold",
          width: "80%",
          margin: 5,
          fontSize: 15,
        }}
        secureTextEntry={secureTextEntry}
        cursorColor={"black"}
        placeholder={title}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
