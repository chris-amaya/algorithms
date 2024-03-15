import chalk from 'chalk'
import inquirer from 'inquirer'
import { mainMenu } from './mainMenu.js'

export function createNewExercise(): void {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'exerciseName',
                message: 'Exercise name:',
            },
        ])
        .then((answers: { exerciseName: string }) => {
            const exerciseName = answers.exerciseName
            // Logic to create the exercise files goes here
            console.log(
                chalk.green(`Exercise ${exerciseName} created successfully!`)
            )
            mainMenu() // Show the main menu again
        })
}
