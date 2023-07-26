const fs = require('fs');

const fd = fs.openSync('./data/app.log');

const buffer = Buffer.alloc(200);

fs.readSync(fd, buffer, 0, buffer.length, 0);

console.log(buffer.toString);
