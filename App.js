import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { BlurView } from "expo-blur"; // Package import to blur image background
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons"; // Package import for our icons

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <ImageBackground
      source={require("./assets/loginBG.jpg")} //Background image file path
      style={styles.background}
    >
      <BlurView intensity={140} style={styles.blurContainer}>
        {/* Logo Image */}
        <Image
          source={require("./assets/logo.png")} //Logo file path
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Login Container */}
        <View style={styles.loginContainer}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={styles.subText}>Log in your account!</Text>

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={20}
                color="#666"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email or Mobile Number"
                placeholderTextColor="#666"
              />
            </View>
            <View style={styles.underline} />

            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#666"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Ionicons
                  name="eye-off-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIconRight}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.underline} />

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Login Button*/}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Create Account Hyperlink*/}
        <Text style={styles.createAccount}>
          Don't have an account? <Text style={styles.createLink}>Create</Text>
        </Text>
      </BlurView>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 220,
    marginTop: 30,
  },
  loginContainer: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 40,
    padding: 40,
    marginTop: 10,
    marginBottom: 110,
  },
  signInText: {
    alignSelf: "flex-start",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 15,
    color: "#333",
  },
  underline: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: 15,
  },
  inputIcon: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  inputIconRight: {
    paddingRight: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#007BFF",
  },
  loginButton: {
    width: "70%",
    height: 50,
    backgroundColor: "#1F5676",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccount: {
    marginTop: 20,
    color: "#666",
  },
  createLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
