import { useSession } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
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
      <Text>Home</Text>
    </View>
  );
}
