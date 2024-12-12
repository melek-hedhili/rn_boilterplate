import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

const Page = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Settings</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
