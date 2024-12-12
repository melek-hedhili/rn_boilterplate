import { Controller, useFormContext } from "react-hook-form";
import { CustomInputProps } from "./input.types";

import { View, StyleSheet, TextInput, Text } from "react-native";

const Input: React.FC<CustomInputProps> = ({
  name,
  rules = {},
  placeholder,
  label,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              {...props}
            />
            {error && error.type === "required" && (
              <Text style={styles.errorText}>
                {error.message || "Some Error Occured"}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
