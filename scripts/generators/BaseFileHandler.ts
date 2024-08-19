import { Logger } from '@/utils/Logger'
import { mkdir, readFile, writeFile } from 'fs/promises'

export class BaseFileHandler {
  static async createFolder(folderPath: string) {
    try {
      return await mkdir(folderPath, { recursive: true })
    } catch (error) {
      Logger.error(`An error occurred while creating ${folderPath}.`)
    }
  }

  static async writeFile(filePath: string, content: string) {
    try {
      return await writeFile(filePath, content, { encoding: 'utf8' })
    } catch (error) {
      Logger.error(`An error occurred while writing to ${filePath}`)
    }
  }

  static async readTemplate(path: string) {
    return await readFile(path, { encoding: 'utf8' })
  }
}
