import { JsonObject } from '@angular-devkit/core'

export interface TestBuilderSchema extends JsonObject {
  cwd?: string
  cmd?: string
  testCmd?: string
  outputPath?: string
  main?: string
}