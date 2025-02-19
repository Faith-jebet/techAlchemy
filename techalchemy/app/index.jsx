import { Text, View, Button } from "react-native";
import Login from "./Login";
import { Link } from "expo-router";
import React from "react";


export default function Index() {
  return (
    <View>
      <Text>Hello World.</Text>
      <Link href="/Login">Login</Link>
    </View>
  );
}
