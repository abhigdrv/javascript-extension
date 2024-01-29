# Custom JavaScript Array and String Extensions

This repository contains custom extensions for JavaScript's `Array` and `String` prototypes, providing additional utility functions.

## Features

### String Prototype Extension

- `capitalizeFirstLetter`: Capitalizes the first letter of a string.

### Array Prototype Extensions

- `groupBy(callback)`: Groups array elements based on the provided callback.
- `groupByKey(keyName)`: Groups array of objects by a specific key.
- `distinct()`: Returns an array with distinct elements.
- `distinctByKey(key)`: Returns an array of unique objects based on a specific key.
- `sortBy(callback)`: Sorts the array based on a custom callback function.
- `sortByKey(key)`: Sorts the array of objects based on a specific key.
- `sum(callback)`: Computes the sum of an array based on a callback function.
- `sumByKey(key)`: Computes the sum of an array of objects based on a specific key.
- `chunk(size)`: Splits the array into chunks of a specified size.
- `unique()`: Returns an array with unique elements.
- `uniqueBy(key)`: Returns an array of unique objects based on a specific key.
- `remove(item)`: Removes a specific item from the array.
- `removeByKeyValue(key, value)`: Removes items based on a specific key-value pair.
- `findIndexByKeyValue(key, value)`: Finds the index of an object based on a specific key-value pair.
- `findKeyValue(key, value)`: Finds an object based on a specific key-value pair.
- `findValueByKeyValue(key, value, retrieveKey)`: Finds the value of a specific key in an object based on another key-value pair.

## Usage

Import the JavaScript extension script before using any of the provided functions. This script adds custom functionality to the `String` and `Array` prototypes.

```html
<script src="https://cdn.jsdelivr.net/gh/abhigdrv/javascript-extension/js-extension.js"></script>
```

### Example Usage:

```javascript
// Include the JavaScript code here
// Example usage of the provided functions

// Capitalize the first letter of a string
  __const capitalizedString = "hello".capitalizeFirstLetter();__
  console.log(capitalizedString); // Outputs: Hello

  // Group array elements based on a custom callback
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  __const groupedByOddEven = numbers.groupBy(num => (num % 2 === 0) ? 'even' : 'odd');__
  console.log(groupedByOddEven);
  /*
  Outputs:
  {
    'odd': [1, 3, 5, 7, 9],
    'even': [2, 4, 6, 8]
  }
  */

  // Group array of objects by a specific key
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
  ];

  __const groupedByAge = people.groupByKey('age');__
  console.log(groupedByAge);
  /*
  Outputs:
  {
    '25': [ { name: 'Bob', age: 25 } ],
    '30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ]
  }
  */

  // Get distinct elements from an array
  const repeatedNumbers = [1, 2, 3, 1, 4, 2, 5];
  __const distinctNumbers = repeatedNumbers.distinct();__
  console.log(distinctNumbers); // Outputs: [1, 2, 3, 4, 5]

  // Get unique objects based on a specific key
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 1, name: 'Bob' },
  ];

  __const uniqueUsersById = users.uniqueBy('id');__
  console.log(uniqueUsersById);
  /*
  Outputs:
  [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' }
  ]
  */

  // Sort array based on a custom callback
  const words = ['apple', 'banana', 'grape', 'orange'];
  __const sortedByLength = words.sortBy(word => word.length);__
  console.log(sortedByLength); // Outputs: ['grape', 'apple', 'banana', 'orange']

  // Sort array of objects based on a specific key
  const sortedByAge = people.sortByKey('age');__
  console.log(sortedByAge);
  /*
  Outputs:
  [
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 30 }
  ]
  */

  // Compute sum of array elements based on a custom callback
  __const sumOfSquares = numbers.sum(num => num * num);__
  console.log(sumOfSquares); // Outputs: 285

  // Compute sum of array of objects based on a specific key
  __const totalAge = people.sumByKey('age');__
  console.log(totalAge); // Outputs: 85

  // Split array into chunks of a specified size
  __const chunkedNumbers = numbers.chunk(3);__
  console.log(chunkedNumbers);
  /*
  Outputs:
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  */

  // Get unique elements from an array
  __const uniqueElements = repeatedNumbers.unique();__
  console.log(uniqueElements); // Outputs: [1, 2, 3, 4, 5]

  // Remove a specific item from the array
  __const filteredNumbers = repeatedNumbers.remove(2);__
  console.log(filteredNumbers); // Outputs: [1, 3, 1, 4, 5]

  // Remove items based on a specific key-value pair
  __const filteredUsers = users.removeByKeyValue('id', 1);__
  console.log(filteredUsers);
  /*
  Outputs:
  [
    { id: 2, name: 'Alice' }
  ]
  */

  // Find the index of an object based on a specific key-value pair
  __const indexOfBob = users.findIndexByKeyValue('name', 'Bob');__
  console.log(indexOfBob); // Outputs: 2

  // Find an object based on a specific key-value pair
  __const alice = users.findByKeyValue('name', 'Alice');__
  console.log(alice); // Outputs: { id: 2, name: 'Alice' }

  // Find the value of a specific key in an object based on another key-value pair
  __const retrieveAge = people.findValueByKeyValue('name', 'Alice', 'age');__
  console.log(retrieveAge); // Outputs: 30
```
