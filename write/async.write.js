const { constants, writeFile } = require('fs');

const filePath = './data/new-app.log';
const lineString = '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /wriite-file-test" 405 21512';
// const options = { flag: 'wx' };
// const options = { mode: constants.S_IWUSR | constants.S_IRUSR };
const options = { encoding: 'utf-8' };
const cb = (err) => {
  err ? console.log(err) : console.log('File Saved!');
};

writeFile(filePath, lineString, options, cb);
