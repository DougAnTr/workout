import { describe, expect, it } from '@jest/globals';
import { createWorkout } from '../createWorkout.service';

describe('CreateWorkout Service', () => {
  it('Sould return the created workout', async () => {
    const newWorkout = {
      name: 'A',
      description: 'Costas/Bíceps',
      exercises: ['1'],
    };

    expect(await createWorkout(newWorkout)).toEqual({ id: 1, ...newWorkout });
  });

  it('Should throw if name is empty', async () => {
    const newWorkout = {
      name: '',
      description: 'Costas/Bíceps',
      exercises: ['1'],
    };

    expect(createWorkout(newWorkout)).rejects.toThrow();
  });

  it('Should throw if no exercises are provided', async () => {
    const newWorkout = {
      name: 'A',
      description: 'Costas/Bíceps',
      exercises: [],
    };

    expect(createWorkout(newWorkout)).rejects.toThrow();
  });
});
