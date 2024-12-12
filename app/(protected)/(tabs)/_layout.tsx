import { useSession } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { signOut } = useSession();
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.appBarBottom().icon,
        headerTitleStyle: {
          color: theme.appBarTop().text,
        },

        headerStyle: {
          backgroundColor: theme.appBarTop().header,
        },
        tabBarStyle: {
          backgroundColor: theme.appBarBottom().container,
        },
        headerRight: () => (
          <FontAwesome
            size={24}
            name="sign-out"
            onPress={signOut}
            color={theme.appBarTop().icon}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
