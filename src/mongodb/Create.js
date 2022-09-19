const Create = (Model, data, options = {}) => {
  return new Model(data).save()
}

module.exports = Create;