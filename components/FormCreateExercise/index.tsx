import { Text } from "react-native";
import { Button } from "../Button";
import { FormField } from "../Form/Field";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from "../Form";
import { createExercise } from "../../api/modules/exercises/services/createExercise.service";

const resolver = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  sets: z.coerce.number({ required_error: 'Number of sets is required' }).min(1, 'Number of sets should be more or equal to 1'),
  repetitions: z.coerce.number({ required_error: 'Number of repetitions is required' }).min(1, 'Number of repetitions should be more or equal to 1'),
  load: z.coerce.number({ required_error: 'Load is required' }).min(1, 'Load should be more or equal to 1'),
  restMinutes: z.coerce.number({ required_error: 'Rest minutes is required' }).min(1, 'Rest minutes should be more or equal to 1'),
})

export type TFormCreateExercise = z.infer<typeof resolver>;

export const FormCreateExercise: React.FC = () => {
  const formMethods = useForm<TFormCreateExercise>({
    mode: 'onSubmit',
    resolver: zodResolver(resolver),
    defaultValues: {
      sets: 1,
      repetitions: 1,
      load: 1,
      restMinutes: 1
    }
  });
  const { handleSubmit } = formMethods;

  const onSubmit = async (data: TFormCreateExercise) => {
    await createExercise(data)
  }

  return (
    <Form {...formMethods}>
      <Text>Create an exercise</Text>

      <FormField testID="name-field" label="Name" name="name" />
      <FormField testID="sets-field" label="Sets" name="sets" type="number" min={1} />
      <FormField testID="repetitions-field" label="Repetitions" name="repetitions" type="number" min={1} />
      <FormField testID="load-field" label="Load (KG)" name="load" type="number" min={1} />
      <FormField testID="rest-minutes-field" label="Rest minutes" name="restMinutes" type="number" min={1} />

      <Button testID="create-exercise-button" onPress={handleSubmit(onSubmit)}>Create exercise</Button>
    </Form>
  )
}
