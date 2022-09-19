const CResponse = require('../../controllers/CResponse');

const GlobalErrorHandler = (_err, _req, res, _next) => {
  const _CResponse = CResponse(res);

  return _CResponse.Send(_CResponse.NAUGHTY_REQUEST);
}

module.exports = GlobalErrorHandler;