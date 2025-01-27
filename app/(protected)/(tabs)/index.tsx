import { useTheme } from "@/context/ThemeContext";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
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
      <Link href="/home/1">
        <Text>Home</Text>
      </Link>
    </View>
  );
}
