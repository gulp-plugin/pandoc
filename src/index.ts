import { Transform, TransformCallback } from 'stream'
import { PdcTs } from 'pdc-ts'

import File = require('vinyl');

export interface PandocOptions {
  from?: string
  to?: string
  ext?: string
  args?: string[]
}

export function pandoc(options: PandocOptions): Transform {
  const from = options.from ?? 'markdown'
  const to = options.to ?? 'html'
  const ext = options.ext
  const args = options.args ?? []

  const pdc = new PdcTs()

  return new Transform({
    objectMode: true,
    transform: async (file: File, encoding: BufferEncoding, callback: TransformCallback) => {
      if (file.isNull()) {
        return callback(null, file)
      }

      if (file.isStream()) {
        return callback(new Error('Streaming is not supported.'))
      }

      const input = file.contents.toString()

      try {
        const result = await pdc.Execute({
          from,
          to,
          outputToFile: false,
          pandocArgs: args,
          sourceText: input
        })

        file.contents = Buffer.from(result, 'utf-8')
        file.extname = ext ?? file.extname

        callback(null, file)
      } catch (error) {
        return callback(error)
      }
    }
  })
}

export default pandoc

module.exports = pandoc
module.exports.default = pandoc
