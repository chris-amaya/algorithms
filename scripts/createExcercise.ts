import { ExerciseCreator } from './core/exerciseCreator'
import { UserInput } from './implementations/UserInput'

export async function createNewExercise() {
  await new ExerciseCreator(new UserInput()).createNewExcercise()
}
