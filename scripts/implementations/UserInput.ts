import { input, confirm } from '@inquirer/prompts'

interface IUserInput {
  input(options: { message: string }): Promise<string>
  confirm(options: { message: string; default: boolean }): Promise<boolean>
}

export class UserInput implements IUserInput {
  async input(options: { message: string }): Promise<string> {
    return input(options)
  }

  async confirm(options: {
    message: string
    default: boolean
  }): Promise<boolean> {
    return confirm(options)
  }
}
