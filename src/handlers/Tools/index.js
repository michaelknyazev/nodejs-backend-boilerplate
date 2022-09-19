const Healthcheck = require('./Healthcheck');
const GlobalErrorHandler = require('./GlobalErrorHandler');
const GlobalRequestLogger = require('./GlobalRequestLogger');
const AnyRoute = require('./AnyRoute');

const Tools = {
  Healthcheck,
  GlobalErrorHandler,
  GlobalRequestLogger,
  AnyRoute
}

module.exports = Tools;