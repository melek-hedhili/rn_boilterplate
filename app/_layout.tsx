import { SessionProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { darkTheme, lightTheme } from "@/utils/Theme";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ReactScan } from "react-scan/native";

export default function Root() {
  const scheme = useColorScheme();

  return (
    <ReactScan
      options={{
        enabled: false,
        log: true,
        animationWhenFlashing: false,
      }}
    >
      <SessionProvider>
        <ThemeProvider
          scheme={scheme}
          darkTheme={darkTheme}
          defaultTheme={lightTheme}
        >
          <StatusBar style={"auto"} />
          <Slot />
        </ThemeProvider>
      </SessionProvider>
    </ReactScan>
  );
}
