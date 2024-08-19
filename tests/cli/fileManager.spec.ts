import { FileManager } from 'scripts/fileManager'
import { mkdir, writeFile, readFile } from 'fs/promises'
import { MockInstance, vi } from 'vitest'
import { Logger } from '@/implementations/Logger'

vi.mock('fs/promises')

describe('fileManager', () => {
  let loggerError: MockInstance

  afterEach(() => {
    loggerError = vi.spyOn(Logger, 'error')
    vi.clearAllMocks()
  })

  it('should create a folder', async () => {
    await FileManager.createFolder('test')
    expect(mkdir).toHaveBeenCalledWith('test', { recursive: true })
  })

  it("should exit when can't create a folder", async () => {
    vi.mocked(mkdir).mockRejectedValue(new Error('Error while creating folder'))
    const folderPath = 'test'
    await FileManager.createFolder(folderPath)

    expect(loggerError).toHaveBeenCalledWith(
      `An error occurred while creating ${folderPath}.`,
    )
  })

  it('should write a file', () => {
    FileManager.writeFile('test.txt', 'test')
    expect(writeFile).toHaveBeenCalledWith('test.txt', 'test', {
      encoding: 'utf8',
    })
  })

  it('should display error when error writing to file', async () => {
    vi.mocked(writeFile).mockRejectedValue(
      new Error('Error while creating file'),
    )
    const filePath = 'test.txt'
    await FileManager.writeFile(filePath, 'test')

    expect(loggerError).toHaveBeenCalledWith(
      `An error occurred while writing to ${filePath}`,
    )
  })

  it('should read template', () => {
    FileManager.readTemplate('test.txt')
    expect(readFile).toHaveBeenCalled()
  })
})
