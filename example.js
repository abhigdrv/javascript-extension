//#############################STRING#######################

// Capitalizes the first letter of a string
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
// Example:
// console.log("hello world".capitalizeFirstLetter()); // "Hello world"

// Capitalizes every word in a string
String.prototype.capitalizeWords = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
// Example:
// console.log("hello world".capitalizeWords()); // "Hello World"

// Converts a string to camel case
String.prototype.toCamelCase = function () {
  return this.split(' ').map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
};
// Example:
// console.log("hello world".toCamelCase()); // "helloWorld"

// Checks if a string is a valid email
String.prototype.isValidEmail = function () {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(this);
};
// Example:
// console.log("test@example.com".isValidEmail()); // true
// console.log("invalid-email".isValidEmail()); // false

// Reverses a string
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};
// Example:
// console.log("hello".reverse()); // "olleh"

// Counts the occurrences of a substring
String.prototype.countOccurrences = function (substring) {
  return this.split(substring).length - 1;
};
// Example:
// console.log("hello hello hello".countOccurrences("hello")); // 3

// Removes all whitespace from a string
String.prototype.removeWhitespace = function () {
  return this.replace(/\s+/g, '');
};
// Example:
// console.log(" h e l l o ".removeWhitespace()); // "hello"

// Converts a string to snake case
String.prototype.toSnakeCase = function () {
  return this.replace(/\s+/g, '_').toLowerCase();
};
// Example:
// console.log("hello world".toSnakeCase()); // "hello_world"

// Truncates a string with an ellipsis
String.prototype.truncate = function (length) {
  if (this.length <= length) {
    return this;
  }
  return this.slice(0, length) + '...';
};
// Example:
// console.log("this is a long sentence".truncate(10)); // "this is a ..."

// Removes all HTML tags from a string
String.prototype.stripHtml = function () {
  return this.replace(/<\/?[^>]+(>|$)/g, '');
};
// Example:
// console.log("<p>Hello</p>".stripHtml()); // "Hello"

// Replaces all occurrences of a substring
String.prototype.replaceAllOccurrences = function (search, replacement) {
  return this.split(search).join(replacement);
};
// Example:
// console.log("hello world".replaceAllOccurrences("o", "a")); // "hella warld"

// Converts a string to kebab case
String.prototype.toKebabCase = function () {
  return this.replace(/\s+/g, '-').toLowerCase();
};
// Example:
// console.log("hello world".toKebabCase()); // "hello-world"

// Converts a string to title case
String.prototype.toTitleCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};
// Example:
// console.log("hello world".toTitleCase()); // "Hello World"

// Pads a string with a specified character
String.prototype.pad = function (length, char) {
  return this.padStart(length, char).padEnd(length, char);
};
// Example:
// console.log("hello".pad(10, '*')); // "***hello***"

// Checks if a string starts with a specified substring
String.prototype.startsWithSubstring = function (substring) {
  return this.indexOf(substring) === 0;
};
// Example:
// console.log("hello world".startsWithSubstring("hello")); // true

// Checks if a string ends with a specified substring
String.prototype.endsWithSubstring = function (substring) {
  return this.indexOf(substring, this.length - substring.length) !== -1;
};
// Example:
// console.log("hello world".endsWithSubstring("world")); // true

// Removes a specified substring from a string
String.prototype.removeSubstring = function (substring) {
  return this.replace(substring, '');
};
// Example:
// console.log("hello world".removeSubstring("world")); // "hello "

// Converts a string to a boolean
String.prototype.toBoolean = function () {
  return this.toLowerCase() === 'true';
};
// Example:
// console.log("true".toBoolean()); // true
// console.log("false".toBoolean()); // false

// Repeats a string a specified number of times
String.prototype.repeatString = function (times) {
  return this.repeat(times);
};
// Example:
// console.log("hello".repeatString(3)); // "hellohellohello"

// Converts a string to Pascal case
String.prototype.toPascalCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};
// Example:
// console.log("hello world".toPascalCase()); // "HelloWorld"

// Checks if a string is a palindrome
String.prototype.isPalindrome = function () {
  const cleaned = this.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
};
// Example:
// console.log("A man a plan a canal Panama".isPalindrome()); // true

// Converts a string to an array of characters
String.prototype.toCharArray = function () {
  return this.split('');
};
// Example:
// console.log("hello".toCharArray()); // ["h", "e", "l", "l", "o"]

// Removes all instances of a specified character
String.prototype.removeCharacter = function (char) {
  return this.split(char).join('');
};
// Example:
// console.log("hello world".removeCharacter("l")); // "heo word"

// Checks if a string contains only digits
String.prototype.isDigitOnly = function () {
  return /^\d+$/.test(this);
};
// Example:
// console.log("12345".isDigitOnly()); // true
// console.log("123a45".isDigitOnly()); // false

