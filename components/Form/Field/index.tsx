import { Input } from "../../Input"
import { Label } from "../../Label"
import { useFormField } from "../../../hooks/useFormField";
import { StyleSheet, Text } from "react-native";

type TFormField = {
  testID?: string;
  label: string;
  name: string;
}

export const FormField: React.FC<TFormField> = ({ testID, label, name }) => {
  const { register, formState } = useFormField();
  const errorMessage = formState.errors[name]?.message as string;

  return (
    <Label testID={testID} text={label}>
      <Input {...register(name)} />

      {errorMessage !== undefined && <Text style={styles.error}>{errorMessage}</Text>}
    </Label>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
  }
})
