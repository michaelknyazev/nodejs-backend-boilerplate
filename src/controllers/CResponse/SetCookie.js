const config = require('../../config');

const SetCookie = (res, data) => {
  data.map(cookie => {
    res.cookie(cookie.name, cookie.value, {
      maxAge: cookie.maxAge || 10 * 60 * 1000,
      httpOnly: true,
      secure: !!config.isProduction
    });
  });

  return true;
}

module.exports = SetCookie;