// Converts a string to sentence case
String.prototype.toSentenceCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
// Example:
// console.log("hello WORLD".toSentenceCase()); // "Hello world"

// Extracts the file extension from a string
String.prototype.getFileExtension = function () {
  return this.slice((this.lastIndexOf(".") - 1 >>> 0) + 2);
};
// Example:
// console.log("example.txt".getFileExtension()); // "txt"

// Checks if a string contains any of a list of substrings
String.prototype.containsAny = function (substrings) {
  return substrings.some(substring => this.includes(substring));
};
// Example:
// console.log("hello world".containsAny(["world", "earth"])); // true
// console.log("hello world".containsAny(["mars", "venus"])); // false

// Removes leading and trailing spaces from a string
String.prototype.trimSpaces = function () {
  return this.trim();
};
// Example:
// console.log("  hello world  ".trimSpaces()); // "hello world"

// Converts a string to lower case
String.prototype.toLowerCaseString = function () {
  return this.toLowerCase();
};
// Example:
// console.log("HELLO WORLD".toLowerCaseString()); // "hello world"

// Converts a string to upper case
String.prototype.toUpperCaseString = function () {
  return this.toUpperCase();
};
// Example:
// console.log("hello world".toUpperCaseString()); // "HELLO WORLD"

// Converts a string to a URL-friendly slug
String.prototype.toSlug = function () {
  return this.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};
// Example:
// console.log("Hello World!".toSlug()); // "hello-world"










//#########################ARRAY############################

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
// Example:
// const originalArray = [1, [2, 3], { a: 4, b: 5 }];
// const clonedArray = originalArray.deepClone();
// clonedArray[0] = 10;
// clonedArray[1][0] = 20;
// clonedArray[2].a = 40;
// Output: [1, [2, 3], { a: 4, b: 5 }]
Array.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

//#########################NEW PROTOTYPES############################

// Calculates the average of the array elements based on a callback function
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const average = numbers.average(num => num);
// Output: 3
Array.prototype.average = function (callback) {
  return this.sum(callback) / this.length;
};

// Calculates the average of the array elements based on a specified key
// Example:
// const items = [{ value: 2 }, { value: 3 }, { value: 5 }];
// const average = items.averageByKey('value');
// Output: 3.333
Array.prototype.averageByKey = function (key) {
  return this.sumByKey(key) / this.length;
};

// Checks if all array elements match the criteria specified in a callback function
// Example:
// const numbers = [2, 4, 6];
// const allEven = numbers.all(num => num % 2 === 0);
// Output: true
Array.prototype.all = function (callback) {
  return this.every(callback);
};

// Checks if any array elements match the criteria specified in a callback function
// Example:
// const numbers = [1, 2, 3];
// const anyEven = numbers.any(num => num % 2 === 0);
// Output: true
Array.prototype.any = function (callback) {
  return this.some(callback);
};

// Finds the maximum value of the array elements based on a callback function
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.max(num => num);
// Output: 5
Array.prototype.max = function (callback) {
  return Math.max(...this.map(callback));
};

// Finds the maximum value of the array elements based on a specified key
// Example:
// const items = [{ value: 2 }, { value: 3 }, { value: 5 }];
// const max = items.maxByKey('value');
// Output: 5
Array.prototype.maxByKey = function (key) {
  return Math.max(...this.map(item => item[key]));
};

// Finds the minimum value of the array elements based on a callback function
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const min = numbers.min(num => num);
// Output: 1
Array.prototype.min = function (callback) {
  return Math.min(...this.map(callback));
};

// Finds the minimum value of the array elements based on a specified key
// Example:
// const items = [{ value: 2 }, { value: 3 }, { value: 5 }];
// const min = items.minByKey('value');
// Output: 2
Array.prototype.minByKey = function (key) {
  return Math.min(...this.map(item => item[key]));
};

// Removes all falsy values from the array
// Example:
// const mixed = [0, 1, false, 2, '', 3];
// const compact = mixed.compact();
// Output: [1, 2, 3]
Array.prototype.compact = function () {
  return this.filter(Boolean);
};

// Merges the array with another array, eliminating duplicate values
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const merged = arr1.union(arr2);
// Output: [1, 2, 3, 4, 5]
Array.prototype.union = function (array) {
  return [...new Set([...this, ...array])];
};

// Finds the intersection of two arrays
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const intersection = arr1.intersect(arr2);
// Output: [2, 3]
Array.prototype.intersect = function (array) {
  return this.filter(item => array.includes(item));
};

// Calculates the difference between two arrays
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const difference = arr1.difference(arr2);
// Output: [1, 4]
Array.prototype.difference = function (array) {
  return [...this.filter(item => !array.includes(item)), ...array.filter(item => !this.includes(item))];
};

