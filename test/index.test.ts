import { EOL } from 'os'
import { src } from 'gulp'

import pandoc from '../src'


import File = require('vinyl')

it('should process files', (done) => {
  src('test/files/index.md')
    .pipe(pandoc({ from: 'markdown', to: 'html' }))
    .on('data', (file: File) => {
      expect(file.contents.toString())
        .toEqual(`<h1 id="hello-world">Hello, World!</h1>${EOL}<p><strong>Lorem ipsum dolor</strong></p>${EOL}`)
    })
    .on('end', done)
})
