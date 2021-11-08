import { JsonObject } from '@angular-devkit/core'

export interface TestBuilderSchema extends JsonObject {
  testPath?: string
  outputPath?: string
  main?: string
}