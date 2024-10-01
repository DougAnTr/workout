import { Input } from "../../Input";
import { useFormField } from "../../../hooks/useFormField";
import { LayoutFormField } from "./layout";
import { NumberInput } from "../../NumberInput";
import { ComponentProps, useEffect } from "react";

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
  const { watch, setValue } = useFormField();

  if (type === 'number') {
    const { min, max, ...numberProps } = props as TFormFieldNumber;
    return (
      <LayoutFormField testID={testID} label={label} name={name}>
        <NumberInput  {...numberProps} value={watch(name)} onChangeText={(text) => setValue(name, text)} min={min} max={max} testID="number-input" />
      </LayoutFormField>
    );
  }

  const textProps = props as TFormFieldText;
  return (
    <LayoutFormField testID={testID} label={label} name={name}>
      <Input {...textProps} value={watch(name)} onChangeText={(text) => setValue(name, text)} testID="text-input" />
    </LayoutFormField>
  );
};
