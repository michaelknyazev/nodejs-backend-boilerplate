const constructQuery = require('./helpers/constructQuery');
const filterProperties = require('./helpers/filterProperties');

const Find = (Model, options = {}) => {
  const { page = 0, limit = 10, select, filtered = [], sort = {}, ...query } = options;
  const { paths } = Model.schema;

  const filteredProperties = [ ...filtered, '__v' ];
  const selectProperties = select || Object.keys(paths);
  
  const _query = constructQuery(query || {}, paths, filteredProperties);
  const _properties = filterProperties(selectProperties, filteredProperties);
  const _skip = page * limit;

  return Model.find(_query).select(_properties).sort(sort).skip(_skip).limit(limit);
}

module.exports = Find;