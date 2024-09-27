import { KeyboardAvoidingView, Text } from "react-native";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";

export const FormCreateExercise: React.FC = () => {
  return (
    <KeyboardAvoidingView>
      <Text>Create an exercise</Text>

      <Label testID="name-field" text="Name">
        <Input />
      </Label>

      <Label testID="sets-field" text="Sets">
        <Input />
      </Label>

      <Label testID="repetitions-field" text="Repetitions">
        <Input />
      </Label>

      <Label testID="load-field" text="Load">
        <Input />
      </Label>

      <Label testID="rest-minutes-field" text="Rest minutes">
        <Input />
      </Label>

      <Button testID="create-exercise-button">Create exercise</Button>
    </KeyboardAvoidingView>
  )
}
