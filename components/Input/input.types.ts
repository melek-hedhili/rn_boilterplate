import { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { TextInputProps } from "react-native";

type CustomInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: string;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  placeholder?: string;
  label?: string;
} & TextInputProps;
export type { CustomInputProps };
