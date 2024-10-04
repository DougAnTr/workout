import { describe, expect, it } from '@jest/globals';
import { createWorkoutPlan } from '../createWorkoutPlan.service';

describe('CreateWorkoutPlan Service', () => {
  it('should return the created workout plan', async () => {
    const newWorkoutPlan = {
      name: 'Full Body',
      description: '3 vezes na semana',
      workouts: ['1', '2', '3'],
    };

    expect(await createWorkoutPlan(newWorkoutPlan)).toEqual({
      id: '1',
      ...newWorkoutPlan,
    });
  });
});
