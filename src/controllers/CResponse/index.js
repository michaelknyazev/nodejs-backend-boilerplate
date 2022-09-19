const Send = require('./Send');
const SetCookie = require('./SetCookie');

const CResponse = (res) => ({
  Send: (Response) => Send(res, Response),
  SetCookie: (Cookies) => SetCookie(res, Cookies),

  SERVER_SUCCESS: { status: 200, success: true, event: 'SERVER_SUCCESS' },
  SERVER_ERROR: { status: 500, success: false, event: 'SERVER_ERROR' },

  AUTHENTICATION_VALIDATION_MISSINGDATA: { status: 422, success: false, event: 'AUTHENTICATION_VALIDATION_MISSINGDATA' },
  AUTHENTICATION_VALIDATION_INVALIDEMAIL: { status: 422, success: false, event: 'AUTHENTICATION_VALIDATION_INVALIDEMAIL' },
  AUTHENTICATION_VALIDATION_INVALIDCREDENTIALS: { status: 401, success: false, event: 'AUTHENTICATION_VALIDATION_INVALIDCREDENTIALS' },

  AUTHENTICATION_RESPONSE_AUTHORIZED: { status: 200, success: true, event: 'AUTHENTICATION_RESPONSE_AUTHORIZED' },
  AUTHENTICATION_RESPONSE_UNAUTHORIZED: { status: 401, success: false, event: 'AUTHENTICATION_RESPONSE_UNAUTHORIZED' },
  AUTHENTICATION_RESPONSE_USEREXISTS: { status: 422, success: false, event: 'AUTHENTICATION_RESPONSE_USEREXISTS' },
  AUTHENTICATION_RESPONSE_USERNOTEXISTS: { status: 401, success: false, event: 'AUTHENTICATION_RESPONSE_USERNOTEXISTS' },
  AUTHENTICATION_RESPONSE_ACCOUNTCREATED: {status: 200, success: true, event: 'AUTHENTICATION_RESPONSE_ACCOUNTCREATED' },
  AUTHENTICATION_RESPONSE_LOGGEDOUT: { status: 200, success: true, event: 'AUTHENTICATION_RESPONSE_LOGGEDOUT' },

  NOT_FOUND: { status: 404, success: false, event: 'NOT_FOUND' },
  FORBIDDEN: { status: 403, success: false, event: 'FORBIDDEN' },
  PERMITTED: { status: 200, success: true, event: 'PERMITTED' },
  NAUGHTY_REQUEST: { status: 403, success: false, event: 'NAUGHTY_REQUEST', result: "Filthy Boy!" },
  HEALTHCHECK_OK: { status: 200, success: true, event: 'HEALTHCHECK_OK' }
})

module.exports = CResponse;