import { Input } from "../../Input";
import { useFormField } from "../../../hooks/useFormField";
import { LayoutFormField } from "./layout";

type TFormField = {
  testID?: string;
  label: string;
  name: string;
}

export const FormField: React.FC<TFormField> = ({ testID, label, name }) => {
  const { register } = useFormField();

  return (
    <LayoutFormField testID={testID} label={label} name={name}>
      <Input {...register(name)} />

    </LayoutFormField>
  )
}


