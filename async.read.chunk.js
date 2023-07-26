const fs = require('fs');

let totalSize = 0;
fs.stat('./data/app.log', (err, { size }) => (totalSize = size));

fs.open('./data/app.log', (err, fd) => {
  const buffer = Buffer.alloc(200);
  const loop = Array.from({ length: totalSize / buffer.length });
  loop.forEach((_, i) => {
    fs.read(
      fd,
      buffer,
      0,
      buffer.length,
      i * buffer.length,
      (err, count, buffer) => {
        console.log(buffer.toString());
      }
    );
  });
});

//   for (let i = 0; i <= totalSize / buffer.length; i++) {
//     fs.read(
//       fd,
//       buffer,
//       0,
//       buffer.length,
//       i * buffer.length,
//       (err, count, buffer) => {
//         console.log(buffer.toString());
//       }
//     );
//   }
// });