// Zips two arrays together into an array of pairs
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// const zipped = arr1.zip(arr2);
// Output: [[1, 'a'], [2, 'b'], [3, 'c']]
Array.prototype.zip = function (array) {
  return this.map((item, index) => [item, array[index]]);
};

// Flattens a nested array by one level
// Example:
// const nested = [1, [2, 3], [4, [5]]];
// const flattened = nested.flatten();
// Output: [1, 2, 3, 4, [5]]
Array.prototype.flatten = function () {
  return this.reduce((acc, val) => acc.concat(val), []);
};

// Flattens a nested array by a specified depth
// Example:
// const nested = [1, [2, [3, [4]]]];
// const flattened = nested.flattenDepth(2);
// Output: [1, 2, 3, [4]]
Array.prototype.flattenDepth = function (depth = 1) {
  return depth > 0
    ? this.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? val.flattenDepth(depth - 1) : val),
        []
      )
    : this.slice();
};

// Reverses the order of the array elements
// Example:
// const numbers = [1, 2, 3];
// const reversed = numbers.reverseCopy();
// Output: [3, 2, 1]
Array.prototype.reverseCopy = function () {
  return [...this].reverse();
};

// Transposes a 2D array (swaps rows and columns)
// Example:
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// const transposed = matrix.transpose();
// Output: [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]
Array.prototype.transpose = function () {
  return this[0].map((_, colIndex) => this.map(row => row[colIndex]));
};

// Creates an array of elements split into groups of the specified size
// Example:
// const numbers = [1, 2, 3, 4, 5, 6];
// const grouped = numbers.groupBySize(2);
// Output: [[1, 2], [3, 4], [5, 6]]
Array.prototype.groupBySize = function (size) {
  return this.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / size);
    acc[groupIndex] = acc[groupIndex] || [];
    acc[groupIndex].push(item);
    return acc;
  }, []);
};

// Gets the nth element of an array
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const thirdElement = numbers.nth(2);
// Output: 3
Array.prototype.nth = function (n) {
  return this[n];
};

// Checks if the array is empty
// Example:
// const numbers = [];
// const isEmpty = numbers.isEmpty();
// Output: true
Array.prototype.isEmpty = function () {
  return this.length === 0;
};

// Checks if the array is not empty
// Example:
// const numbers = [1, 2, 3];
// const isNotEmpty = numbers.isNotEmpty();
// Output: true
Array.prototype.isNotEmpty = function () {
  return this.length > 0;
};


//####################OBJECT###############################
// Merges properties of another object into the current object
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// obj1.merge(obj2);
// Output: { a: 1, b: 3, c: 4 }
Object.prototype.merge = function (source) {
  return Object.assign(this, source);
};

// Deep merges properties of another object into the current object
// Example:
// const obj1 = { a: 1, b: { x: 10 } };
// const obj2 = { b: { y: 20 }, c: 4 };
// obj1.deepMerge(obj2);
// Output: { a: 1, b: { x: 10, y: 20 }, c: 4 }
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

// Returns a shallow copy of the object
// Example:
// const obj = { a: 1, b: 2 };
// const copy = obj.clone();
// Output: { a: 1, b: 2 }
Object.prototype.clone = function () {
  return { ...this };
};

// Returns a deep copy of the object
// Example:
// const obj = { a: 1, b: { x: 10 } };
// const deepCopy = obj.deepClone();
// Output: { a: 1, b: { x: 10 } }
Object.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

// Checks if the object is empty
// Example:
// const obj = {};
// const isEmpty = obj.isEmpty();
// Output: true
Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

