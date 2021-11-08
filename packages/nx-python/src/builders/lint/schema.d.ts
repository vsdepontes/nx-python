import { JsonObject } from '@angular-devkit/core'

export interface LintBuilderSchema extends JsonObject {
  sourcePath?: string
  outputPath?: string
  main?: string
}