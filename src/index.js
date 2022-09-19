const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongodb = require('./mongodb');

const config = require('./config');

const CLog = require('./controllers/CLog');
const Tools = require('./handlers/Tools');

const server = express();

server.use(cors({
  credentials: true,
  origin: [] // Put your domains here
}));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(Tools.GlobalRequestLogger);
server.use(Tools.GlobalErrorHandler);

// Connect to Database with General Project Data
mongodb.Connect(config.generalDatabaseMongoURI, [
  // require your models here
], (message) => CLog.Console(message));

try {
  require('./routes')(server);
} catch (e) {
  console.log(e);
}

server.listen(config.port, () => CLog.Console(`Server: Listening at ${config.port}`))