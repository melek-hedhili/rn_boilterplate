import { Redirect, Slot } from "expo-router";
import { useSession } from "@/context/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import * as SystemUI from "expo-system-ui";

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
        await SplashScreen.hideAsync();
        setIsAppReady(true);
      }
    };

    prepareApp();
  }, [isLoading, loadingTheme]);

  // While the app is not ready, keep the splash screen active
  if (!isAppReady) {
    return null;
  }

  // Redirect unauthenticated users to the sign-in page
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
