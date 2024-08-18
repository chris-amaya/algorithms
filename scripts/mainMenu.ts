import { select } from '@inquirer/prompts'
import { createNewExercise } from '@/createExcercise'
import { listAllExercises } from '@/listExcercises'
import chalk from 'chalk'

export async function mainMenu() {
  const OPTIONS = {
    CREATE: 'CREATE',
    LIST: 'LIST',
    EXIT: 'EXIT',
  }

  const answer = await select({
    message: 'What do you want to do?',
    choices: [
      {
        value: OPTIONS.CREATE,
        name: 'Create a new exercise',
      },
      {
        value: OPTIONS.LIST,
        name: 'List all exercises',
      },
      {
        value: OPTIONS.EXIT,
        name: 'Exit',
      },
    ],
  })

  switch (answer) {
    case OPTIONS.CREATE:
      await createNewExercise()

    case OPTIONS.LIST:
      await listAllExercises()

    default:
      console.log(chalk.blue('Goodbye!'))
      process.exit(0)
  }
}
