import chalk from 'chalk'

// TODO: implement output to .txt files
export class Logger {
  static success(text: string): void {
    console.log(chalk.green(text))
  }
  static error(text: string): void {
    console.error(chalk.red(text))
  }
}
