// Capitalizes the first letter of a string
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Groups array elements by the result of a callback function
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const grouped = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
// Output: { odd: [1, 3, 5], even: [2, 4] }
Array.prototype.groupBy = function (callback) {
  return this.reduce((acc, item) => {
    const key = callback(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};

// Groups array elements by a specified key name
// Example:
// const items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 1, name: 'orange' }];
// const grouped = items.groupByKey('id');
// Output: { 1: [{ id: 1, name: 'apple' }, { id: 1, name: 'orange' }], 2: [{ id: 2, name: 'banana' }] }
Array.prototype.groupByKey = function (keyName) {
  return this.reduce((acc, item) => {
    const key = item[keyName];
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};

// Returns unique elements of the array
// Example:
// const numbers = [1, 2, 3, 3, 4, 5, 5];
// const uniqueNumbers = numbers.distinct();
// Output: [1, 2, 3, 4, 5]
Array.prototype.distinct = function () {
  return [...new Set(this)];
};

// Returns unique elements of the array based on a specified key
// Example:
// const items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 1, name: 'orange' }];
// const uniqueItems = items.distinctByKey('id');
// Output: [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }]
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

// Sorts the array elements based on the result of a callback function
// Example:
// const numbers = [3, 1, 4, 1, 5, 9, 2];
// const sorted = numbers.sortBy(num => num);
// Output: [1, 1, 2, 3, 4, 5, 9]
Array.prototype.sortBy = function (callback) {
  return [...this].sort((a, b) => {
    const keyA = callback(a);
    const keyB = callback(b);
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
};

// Sorts the array elements based on a specified key
// Example:
// const items = [{ id: 3 }, { id: 1 }, { id: 2 }];
// const sortedItems = items.sortByKey('id');
// Output: [{ id: 1 }, { id: 2 }, { id: 3 }]
Array.prototype.sortByKey = function (key) {
  return [...this].sort((a, b) => {
    const keyA = a[key];
    const keyB = b[key];
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
};

// Sums the array elements based on the result of a callback function
// Example:
// const items = [{ value: 2 }, { value: 3 }, { value: 5 }];
// const total = items.sum(item => item.value);
// Output: 10
Array.prototype.sum = function (callback) {
  return this.reduce((acc, item) => acc + callback(item), 0);
};

// Sums the array elements based on a specified key
// Example:
// const items = [{ value: 2 }, { value: 3 }, { value: 5 }];
// const total = items.sumByKey('value');
// Output: 10
Array.prototype.sumByKey = function (key) {
  return this.reduce((acc, item) => acc + item[key], 0);
};

// Splits the array into chunks of a specified size
// Example:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const chunks = numbers.chunk(3);
// Output: [[1, 2, 3], [4, 5, 6], [7]]
Array.prototype.chunk = function (size) {
  return Array.from({ length: Math.ceil(this.length / size) }, (_, index) =>
    this.slice(index * size, index * size + size)
  );
};

// Returns unique elements of the array
// Example:
// const numbers = [1, 2, 3, 3, 4, 5, 5];
// const uniqueNumbers = numbers.unique();
// Output: [1, 2, 3, 4, 5]
Array.prototype.unique = function () {
  return Array.from(new Set(this));
};

// Returns unique elements of the array based on a specified key
// Example:
// const items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 1, name: 'orange' }];
// const uniqueItems = items.uniqueByKey('id');
// Output: [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }]
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

// Removes specified item(s) from the array
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.remove(3);
// Output: [1, 2, 4, 5]
Array.prototype.remove = function (item) {
  return this.filter((i) => i !== item);
};

// Removes items from the array based on a specified key-value pair
// Example:
// const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const filteredItems = items.removeByKeyValue('id', 2);
// Output: [{ id: 1 }, { id: 3 }]
Array.prototype.removeByKeyValue = function (key, value) {
  return this.filter((item) => item[key] !== value);
};

// Finds the index of the first occurrence of an item based on a specified key-value pair
// Example:
// const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const index = items.findIndexByKeyValue('id', 2);
// Output: 1
Array.prototype.findIndexByKeyValue = function (key, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][key] === value) {
      return i;
    }
  }
  return -1;
};

// Finds the first occurrence of an item based on a specified key-value pair
// Example:
// const items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'orange' }];
// const item = items.findByKeyValue('id', 2);
// Output: { id: 2, name: 'banana' }
Array.prototype.findByKeyValue = function (key, value) {
  return this.find((item) => item[key] === value);
};

// Finds the value of a specified key in the first occurrence of an item based on a specified key-value pair
// Example:
// const items = [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'orange' }];
// const itemName = items.findValueByKeyValue('id', 2, 'name');
// Output: 'banana'
Array.prototype.findValueByKeyValue = function (key, value, retrieveKey) {
  const foundItem = this.find((item) => item[key] === value);
  if (foundItem) {
    return foundItem[retrieveKey];
  }
  return undefined;
};

// Custom array prototype method to filter array elements based on a specified key-value pair
// Example:
// const items = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'banana' },
//   { id: 3, name: 'orange' }
// ];
// Filtering items based on the 'name' key and the value 'banana'
// const filteredItems = items.filterByKeyValue('name', 'banana');
// Output: [{ id: 2, name: 'banana' }]
Array.prototype.filterByKeyValue = function (key, value) {
  return this.filter((item) => item[key] === value);
};

// Method to create a deep copy of an array
// const originalArray = [1, [2, 3], { a: 4, b: 5 }];
// Creating a deep copy of the original array
// const clonedArray = originalArray.deepClone();
// Modifying the cloned array
// clonedArray[0] = 10;
// clonedArray[1][0] = 20;
// clonedArray[2].a = 40;
// Output: [10, [20, 3], { a: 40, b: 5 }]
Array.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};