// Converts the object to a query string
// Example:
// const obj = { a: 1, b: 2 };
// const queryString = obj.toQueryString();
// Output: 'a=1&b=2'
Object.prototype.toQueryString = function () {
  return Object.entries(this)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

// Returns the keys of the object as an array
// Example:
// const obj = { a: 1, b: 2 };
// const keys = obj.keys();
// Output: ['a', 'b']
Object.prototype.keys = function () {
  return Object.keys(this);
};

// Returns the values of the object as an array
// Example:
// const obj = { a: 1, b: 2 };
// const values = obj.values();
// Output: [1, 2]
Object.prototype.values = function () {
  return Object.values(this);
};

// Returns the entries of the object as an array of [key, value] pairs
// Example:
// const obj = { a: 1, b: 2 };
// const entries = obj.entries();
// Output: [['a', 1], ['b', 2]]
Object.prototype.entries = function () {
  return Object.entries(this);
};

// Checks if the object has a specified key
// Example:
// const obj = { a: 1, b: 2 };
// const hasKey = obj.hasKey('a');
// Output: true
Object.prototype.hasKey = function (key) {
  return Object.prototype.hasOwnProperty.call(this, key);
};

// Checks if the object has a specified value
// Example:
// const obj = { a: 1, b: 2 };
// const hasValue = obj.hasValue(2);
// Output: true
Object.prototype.hasValue = function (value) {
  return Object.values(this).includes(value);
};

// Maps the object to a new object based on a callback function
// Example:
// const obj = { a: 1, b: 2 };
// const mappedObj = obj.map((key, value) => [key.toUpperCase(), value * 2]);
// Output: { A: 2, B: 4 }
Object.prototype.map = function (callback) {
  return Object.fromEntries(Object.entries(this).map(([key, value]) => callback(key, value)));
};

// Filters the object based on a callback function
// Example:
// const obj = { a: 1, b: 2, c: 3 };
// const filteredObj = obj.filter((key, value) => value > 1);
// Output: { b: 2, c: 3 }
Object.prototype.filter = function (callback) {
  return Object.fromEntries(Object.entries(this).filter(([key, value]) => callback(key, value)));
};

// Reduces the object to a single value based on a callback function
// Example:
// const obj = { a: 1, b: 2, c: 3 };
// const sum = obj.reduce((acc, key, value) => acc + value, 0);
// Output: 6
Object.prototype.reduce = function (callback, initialValue) {
  return Object.entries(this).reduce((acc, [key, value]) => callback(acc, key, value), initialValue);
};

// Gets the first key of the object
// Example:
// const obj = { a: 1, b: 2 };
// const firstKey = obj.firstKey();
// Output: 'a'
Object.prototype.firstKey = function () {
  return Object.keys(this)[0];
};

// Gets the first value of the object
// Example:
// const obj = { a: 1, b: 2 };
// const firstValue = obj.firstValue();
// Output: 1
Object.prototype.firstValue = function () {
  return Object.values(this)[0];
};

// Gets the last key of the object
// Example:
// const obj = { a: 1, b: 2 };
// const lastKey = obj.lastKey();
// Output: 'b'
Object.prototype.lastKey = function () {
  return Object.keys(this).pop();
};

// Gets the last value of the object
// Example:
// const obj = { a: 1, b: 2 };
// const lastValue = obj.lastValue();
// Output: 2
Object.prototype.lastValue = function () {
  return Object.values(this).pop();
};

// Inverts the keys and values of the object
// Example:
// const obj = { a: 1, b: 2 };
// const invertedObj = obj.invert();
// Output: { 1: 'a', 2: 'b' }
Object.prototype.invert = function () {
  return Object.fromEntries(Object.entries(this).map(([key, value]) => [value, key]));
};

// Finds the key of a specified value
// Example:
// const obj = { a: 1, b: 2 };
// const key = obj.findKeyByValue(2);
// Output: 'b'
Object.prototype.findKeyByValue = function (value) {
  return Object.keys(this).find((key) => this[key] === value);
};

// Converts the object to a Map
// Example:
// const obj = { a: 1, b: 2 };
// const map = obj.toMap();
// Output: Map { 'a' => 1, 'b' => 2 }
Object.prototype.toMap = function () {
  return new Map(Object.entries(this));
};

// Converts the object to a JSON string with optional indentation
// Example:
// const obj = { a: 1, b: 2 };
// const jsonString = obj.toJSONString(2);
// Output: '{\n  "a": 1,\n  "b": 2\n}'
Object.prototype.toJSONString = function (space = 0) {
  return JSON.stringify(this, null, space);
};

// Gets the size (number of keys) of the object
// Example:
// const obj = { a: 1, b: 2 };
// const size = obj.size();
// Output: 2
Object.prototype.size = function () {
  return Object.keys(this).length;
};

// Clears all keys and values from the object
// Example:
// const obj = { a: 1, b: 2 };
// obj.clear();
// Output: {}
Object.prototype.clear = function () {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      delete this[key];
    }
  }
  return this;
};

// Sets a key-value pair in the object and returns the object for chaining
// Example:
// const obj = { a: 1 };
// obj.set('b', 2).set('c', 3);
// Output: { a: 1, b: 2, c: 3 }
Object.prototype.set = function (key, value) {
  this[key] = value;
  return this;
};

// Gets a value by key with a default fallback
// Example:
// const obj = { a: 1 };
// const value = obj.get('b', 2);
// Output: 2
Object.prototype.get = function (key, defaultValue) {
  return this.hasOwnProperty(key) ? this[key] : defaultValue;
};

// Removes a key from the object and returns the object for chaining
// Example:
// const obj = { a: 1, b: 2 };
// obj.remove('b');
// Output: { a: 1 }
Object.prototype.remove = function (key) {
  delete this[key];
  return this;
};
