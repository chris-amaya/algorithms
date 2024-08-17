import chalk from 'chalk'
import { input, select, checkbox, confirm } from '@inquirer/prompts'
import { mainMenu } from './mainMenu'
import Handlebars from 'handlebars'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function createNewExercise() {
  const exerciseName = await input({ message: 'Exercise name' })
  let linkExercise = await input({
    message: `What's the link's exercise`,
  })
  const userWantsFolderPath = await confirm({
    message: 'Do you want this file to be stored in a specific folder?',
    default: false,
  })

  linkExercise = '//' + linkExercise

  let folderPath = 'src/'
  let folderTestPath = 'tests/'
  if (userWantsFolderPath) {
    const path = await input({ message: 'Enter folder path' })
    folderPath = `${folderPath}${path}`
    folderTestPath = `${folderTestPath}${path}`
  }

  const relativeTestFilePath = path.join('..', folderPath, `${exerciseName}`)

  // Generating exercise file
  const filePath = path.join(__dirname, '..', folderPath, `${exerciseName}.ts`)
  const templatePath = path.join(__dirname, 'templates/exercise.hbs')
  const templateContent = fs.readFileSync(templatePath, 'utf8')
  const template = Handlebars.compile(templateContent)
  const fileContent = template({ exerciseName, linkExercise })

  // generating exercise test file
  const fileTestPath = path.join(
    __dirname,
    '..',
    folderTestPath,
    `${exerciseName}.spec.ts`,
  )

  const templateTestPath = path.join(__dirname, 'templates/exercise.spec.hbs')
  const templateTestContent = fs.readFileSync(templateTestPath, 'utf8')
  const templateTest = Handlebars.compile(templateTestContent)
  const fileTestContent = templateTest({
    exerciseName,
    linkExercise,
    pathExercise: relativeTestFilePath,
  })

  fs.writeFile(filePath, fileContent, 'utf8', (error) => {
    if (error) {
      console.error(
        chalk.red('An error occurred while generating the exercise file.'),
      )
    } else {
      console.log(chalk.green('Exercise file generated successfully.'))
    }
    process.exit(0)
  })

  fs.writeFile(fileTestPath, fileTestContent, 'utf8', (error) => {
    if (error) {
      console.error(
        chalk.red('An error occurred while generating the exercise test file.'),
      )
    } else {
      console.log(chalk.green('Exercise test file generated successfully.'))
    }
    process.exit(0)
  })
}
