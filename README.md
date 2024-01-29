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

Include the provided JavaScript code in your project to access these extensions for `String` and `Array` prototypes.

### Example Usage:

```javascript
// Include the JavaScript code here
// Example usage of the provided functions

// Capitalize the first letter of a string
const capitalizedString = "hello".capitalizeFirstLetter();
console.log(capitalizedString); // Outputs: Hello

// Group array of objects by a specific key
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];

const groupedByAge = people.groupByKey('age');
console.log(groupedByAge);
/*
Outputs:
{
  '25': [ { name: 'Bob', age: 25 } ],
  '30': [ { name: 'Alice', age: 30 } ],
  '35': [ { name: 'Charlie', age: 35 } ]
}
*/

// Sort array of objects by a specific key
const sortedByAge = people.sortByKey('age');
console.log(sortedByAge);
/*
Outputs:
[
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
]
*/