const parseDate = require('./helpers/parseDate');

const Console = (message) => {
  const { extended_readable } = parseDate(Date.now());

  console.log(`[${extended_readable}]: ${message}`);
}

module.exports = Console;