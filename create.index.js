const { openSync, closeSync, writeSync, readdirSync, watch } = require('fs');
const camelcase = require('camelcase');

const fileName = './index.js';
const filesPath = './read';
const writeMode = 'w';

watch(filesPath, () => {
  const indexFd = openSync(fileName, writeMode);
  const files = readdirSync(filesPath);

  files.map((f) => {
    const name = f.replace('.js', '');
    console.log(`Adding file: ${f}`);
    const newLine = `module.exports.${camelcase(name)} = require('./read/${name}').read;\n`;
    writeSync(indexFd, newLine);
  });

  closeSync(indexFd);
});
