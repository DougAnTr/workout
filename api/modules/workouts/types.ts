export interface IWorkout {
  id: string;
  name: string;
  description: string;
}

export interface ICreateWorkoutParams {
  name: string;
  description?: string;
  exercises: string[];
}
