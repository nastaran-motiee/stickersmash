import { Stack } from "expo-router";
import { StrictMode } from "react";

export default function RootLayout() {
  return (
    <StrictMode>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </StrictMode>
  );
}
