module.exports = (query, paths, _filtered) => {
  const result = {};
  const _keys = Object.keys(paths);

  for (let i = 0; i < _keys.length; i++) {
    const _key = _keys[i];
  
    if (_filtered.indexOf(_key) < 0 && query[_key]) {
      const { instance } = paths[_key];

      if (instance === 'String') {
        result[_key] = { $regex: new RegExp(`${query[_key]}`, "gi") };
      } else if (instance === 'Number') {
        const [min,max] = query[_key].split(':');

        result[_key] = { $gte: parseInt(min) };

        if (max) {
          if (parseInt(min) === parseInt(max)) {
            result[_key] = parseInt(min);
          } else {
            result[_key] = { $gte: parseInt(min), $lte: parseInt(max) };
          }
        } else {
          result[_key] = parseInt(min);
        }
      } else {
        result[_key] = query[_key];
      }
    }
  }

  const filtered = ['select', 'limit', 'page'];

  for (let i = 0; i < Object.keys(query).length; i++) {
    const _key = Object.keys(query)[i];
    const _value = query[_key];

    if (_keys.indexOf(_key) < 0 && filtered.indexOf(_key) < 0) {
      result[_key] = { $regex: new RegExp(`${_value}`, "gi") };
    }
  }

  return result;
}