const Delete = (Model, query) => {
  return Model.deleteOne(query);
}

module.exports = Delete;