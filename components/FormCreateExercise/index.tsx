import { KeyboardAvoidingView, Text } from "react-native";
import { Button } from "../Button";
import { FormField } from "../Form/Field";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const resolver = z.object({
  name: z.string({ required_error: 'Name is required' }),
  sets: z.string({ required_error: 'Number of sets is required' }),
  repetitions: z.string({ required_error: 'Number of repetitions is required' }),
  load: z.string({ required_error: 'Load is required' }),
  restMinutes: z.string({ required_error: 'Rest minutes is required' })
})

export const FormCreateExercise: React.FC = () => {
  const formMethods = useForm({ mode: 'onSubmit', resolver: zodResolver(resolver) });
  const { handleSubmit } = formMethods;

  const onSubmit = (data: any) => { }

  return (
    <KeyboardAvoidingView>
      <FormProvider {...formMethods}>
        <Text>Create an exercise</Text>

        <FormField testID="name-field" label="Name" name="name" />
        <FormField testID="sets-field" label="Sets" name="sets" />
        <FormField testID="repetitions-field" label="Repetitions" name="repetitions" />
        <FormField testID="load-field" label="Load" name="load" />
        <FormField testID="rest-minutes-field" label="Rest minutes" name="restMinutes" />

        <Button testID="create-exercise-button" onPress={handleSubmit(onSubmit)}>Create exercise</Button>
      </FormProvider>
    </KeyboardAvoidingView>
  )
}
