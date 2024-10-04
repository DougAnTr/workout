import { KeyboardAvoidingView, Text } from 'react-native';
import { Input } from '../Input';
import { Divider } from '../Divider';
import { Button } from '../Button';

export function FormCreateWorkoutPlan() {
  return (
    <KeyboardAvoidingView>
      <Text>Create your workout plan</Text>

      <Input placeholder={'Plan name'} />
      <Input placeholder={'Description'} />

      <Divider />

      <Text>Workouts</Text>

      <Button>Add workout</Button>
    </KeyboardAvoidingView>
  );
}
