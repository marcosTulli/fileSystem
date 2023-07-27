const { createReadStream } = require('fs');

const path = './data/app.log';

const options = { highWaterMark: 9550, encoding: 'utf-8' };
const stream = createReadStream(path, options);

stream.on('data', (data) => {
  stream.pause();
  console.log(data);
  setTimeout(() => {
    stream.resume();
  }, 2000);
});
