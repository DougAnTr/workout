import { useFormContext } from "react-hook-form";

export function useFormField() {
  const formContext = useFormContext()

  if (!formContext) {
    throw new Error('FormField must be used inside a Form component');
  }

  return formContext;
}
