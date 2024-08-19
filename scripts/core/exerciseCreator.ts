import { FileManager } from '@/fileManager'
import { UserInput } from '@/implementations/UserInput'
import { ExerciseFileGenerator } from '@/generators/ExerciseFileGenerator'

export class ExerciseCreator {
  private exerciseName: string = ''
  private folderPath: string = ''
  private linkExercise: string = ''
  private folderTestPath: string = ''

  constructor(private userInput: UserInput) {}

  async createNewExcercise() {
    this.exerciseName = await this.userInput.input({
      message: 'Exercise Name',
    })
    this.linkExercise = await this.userInput.input({
      message: "What's the link's exercise",
    })
    const userWantsCreateFolder = await this.userInput.confirm({
      message: 'Do you want this file to be stored in a specific folder',
      default: false,
    })

    if (userWantsCreateFolder) {
      const folderPath = await this.userInput.input({
        message: 'Enter folder path',
      })
      this.folderPath = `src/${folderPath}`
      this.folderTestPath = `tests/${folderPath}`

      FileManager.createFolder(this.folderPath)
      FileManager.createFolder(this.folderTestPath)
    }

    const exerciseGenerator = new ExerciseFileGenerator(this.exerciseName)

    const fileData = {
      exerciseName: this.exerciseName,
      linkExercise: this.linkExercise,
    }

    // Generate exercise file
    await exerciseGenerator.generateFile(
      'exercise',
      'scripts/templates/exercise.hbs',
      fileData,
    )

    // Generate test file
    await exerciseGenerator.generateFile(
      'test',
      'scripts/templates/exercise.spec.hbs',
      {
        ...fileData,
        pathExercise: `@/${this.exerciseName}`,
      },
    )
  }
}
