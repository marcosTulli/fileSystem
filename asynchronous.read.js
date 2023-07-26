const { convertCsv } = require('./csv.parse');
const { readFile } = require('fs');

readFile('./data/pulitzer-circulation-data.csv', 'utf-8', (err, data) => {
  if (err) {
    console.log(`There was a problem with the file ${err}`);
    return;
  }
  console.log(data);
  const vals = convertCsv(data);
  console.table(vals);
});

// Error

// readFile('./data/pulitzer-circulation-data.csv', 'utf-8');
