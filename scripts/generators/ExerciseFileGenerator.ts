import path from 'path'
import { FileManager } from '../fileManager'
import { TemplateEngine } from '@/implementations/TemplateEngine'

// export const __dirname = new URL(import.meta.url).pathname

export class ExerciseFileGenerator {
  constructor(private fileName: string) {}

  private getFilePath(type: 'exercise' | 'test'): string {
    let fileName = ''
    let folderPath = ''
    if (type === 'exercise') {
      folderPath = 'src/'
      fileName = `${this.fileName}.ts`
    } else {
      folderPath = 'tests/'
      fileName = `${this.fileName}.spec.ts`
    }

    return path.join(process.cwd(), folderPath, fileName)
  }

  async generateFile(
    type: 'exercise' | 'test',
    templatePath: string,
    templateData: object,
  ) {
    const filePath = this.getFilePath(type)
    const template = await TemplateEngine.getTemplate(templatePath)
    const fileContent = await template(templateData)

    await FileManager.writeFile(filePath, fileContent)
  }
}
