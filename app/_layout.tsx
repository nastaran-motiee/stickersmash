import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";

export default function RootLayout() {
  return (
    <StrictMode>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </StrictMode>
  );
}
