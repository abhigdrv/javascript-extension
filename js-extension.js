String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalizeWords = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

String.prototype.toCamelCase = function () {
  return this.split(' ').map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
};

String.prototype.isValidEmail = function () {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(this);
};

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

String.prototype.countOccurrences = function (substring) {
  return this.split(substring).length - 1;
};

String.prototype.removeWhitespace = function () {
  return this.replace(/\s+/g, '');
};

String.prototype.toSnakeCase = function () {
  return this.replace(/\s+/g, '_').toLowerCase();
};

String.prototype.truncate = function (length) {
  if (this.length <= length) {
    return this;
  }
  return this.slice(0, length) + '...';
};

String.prototype.stripHtml = function () {
  return this.replace(/<\/?[^>]+(>|$)/g, '');
};

String.prototype.replaceAllOccurrences = function (search, replacement) {
  return this.split(search).join(replacement);
};

String.prototype.toKebabCase = function () {
  return this.replace(/\s+/g, '-').toLowerCase();
};

String.prototype.toTitleCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

String.prototype.pad = function (length, char) {
  return this.padStart(length, char).padEnd(length, char);
};

String.prototype.startsWithSubstring = function (substring) {
  return this.indexOf(substring) === 0;
};

String.prototype.endsWithSubstring = function (substring) {
  return this.indexOf(substring, this.length - substring.length) !== -1;
};

String.prototype.removeSubstring = function (substring) {
  return this.replace(substring, '');
};

String.prototype.toBoolean = function () {
  return this.toLowerCase() === 'true';
};

String.prototype.repeatString = function (times) {
  return this.repeat(times);
};

String.prototype.toPascalCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};

String.prototype.isPalindrome = function () {
  const cleaned = this.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
};

String.prototype.toCharArray = function () {
  return this.split('');
};

String.prototype.removeCharacter = function (char) {
  return this.split(char).join('');
};

String.prototype.isDigitOnly = function () {
  return /^\d+$/.test(this);
};

String.prototype.toSentenceCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.getFileExtension = function () {
  return this.slice((this.lastIndexOf(".") - 1 >>> 0) + 2);
};

String.prototype.containsAny = function (substrings) {
  return substrings.some(substring => this.includes(substring));
};

String.prototype.trimSpaces = function () {
  return this.trim();
};

String.prototype.toLowerCaseString = function () {
  return this.toLowerCase();
};

String.prototype.toUpperCaseString = function () {
  return this.toUpperCase();
};

String.prototype.toSlug = function () {
  return this.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
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

Array.prototype.uniqueByKey = function (key) {
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

Array.prototype.filterByKeyValue = function (key, value) {
  return this.filter((item) => item[key] === value);
};

Array.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

Array.prototype.average = function (callback) {
  return this.sum(callback) / this.length;
};

Array.prototype.averageByKey = function (key) {
  return this.sumByKey(key) / this.length;
};

Array.prototype.all = function (callback) {
  return this.every(callback);
};

Array.prototype.any = function (callback) {
  return this.some(callback);
};

Array.prototype.max = function (callback) {
  return Math.max(...this.map(callback));
};

Array.prototype.maxByKey = function (key) {
  return Math.max(...this.map(item => item[key]));
};

Array.prototype.min = function (callback) {
  return Math.min(...this.map(callback));
};

Array.prototype.minByKey = function (key) {
  return Math.min(...this.map(item => item[key]));
};

Array.prototype.compact = function () {
  return this.filter(Boolean);
};

Array.prototype.union = function (array) {
  return [...new Set([...this, ...array])];
};

Array.prototype.intersect = function (array) {
  return this.filter(item => array.includes(item));
};

Array.prototype.difference = function (array) {
  return [...this.filter(item => !array.includes(item)), ...array.filter(item => !this.includes(item))];
};

Array.prototype.zip = function (array) {
  return this.map((item, index) => [item, array[index]]);
};

Array.prototype.flatten = function () {
  return this.reduce((acc, val) => acc.concat(val), []);
};

Array.prototype.flattenDepth = function (depth = 1) {
  return depth > 0
    ? this.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? val.flattenDepth(depth - 1) : val),
        []
      )
    : this.slice();
};

Array.prototype.reverseCopy = function () {
  return [...this].reverse();
};

Array.prototype.transpose = function () {
  return this[0].map((_, colIndex) => this.map(row => row[colIndex]));
};

Array.prototype.groupBySize = function (size) {
  return this.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / size);
    acc[groupIndex] = acc[groupIndex] || [];
    acc[groupIndex].push(item);
    return acc;
  }, []);
};

Array.prototype.nth = function (n) {
  return this[n];
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.isNotEmpty = function () {
  return this.length > 0;
};

Object.prototype.merge = function (source) {
  return Object.assign(this, source);
};

Object.prototype.deepMerge = function (source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object') {
      if (!this[key] || typeof this[key] !== 'object') {
        this[key] = {};
      }
      this[key].deepMerge(source[key]);
    } else {
      this[key] = source[key];
    }
  }
  return this;
};

Object.prototype.clone = function () {
  return { ...this };
};

Object.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

Object.prototype.toQueryString = function () {
  return Object.entries(this)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

Object.prototype.keys = function () {
  return Object.keys(this);
};

Object.prototype.values = function () {
  return Object.values(this);
};

Object.prototype.entries = function () {
  return Object.entries(this);
};

Object.prototype.hasKey = function (key) {
  return Object.prototype.hasOwnProperty.call(this, key);
};

Object.prototype.hasValue = function (value) {
  return Object.values(this).includes(value);
};

Object.prototype.map = function (callback) {
  return Object.fromEntries(Object.entries(this).map(([key, value]) => callback(key, value)));
};

Object.prototype.filter = function (callback) {
  return Object.fromEntries(Object.entries(this).filter(([key, value]) => callback(key, value)));
};

Object.prototype.reduce = function (callback, initialValue) {
  return Object.entries(this).reduce((acc, [key, value]) => callback(acc, key, value), initialValue);
};

Object.prototype.firstKey = function () {
  return Object.keys(this)[0];
};

Object.prototype.firstValue = function () {
  return Object.values(this)[0];
};

Object.prototype.lastKey = function () {
  return Object.keys(this).pop();
};

Object.prototype.lastValue = function () {
  return Object.values(this).pop();
};

Object.prototype.invert = function () {
  return Object.fromEntries(Object.entries(this).map(([key, value]) => [value, key]));
};

Object.prototype.findKeyByValue = function (value) {
  return Object.keys(this).find((key) => this[key] === value);
};

Object.prototype.toMap = function () {
  return new Map(Object.entries(this));
};

Object.prototype.toJSONString = function (space = 0) {
  return JSON.stringify(this, null, space);
};

Object.prototype.size = function () {
  return Object.keys(this).length;
};

Object.prototype.clear = function () {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      delete this[key];
    }
  }
  return this;
};

Object.prototype.set = function (key, value) {
  this[key] = value;
  return this;
};

Object.prototype.get = function (key, defaultValue) {
  return this.hasOwnProperty(key) ? this[key] : defaultValue;
};

Object.prototype.remove = function (key) {
  delete this[key];
  return this;
};