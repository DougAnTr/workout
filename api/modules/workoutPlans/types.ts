import { IWorkout } from '../workouts/types';

type TWorkoutPlanWorkout = IWorkout & {
  order: number;
};

export interface IWorkoutPlan {
  id: string;
  name: string;
  description: string;
  workouts: TWorkoutPlanWorkout[];
}

export type TCreateWorkoutPlanParams = Omit<IWorkoutPlan, 'id' | 'workouts'> & {
  workouts: string[];
};
