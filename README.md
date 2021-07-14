# @gulp-plugin/pandoc ![npm (custom registry)](https://img.shields.io/npm/v/@gulp-plugin/pandoc?logo=npm) [![GitHub Package Registry version](https://img.shields.io/github/release/gulp-plugin/pandoc.svg?label=gpr&logo=github)](https://github.com/gulp-plugin/pandoc/packages/)

[![Build](https://github.com/gulp-plugin/pandoc/actions/workflows/node.js.yml/badge.svg)](https://github.com/gulp-plugin/pandoc/actions/workflows/node.js.yml)  [![Coverage Status](https://coveralls.io/repos/github/gulp-plugin/pandoc/badge.svg?branch=master)](https://coveralls.io/github/gulp-plugin/pandoc?branch=master) [![dependencies Status](https://david-dm.org/gulp-plugin/pandoc/status.svg)](https://david-dm.org/gulp-plugin/pandoc)

A JavaScript/TypeScript Pandoc plugin for [Gulp](https://github.com/gulpjs/gulp)

## Installation

```shell
npm install --save-dev @gulp-plugin/pandoc
```

## Usage

Then, add it to your `gulpfile.js`:

```typescript
const collect = require('@gulp-plugin/pandoc');

gulp.src('docs/**/*.md')
	.pipe(pandoc({ from: 'markdown', to: 'html', ext: '.html' }))
	.pipe(gulp.dest('docs/'));
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
