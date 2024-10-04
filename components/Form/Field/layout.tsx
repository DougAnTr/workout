import { ComponentProps, PropsWithChildren } from 'react';
import { Label } from '../../Label';
import { useFormField } from '../../../hooks/useFormField';
import { FormField } from '.';
import { StyleSheet, Text } from 'react-native';

type LayoutFormFieldProps = {
  testID?: ComponentProps<typeof FormField>['testID'];
  label: ComponentProps<typeof FormField>['label'];
  name: ComponentProps<typeof FormField>['name'];
};

export const LayoutFormField = ({
  children,
  label,
  name,
  testID,
}: PropsWithChildren<LayoutFormFieldProps>) => {
  const { formState } = useFormField();
  const errorMessage = formState.errors[name]?.message as string;

  return (
    <Label testID={testID} text={label}>
      {children}

      {errorMessage !== undefined && (
        <Text style={styles.error}>{errorMessage}</Text>
      )}
    </Label>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
  },
});
