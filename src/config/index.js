const config = {
  isProduction: process.env.MODE === 'production',
  generalDatabaseMongoURI: process.env.GENERAL_MONGO_URI,
  port: process.env.PORT
}

module.exports = config;