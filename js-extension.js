String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

Array.prototype.groupBy = function (callback) {
  return this.reduce((acc, item) => {
    const key = callback(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};

Array.prototype.groupByKey = function (keyName) {
  return this.reduce((acc, item) => {
    const key = item[keyName];
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};

Array.prototype.distinct = function () {
  return [...new Set(this)];
};

Array.prototype.distinctByKey = function (key) {
  const uniqueKeys = new Set();
  return this.filter((item) => {
    const itemKey = item[key];
    if (!uniqueKeys.has(itemKey)) {
      uniqueKeys.add(itemKey);
      return true;
    }
    return false;
  });
};

Array.prototype.sortBy = function (callback) {
  return [...this].sort((a, b) => {
    const keyA = callback(a);
    const keyB = callback(b);
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
};

Array.prototype.sortByKey = function (key) {
  return [...this].sort((a, b) => {
    const keyA = a[key];
    const keyB = b[key];
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
};

Array.prototype.sum = function (callback) {
  return this.reduce((acc, item) => acc + callback(item), 0);
};

Array.prototype.sumByKey = function (key) {
  return this.reduce((acc, item) => acc + item[key], 0);
};

Array.prototype.chunk = function (size) {
  return Array.from({ length: Math.ceil(this.length / size) }, (_, index) =>
    this.slice(index * size, index * size + size)
  );
};

Array.prototype.unique = function () {
  return Array.from(new Set(this));
};

Array.prototype.uniqueBy = function (key) {
  const uniqueKeys = new Set();
  return this.filter((item) => {
    const itemKey = item[key];
    if (!uniqueKeys.has(itemKey)) {
      uniqueKeys.add(itemKey);
      return true;
    }
    return false;
  });
};

Array.prototype.remove = function (item) {
  return this.filter((i) => i !== item);
};

Array.prototype.removeByKeyValue = function (key, value) {
  return this.filter((item) => item[key] !== value);
};

Array.prototype.findIndexByKeyValue = function (key, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][key] === value) {
      return i;
    }
  }
  return -1;
};

Array.prototype.findByKeyValue = function (key, value) {
  return this.find((item) => item[key] === value);
};

Array.prototype.findValueByKeyValue = function (key, value, retrieveKey) {
  const foundItem = this.find((item) => item[key] === value);
  if (foundItem) {
    return foundItem[retrieveKey];
  }
  return undefined;
};