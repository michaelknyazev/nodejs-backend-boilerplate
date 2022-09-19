module.exports = (_keys, filtered) => {
  const select = [];

  for (let i = 0; i < _keys.length; i++) {
    const _key = _keys[i];

    if (filtered.indexOf(_key) < 0) {
      select.push(_key);
    }
  }

  return select;
}