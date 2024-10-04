export interface IExercise {
  id: string;
  name: string;
}

export interface IExerciseProgress {
  id: string;
  exerciseId: string;
  sets: number;
  repetitions: number;
  load: number;
  rest: number;
}

export interface ICreateExerciseParams {
  name: IExercise['name'];
  sets: IExerciseProgress['sets'];
  repetitions: IExerciseProgress['repetitions'];
  load: IExerciseProgress['load'];
}
