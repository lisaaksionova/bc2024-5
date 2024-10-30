const {program} = require('commander');
const express = require("express");
const app = express();
const http = require('http');

program
  .requiredOption('-h, --host <address>', 'адреса сервера')
  .requiredOption('-p, --port <number>', 'порт сервера')
  .requiredOption('-c, --cache <path>', 'шлях до директорії, яка міститиме закешовані файли');

program.parse(process.argv);

const options = program.opts();

app.get('/', (req, res) => {
});

const server = http.createServer(app);

server.listen(options.port, options.host, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server is listening on http://${options.host}:${options.port}`);
});