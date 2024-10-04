import { IExercise } from '../exercises/types';

export interface IWorkout {
  id: string;
  name: string;
  description: string;
  exercises: IExercise[];
}

export interface ICreateWorkoutParams {
  name: string;
  description?: string;
  exercises: string[];
}
