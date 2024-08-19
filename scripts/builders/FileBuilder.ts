import { FileManager } from "@/fileManager";
import path from 'path'
import fs from 'fs'

export class FileBuilder {
    private exerciseName: string;
    private linkExercise: string;
    private srcFolderPath: string;
    private testsFolderPath: string;
    private fileSystem: FileManager
  
    constructor(exerciseName: string, linkExercise: string, fileSystem: FileManager) {
      this.exerciseName = exerciseName;
      this.linkExercise = linkExercise;
      this.fileSystem = fileSystem
      this.srcFolderPath = path.join(__dirname, 'src');
      this.testsFolderPath = path.join(__dirname, 'tests');
    }
  
    async buildExerciseFile(): Promise<void> {
      const templatePath = path.join(__dirname, 'templates', 'exercise.hbs');
      const filePath = path.join(this.srcFolderPath, `${this.exerciseName}.ts`);
      await this.generateFile(filePath, templatePath, {
        exerciseName: this.exerciseName,
        linkExercise: this.linkExercise,
      });
    }
  
    async buildTestFile(): Promise<void> {
      const templatePath = path.join(__dirname, 'templates', 'exercise.spec.hbs');
      const filePath = path.join(this.testsFolderPath, `${this.exerciseName}.spec.ts`);
      const relativeExercisePath = path.join('..', 'src', this.exerciseName);
  
      await this.generateFile(filePath, templatePath, {
        exerciseName: this.exerciseName,
        linkExercise: this.linkExercise,
        pathExercise: relativeExercisePath,
      });
    }
  
    private async generateFile(filePath: string, templatePath: string, templateData: object): Promise<void> {
      const templateContent = fs.readFileSync(templatePath, 'utf8');
      const template = Handlebars.compile(templateContent);
      const fileContent = template(templateData);
  
      await fs.promises.writeFile(filePath, fileContent, 'utf8');
      console.log(`File generated: ${filePath}`);
    }
  }