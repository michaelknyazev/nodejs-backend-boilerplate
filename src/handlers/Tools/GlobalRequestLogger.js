const CLog = require('../../controllers/CLog');

/*
  TODO: 
    Consider to move this feature to Result component. 
    It's nice to have response status in log as well. 
    Now its impossible to get response status before anything useful is done. 

  TIP: 
    Consider to make two loggers instead of this one. 
    One for saving request start timestamp, and another one for actual log event, after Result is sent to the client. 
    I think Result.Send controller must return this "future middleware" for that.
*/

const GlobalRequestLogger = (req, _res, next) => {
  const { method, url } = req;

  CLog.Console(`Request: ${method} ${url}`);
  return next();
}

module.exports = GlobalRequestLogger;