import chalk from 'chalk'
import figlet from 'figlet'

export function showWelcomeBanner(): void {
    console.log(
        chalk.yellow(
            figlet.textSync('Algo Practice', { horizontalLayout: 'full' })
        )
    )
    console.log(chalk.green('Welcome to your Algorithm Practice CLI!\n'))
}
