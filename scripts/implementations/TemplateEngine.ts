import { FileManager } from '@/fileManager'
import Handlebars from 'handlebars'

export class TemplateEngine {
  constructor() {}

  static compile(template: string): (data: object) => string {
    return Handlebars.compile(template)
  }

  static async getTemplate(templatePath: string) {
    const templateContent = await FileManager.readTemplate(templatePath)
    return Handlebars.compile(templateContent)
  }
}
