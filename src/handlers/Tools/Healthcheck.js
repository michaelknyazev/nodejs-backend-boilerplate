const CResponse = require('../../controllers/CResponse');

const Healthcheck = (_req, res) => {
  const _CResponse = CResponse(res);

  _CResponse.Send(_CResponse.HEALTHCHECK_OK);
  return;
};

module.exports = Healthcheck;