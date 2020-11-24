require("@babel/register");
require("core-js/stable");
require("regenerator-runtime/runtime");

const { default: reputationMiner } = require('./reputationMiner');

reputationMiner();
