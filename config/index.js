const base = require('./base.js');
const environment = process.env.NODE_ENV || 'development';
const main = require(`./${environment}`);

module.exports = {
  ...base,
  ...main
}