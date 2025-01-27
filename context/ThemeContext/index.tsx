import React, { useCallback, useEffect, useContext, useState } from "react";

// Types
import {
  ThemeValues,
  ThemeProviderProps,
  AppearanceProps,
  ThemeState,
} from "./Types";
import { DefaultTheme, generateTheme } from "./Utils";
import { useStorageState } from "@/hooks/useStorageState";

const ThemeContext = React.createContext<ThemeValues | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme,
  darkTheme,
  scheme,
  children,
}) => {
  const [[isLoading, appearance], setAppearance] =
    useStorageState("appearance");

  const [state, setState] = useState<ThemeState>({
    theme: generateTheme(DefaultTheme),
    appearance: null,
    loadingTheme: true,
  });

  // Retrieve saved appearance or default to `scheme` if not set
  useEffect(() => {
    const initializeAppearance = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          appearance: (appearance as AppearanceProps | undefined) || scheme,
          loadingTheme: false,
        }));
      } catch (error) {
        console.error("Error initializing appearance", error);
        setState((prevState) => ({
          ...prevState,
          appearance: scheme,
          loadingTheme: false,
        }));
      }
    };

    initializeAppearance();
  }, [scheme, appearance, isLoading]);

  // Update theme based on current appearance
  useEffect(() => {
    if (!isLoading) {
      const resolvedAppearance =
        (appearance as AppearanceProps | undefined) || scheme;
      const resolvedTheme =
        resolvedAppearance === "dark" && darkTheme
          ? generateTheme(darkTheme)
          : generateTheme(defaultTheme || DefaultTheme);

      setState({
        theme: resolvedTheme,
        appearance: resolvedAppearance,
        loadingTheme: false, // Finish loading after state sync
      });
    }
  }, [isLoading, appearance, scheme, darkTheme, defaultTheme]);

  // Function to toggle between light and dark themes
  const switchTheme = useCallback(async () => {
    try {
      // Determine the new appearance by toggling the current appearance
      const newAppearance = state.appearance === "dark" ? "light" : "dark";

      // Save the new appearance in expo secure storage
      setAppearance(newAppearance);

      // Select the theme based on the new appearance
      const themeToUse = newAppearance === "dark" ? darkTheme : defaultTheme;

      // Generate the new theme
      const newTheme = generateTheme(themeToUse || DefaultTheme);

      // Update the state with the new theme and appearance
      setState((prevState) => ({
        ...prevState,
        theme: newTheme,
        appearance: newAppearance,
      }));

      console.log("Current theme", newAppearance);
    } catch (error) {
      console.log("Error switching theme", error);
    }
  }, [darkTheme, defaultTheme, state.appearance]);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        switchTheme,
        loadingTheme: isLoading || state.loadingTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for consuming ThemeContext
export const useTheme = (): ThemeValues => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
