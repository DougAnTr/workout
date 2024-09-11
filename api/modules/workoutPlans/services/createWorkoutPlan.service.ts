import { TCreateWorkoutPlanParams } from "../types";

export async function createWorkoutPlan(data: TCreateWorkoutPlanParams) {
  return { id: "1", ...data };
}
