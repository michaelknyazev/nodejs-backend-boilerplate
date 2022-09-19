const CResponse = require('../../controllers/CResponse');

const AnyRoute = (_req, res) => {
  const _CResponse = CResponse(res);

  _CResponse.Send(_CResponse.FORBIDDEN)
};

module.exports = AnyRoute;