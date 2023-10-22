import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Input from "../components/Input";
import { Path, Svg } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const register = () => {
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
          marginLeft: 20,
        }}
        numberOfLines={2}
      >
        Hello!
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "PBold",
          margin: 15,
          marginTop: 0,
          marginLeft: 20,
        }}
        numberOfLines={2}
      >
        Register to get started
      </Text>
      <View
        style={{
          margin: 15,
          gap: 15,
          columnGap: 5,
        }}
      >
        <Input title="Username" />
        <Input title="Email" />
        <Input title="Password" secureTextEntry={true} />
        <Input title="Confirm Password" secureTextEntry={true} />
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: "30%",
            borderColor: "#E8ECF4",
            alignSelf: "center",
          }}
        ></View>
        <Text style={{ color: "#6A707C", fontFamily: "PBold", fontSize: 18 }}>
          Or Register with
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: "30%",
            borderColor: "#E8ECF4",
            alignSelf: "center",
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 15,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: width * 0.23,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#E8ECF4",
          }}
        >
          <Svg
            width={25}
            height={25}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M14.7956 25V14.0703H18.3496L18.8779 9.79094H14.7956V7.06518C14.7956 5.83032 15.1272 4.98485 16.8355 4.98485H19V1.16959C17.9468 1.05249 16.8882 0.995949 15.829 1.00023C12.6877 1.00023 10.5308 2.98987 10.5308 6.64245V9.78294H7V14.0623H10.5386V25H14.7956Z"
              fill="#4092FF"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.23,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#E8ECF4",
          }}
        >
          <Svg
            width={25}
            height={25}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M6.42008 15.4656L5.59733 18.537L2.5902 18.6006C1.69151 16.9338 1.18176 15.0266 1.18176 13C1.18176 11.0403 1.65837 9.1922 2.50318 7.56494H2.50383L5.18102 8.05576L6.35379 10.7169C6.10833 11.4325 5.97454 12.2007 5.97454 13C5.97464 13.8675 6.13178 14.6987 6.42008 15.4656Z"
              fill="#FBBB00"
            />
            <Path
              d="M24.6116 10.7921C24.7474 11.507 24.8181 12.2453 24.8181 12.9999C24.8181 13.846 24.7292 14.6713 24.5597 15.4675C23.9844 18.1765 22.4811 20.5421 20.3987 22.2161L20.398 22.2155L17.026 22.0434L16.5487 19.0642C17.9305 18.2538 19.0104 16.9856 19.5793 15.4675H13.2598V10.7921H19.6715H24.6116Z"
              fill="#518EF8"
            />
            <Path
              d="M20.398 22.2156L20.3986 22.2162C18.3733 23.8441 15.8006 24.8181 12.9999 24.8181C8.4993 24.8181 4.58633 22.3026 2.59021 18.6006L6.42008 15.4656C7.41812 18.1292 9.98761 20.0253 12.9999 20.0253C14.2947 20.0253 15.5078 19.6753 16.5486 19.0643L20.398 22.2156Z"
              fill="#28B446"
            />
            <Path
              d="M20.5434 3.90253L16.7149 7.03693C15.6376 6.36357 14.3642 5.97459 12.9999 5.97459C9.91941 5.97459 7.30186 7.95769 6.35382 10.7168L2.50382 7.56487H2.50317C4.47007 3.77267 8.43239 1.18176 12.9999 1.18176C15.8675 1.18176 18.4967 2.2032 20.5434 3.90253Z"
              fill="#F14336"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width * 0.23,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#E8ECF4",
          }}
        >
          <Svg
            width={25}
            height={25}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z"
              fill="#000"
            />
          </Svg>
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
          position: "absolute",
          bottom: 2,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{
            color: "#00D0C2",
            borderColor: "#00D0C2",
            fontFamily: "PBold",
            alignSelf: "center",
          }}
          onPress={() => router.push("/login")}
        >
          Login Now
        </Text>
      </Text>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
