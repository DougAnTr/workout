import { IExercise, ICreateExerciseParams } from '../types';

let exercises: IExercise[] = [];

export async function createExercise(data: ICreateExerciseParams) {
  if (!data.name.length) {
    throw new Error('Name is required');
  }

  if (
    exercises.find(
      exercise => exercise.name.toLowerCase() === data.name.toLowerCase(),
    )
  ) {
    throw new Error('Exercise already exists');
  }

  const id = String(exercises.length + 1);
  exercises.push({ id, ...data });

  return { id, ...data };
}

export function clearExercises() {
  exercises = [];
}
