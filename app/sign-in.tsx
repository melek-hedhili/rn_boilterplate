import Input from "@/components/Input/input";
import { useSession } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "@/hooks/useTranslation";
import { changeLanguage, LanguageType } from "@/i18n";
import { router } from "expo-router";
import {
  Controller,
  Form,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import { I18nManager } from "react-native";
interface FormValues {
  firstName: string;
  lastName: string;
}
export default function SignIn() {
  const { signIn } = useSession();
  const { t } = useTranslation();
  const { theme, switchTheme } = useTheme();
  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    signIn();

    router.replace("/(protected)/(tabs)/settings");
  };
  return (
    <FormProvider {...methods}>
      <View
        style={{
          direction: I18nManager.isRTL ? "rtl" : "ltr",
          flex: 1,
          justifyContent: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {flags.map((flag, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                changeLanguage(flag.code);
              }}
            >
              <Image
                resizeMode="contain"
                source={flag.icon}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Input
          name="firstName"
          placeholder="First Name"
          rules={{ required: t("error.required") }}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          rules={{
            required: t("error.required"),
          }}
        />
        <Button
          title={t("common.signin")}
          onPress={methods.handleSubmit(onSubmit)}
        />
        {/* Debug: Display if RTL is active */}
        <View
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#f0f0f0",
            alignItems: "center",
          }}
        >
          <Text>Is RTL Active: {I18nManager.isRTL ? "Yes" : "No"}</Text>
          <Button title="Switch Theme" onPress={switchTheme} />
        </View>
      </View>
    </FormProvider>
  );
}

const flags: Array<Flag> = [
  {
    icon: require("@/assets/icons/png/en.png"),
    name: "English",
    code: "en-US",
  },
  {
    icon: require("@/assets/icons/png/fr.png"),
    name: "French",
    code: "fr-FR",
  },
  {
    icon: require("@/assets/icons/png/ar.png"),
    name: "Arabic",
    code: "ar-AR",
  },
];
type Flag = {
  icon: any;
  name: string;
  code: LanguageType;
};
