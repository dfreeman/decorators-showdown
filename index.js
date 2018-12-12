'use strict';

const fs = require('fs-extra');
const babel6 = require('babel-core');
const babel7 = require('@babel/core');
const ts = require('typescript');

fs.removeSync('output');
fs.ensureDirSync('output');

for (let file of fs.readdirSync('input')) {
  let babel6result = babel6.transformFileSync(`input/${file}`, {
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties'
    ]
  });

  fs.writeFileSync(`output/${file.replace('.js', '.babel6.js')}`, babel6result.code);

  let babel7result = babel7.transformFileSync(`input/${file}`, {
    plugins: [
      ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
      '@babel/proposal-class-properties'
    ]
  });

  fs.writeFileSync(`output/${file.replace('.js', '.babel7.js')}`, babel7result.code);

  let tsResult = ts.transpile(fs.readFileSync(`input/${file}`, 'utf-8'), {
    experimentalDecorators: true
  });

  fs.writeFileSync(`output/${file.replace('.js', '.typescript.js')}`, tsResult);
}
