require("@babel/register");
require("core-js/stable");
require("regenerator-runtime/runtime");
const { bold, green } = require('chalk');

const { appName } = require('../package.json');
const { default: server } = require('./server');

server()
  .then(() => console.info(bold(appName), 'server started', green('successfully!')))
  .catch((error) => console.error(error));
