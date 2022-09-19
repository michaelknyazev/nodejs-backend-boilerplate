const constructQuery = require('./helpers/constructQuery');
const filterProperties = require('./helpers/filterProperties');

const FindOneAndUpdate = (Model, data, options) => {
  const { select, filtered = [], ...query } = options;
  const { paths } = Model.schema;

  const filteredProperties = [ ...filtered, '__v' ];
  const selectProperties = select || Object.keys(paths);
  
  const _query = constructQuery(query || {}, paths, filteredProperties);
  const _properties = filterProperties(selectProperties, filteredProperties);

  return Model.findOneAndUpdate(_query, data, { new: true }).select(_properties);

}

module.exports = FindOneAndUpdate;