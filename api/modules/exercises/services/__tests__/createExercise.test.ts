import { afterEach, describe, expect, it } from "@jest/globals";
import { clearExercises, createExercise } from "../createExercise.service";

describe("CreateExercise service", () => {
  afterEach(() => clearExercises());

  it("should return the created exercise", async () => {
    const newExerciseData = {
      name: "Supino reto",
      load: 30,
      sets: 3,
      repetitions: 10,
    };

    const newExercise = await createExercise(newExerciseData);

    expect(newExercise).toEqual({ ...newExerciseData, id: "1" });
  });

  it("should throw an error if name is empty", async () => {
    const newExerciseData = {
      name: "",
      load: 30,
      sets: 3,
      repetitions: 10,
    };

    expect(createExercise(newExerciseData)).rejects.toThrow();
  });

  it("should throw if exercise already exists | case insensitive", async () => {
    const newExerciseData = {
      name: "Supino reto",
      load: 30,
      sets: 3,
      repetitions: 10,
    };

    await createExercise(newExerciseData);
    expect(
      createExercise({ ...newExerciseData, name: "supino reto" }),
    ).rejects.toThrow();
  });
});
