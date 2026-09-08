const fs = require('fs');

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
});

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  writableStream.end();

  fs.readFile('./file2.txt', 'utf-8', (error, data) => {
    console.log(data);
  });
});
