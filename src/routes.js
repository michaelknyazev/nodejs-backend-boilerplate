const Tools = require('./handlers/Tools');

module.exports = (server) => {
  /*
    Health check.
  */
  server.route('/api/v1/healthcheck')
    .get(Tools.Healthcheck);

  /*
    Every Other route must return 404 or 403 response.
  */
  server.route("*").all(Tools.AnyRoute);
}