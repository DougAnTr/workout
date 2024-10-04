import { FormProvider, useForm } from 'react-hook-form';
import { cleanup, fireEvent, render, screen } from '../../utils/test-utils';
import { FormField } from '../Form/Field';
import { ComponentProps } from 'react';
import { Text } from 'react-native';

function RenderFormField(props: ComponentProps<typeof FormField>) {
  const formMethods = useForm();
  const { watch } = formMethods;
  const fieldValue = watch(props.name); // Watch for changes in the form

  return (
    <FormProvider {...formMethods}>
      <FormField {...props} />
      <Text>{fieldValue}</Text> {/* Display watched value for assertion */}
    </FormProvider>
  );
}

describe('FormField', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render an input', () => {
    render(<RenderFormField label='field' name='field' />);

    expect(screen.getByTestId('input')).toBeTruthy();
  });

  it('should render a NumberInput if type is number', () => {
    render(<RenderFormField label='field' name='field' type='number' />);
    expect(screen.getByTestId('number-input')).toBeTruthy();
  });

  it('should update form value when FormField value changes', () => {
    const testValue = 'test value';
    render(<RenderFormField label='field' name='field' />);
    const input = screen.getByTestId('input');

    fireEvent.changeText(input, testValue);
    expect(screen.getByText(testValue)).toBeTruthy();
  });

  it('should update form value when FormField (number) value changes', () => {
    const testValue = '1234';
    render(<RenderFormField label='field' name='field' type='number' />);
    const input = screen.getByTestId('input');

    fireEvent.changeText(input, testValue);
    expect(screen.getByText(testValue)).toBeTruthy();
  });
});
