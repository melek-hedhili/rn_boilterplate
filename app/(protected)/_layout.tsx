import { Redirect, Stack } from "expo-router";
import { useSession } from "@/context/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import * as SystemUI from "expo-system-ui";
import { ActivityIndicator, View } from "react-native";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function ProtectedLayout() {
  const { session, isLoading } = useSession();
  const [isAppReady, setIsAppReady] = useState(false);
  const { loadingTheme, theme } = useTheme();

  useEffect(() => {
    const prepareApp = async () => {
      SystemUI.setBackgroundColorAsync(theme.colors.background);
      if (!isLoading && !loadingTheme) {
        setIsAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, [isLoading, loadingTheme]);

  // While the app is not ready, keep the splash screen active
  if (!isAppReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="home/[id]" options={{ headerShown: true }} />
    </Stack>
  );
}
