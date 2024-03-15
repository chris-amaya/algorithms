import inquirer from 'inquirer'
import { createNewExercise } from './createExcercise.js'
import { listAllExercises } from './listExcercises.js'
import chalk from 'chalk'

export function mainMenu(): void {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    'Create a new exercise',
                    'List all exercises',
                    'Exit',
                ],
            },
        ])
        .then((answers: any) => {
            switch (answers.action) {
                case 'Create a new exercise':
                    createNewExercise()
                    break
                case 'List all exercises':
                    listAllExercises()
                    break
                default:
                    console.log(chalk.blue('Goodbye!'))
                    process.exit(0)
            }
        })
}
