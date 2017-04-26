const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = 8080;
const DIR = './public/';

/* eslint-disable no-console */
connect().use(serveStatic(DIR)).listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
/* eslint-enable no-console */
