const { writeFile } = require('fs');

const filePath = './data/app.log';
const lineString = '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /wriite-file-test" 405 21512';
const cb = (err) => {
  err ? console.log(err) : console.log('File Saved!');
};

writeFile(filePath, lineString, cb);
