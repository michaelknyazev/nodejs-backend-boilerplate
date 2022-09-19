const mongoose = require('mongoose');

const Connect = (mongoUri, models = [], logger = () => {}) => {
  let _connection = mongoose.createConnection(mongoUri);

  _connection.on('connecting', () => {
    logger('MongoDB: Connecting...');
  });
  
  _connection.on('error', (e) => {
    logger(`MongoDB: Failed to Connect. ${e}`);
    _connection = mongoose.createConnection(mongoUri);
  })
  
  _connection.on('connected', () => {
    logger('MongoDB: Connected! Registering models...');

    try {
      for (let i = 0; i < models.length; i++) {
        const _model = models[i];

        _model.init(_connection);
      }
    } catch (e) {
      logger('MongoDB: Failed to register models');
    }
  })
  
  _connection.once('open', () => {
    logger('MongoDB: Connection is opened.');
  })
  
  _connection.on('reconnected', () => {
    logger('MongoDB: Connection is restored.');
  })
  
  _connection.on('disconnected', () => {
    logger('MongoDB: Disconnected!');
    _connection = mongoose.createConnection(mongoUri);
  });

  return _connection;
}

module.exports = Connect;