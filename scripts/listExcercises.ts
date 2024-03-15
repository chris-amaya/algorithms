import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import { mainMenu } from './mainMenu.js'
const { pathname: root } = new URL('../', import.meta.url)

export function listAllExercises(): void {
    const exercisesDir = path.join(root, 'src') // Adjust the directory as needed
    fs.readdir(exercisesDir, (err, files) => {
        if (err) {
            console.log(chalk.red('Failed to list exercises:', err))
            return mainMenu() // Show the main menu again in case of error
        }
        console.log(chalk.yellow('Available Exercises:'))
        files.forEach((file) => {
            console.log(chalk.yellow(file))
        })
        mainMenu() // Show the main menu again
    })
}
