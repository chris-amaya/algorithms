import chalk from 'chalk'

// TODO: implement output to .txt files
export class Logger {
  static log(text: string) {
    console.log(chalk.green(text))
  }

  static error(text: string) {
    console.error(chalk.red(text))
  }
}
