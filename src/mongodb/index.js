const Connect = require('./Connect');
const Find = require('./Find');
const FindOne = require('./FindOne');
const Create = require('./Create');

const FindOneAndUpdate = require('./FindOneAndUpdate');

const DeleteOne = require('./DeleteOne');

const mongodb = {
  Connect,

  Create,

  Find,
  FindOne,

  FindOneAndUpdate,

  DeleteOne
}

module.exports = mongodb;