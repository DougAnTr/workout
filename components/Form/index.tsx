import { ComponentProps, PropsWithChildren } from "react"
import { FormProvider } from "react-hook-form"
import { KeyboardAvoidingView } from "react-native"

type FormProps = ComponentProps<typeof FormProvider> & PropsWithChildren;

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <KeyboardAvoidingView>
      <FormProvider {...props}>
        {children}
      </FormProvider>
    </KeyboardAvoidingView>
  )
}
