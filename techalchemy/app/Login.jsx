import { Text, View, Image, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
const LogoImage = require("../assets/images/icon.png");

function PasswordInput() {
  const [password, setPassword] = useState("");
  
  return (
    <TextInput
      style={[styles.UserInput, styles.spacing]}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
    />
  );
}

export default function Login() {
  return (
    <>
      <View style={styles.container}>

        <View style={styles.header1}>
          <Text style={styles.headerText}>Login</Text>
          <Image source={LogoImage} style={{ width: 50, height: 50 }} />
        </View>

        <Text style={styles.spacing}>Enter your Login details below</Text>
        <Text style={styles.spacing}>Email:</Text>
        <TextInput
          keyboardType="email-address"
          style={[styles.UserInput, styles.spacing]}
          placeholder="Email"
          autoCapitalize="none"
        />
        <Text style={styles.spacing}>Username:</Text>
        <TextInput
          style={[styles.UserInput, styles.spacing]}
          placeholder="Username"
        />
        <Text style={styles.spacing}>Password:</Text>
        <PasswordInput />
        <Button title="Login" onPress={() => alert("Login Successful")} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 0,
  },
  UserInput: {
    height: 40,
    borderColor: "cyan",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 10,
  },
  header1: {
    backgroundColor: "cyan",
    width: "100%",
    alignItems: "center",
    padding: 10,
    height: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  spacing: {
    marginVertical: 10,
  },
});
