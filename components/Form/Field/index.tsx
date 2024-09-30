import { Input } from "../../Input";
import { useFormField } from "../../../hooks/useFormField";
import { LayoutFormField } from "./layout";
import { NumberInput } from "../../NumberInput";
import { ComponentProps } from "react";

type TDefaultFormField = {
  testID?: string;
  label: string;
  name: string;
}

type TFormFieldText = TDefaultFormField & {
  type?: 'text';
} & ComponentProps<typeof Input>;

type TFormFieldNumber = TDefaultFormField & {
  type: 'number';
} & ComponentProps<typeof NumberInput>;

type TFormField = TFormFieldText | TFormFieldNumber;

export const FormField: React.FC<TFormField> = (props) => {
  const { testID, label, name, type = 'text' } = props;
  const { register } = useFormField();

  if (type === 'number') {
    const { min, max, ...numberProps } = props as TFormFieldNumber;
    return (
      <LayoutFormField testID={testID} label={label} name={name}>
        <NumberInput {...register(name)} min={min} max={max} {...numberProps} testID="number-input" />
      </LayoutFormField>
    );
  }

  const textProps = props as TFormFieldText;
  return (
    <LayoutFormField testID={testID} label={label} name={name}>
      <Input {...register(name)} {...textProps} testID="text-input" />
    </LayoutFormField>
  );
};
