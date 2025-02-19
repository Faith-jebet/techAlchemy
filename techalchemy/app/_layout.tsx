import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerBackTitle: "Home",
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerBackTitle: "Login",
        }}
      />
    </Stack>
  );
}
