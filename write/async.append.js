const { writeFile, appendFile } = require('fs');

const filePath = './data/app.log';
const lineString = '\n163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /wriite-file-test" 405 21512';
const options = { flag: 'a' };
const cb = (err) => {
  err ? console.log(err) : console.log('File Saved!');
};

// writeFile(filePath, lineString, options, cb);
appendFile(filePath, lineString, cb);
