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
  **const capitalizedString = "hello".capitalizeFirstLetter();**
  console.log(capitalizedString); // Outputs: Hello

  // Group array elements based on a custom callback
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  **const groupedByOddEven = numbers.groupBy(num => (num % 2 === 0) ? 'even' : 'odd');**
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

  **const groupedByAge = people.groupByKey('age');**
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
  **const distinctNumbers = repeatedNumbers.distinct();**
  console.log(distinctNumbers); // Outputs: [1, 2, 3, 4, 5]

  // Get unique objects based on a specific key
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 1, name: 'Bob' },
  ];

  **const uniqueUsersById = users.uniqueBy('id');**
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
  **const sortedByLength = words.sortBy(word => word.length);**
  console.log(sortedByLength); // Outputs: ['grape', 'apple', 'banana', 'orange']

  // Sort array of objects based on a specific key
  const sortedByAge = people.sortByKey('age');**
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
  **const sumOfSquares = numbers.sum(num => num * num);**
  console.log(sumOfSquares); // Outputs: 285

  // Compute sum of array of objects based on a specific key
  **const totalAge = people.sumByKey('age');**
  console.log(totalAge); // Outputs: 85

  // Split array into chunks of a specified size
  **const chunkedNumbers = numbers.chunk(3);**
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
  **const uniqueElements = repeatedNumbers.unique();**
  console.log(uniqueElements); // Outputs: [1, 2, 3, 4, 5]

  // Remove a specific item from the array
  **const filteredNumbers = repeatedNumbers.remove(2);**
  console.log(filteredNumbers); // Outputs: [1, 3, 1, 4, 5]

  // Remove items based on a specific key-value pair
  **const filteredUsers = users.removeByKeyValue('id', 1);**
  console.log(filteredUsers);
  /*
  Outputs:
  [
    { id: 2, name: 'Alice' }
  ]
  */

  // Find the index of an object based on a specific key-value pair
  **const indexOfBob = users.findIndexByKeyValue('name', 'Bob');**
  console.log(indexOfBob); // Outputs: 2

  // Find an object based on a specific key-value pair
  **const alice = users.findByKeyValue('name', 'Alice');**
  console.log(alice); // Outputs: { id: 2, name: 'Alice' }

  // Find the value of a specific key in an object based on another key-value pair
  **const retrieveAge = people.findValueByKeyValue('name', 'Alice', 'age');**
  console.log(retrieveAge); // Outputs: 30
```
