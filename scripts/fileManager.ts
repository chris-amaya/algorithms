import chalk from 'chalk'
import { mkdir } from 'fs/promises'

export class FileManager {
  static async createFolder(folderPath: string) {
    try {
      return await mkdir(folderPath, { recursive: true })
    } catch (error) {
      console.error(
        chalk.red(`An error occurred while creating ${folderPath}.`),
      )
      process.exit(0)
    }
  }

  static async writeFile(path: string, content: string) {}
  static async readTemplate(path: string) {}
}
