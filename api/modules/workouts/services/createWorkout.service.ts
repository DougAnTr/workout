import { ICreateWorkoutParams } from '../types';

export async function createWorkout(data: ICreateWorkoutParams) {
  if (data.name.length === 0) {
    throw new Error('Name is required');
  }

  if (data.exercises.length === 0) {
    throw new Error('Workout must have at least one exercise');
  }

  return { id: 1, ...data };
}
