const { convertCsv } = require('./csv.parse');
const { fs } = require('fs');
const promisify = require('util');

const tuki = promisify(fs.readFile);

tuki('./data/pulitzer-circulation-data.csv', 'utf-8')
  .then((data) => console.table(convertCsv(data)))
  .catch((err) => console.log(`File error: ${err}`));
