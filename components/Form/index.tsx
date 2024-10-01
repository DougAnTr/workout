import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";

type FormProps<T extends FieldValues> = PropsWithChildren & UseFormReturn<T>;

export const Form = <T extends FieldValues>({ children, ...props }: FormProps<T>) => {
  return (
    <KeyboardAvoidingView>
      <FormProvider {...props}>
        {children}
      </FormProvider>
    </KeyboardAvoidingView>
  )
}
