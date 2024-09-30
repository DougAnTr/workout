import { FormProvider, useForm } from "react-hook-form";
import { render, screen } from "../../utils/test-utils"
import { FormField } from "../Form/Field"
import { ComponentProps } from "react";

function RenderFormField(props: ComponentProps<typeof FormField>) {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}><FormField {...props} /></FormProvider>
  )
}


describe('FormField', () => {
  it('should render an input', () => {
    render(<RenderFormField label="field" name="field" />);

    expect(screen.getByTestId('input')).toBeTruthy();
  });

  it('should render a NumberInput if type is number', () => {
    render(<RenderFormField label="field" name="field" type="number" />);
    expect(screen.getByTestId('number-input')).toBeTruthy();
  })
})
