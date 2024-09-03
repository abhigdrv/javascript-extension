# Custom JavaScript Array, String, and Object Extensions

This repository provides a collection of custom extensions for JavaScript's `Array`, `String`, and `Object` prototypes, offering additional utility functions to enhance your development experience.

## Table of Contents

- [Installation](#installation)
- [String Prototype Extensions](#string-prototype-extensions)
- [Array Prototype Extensions](#array-prototype-extensions)
- [Object Prototype Extensions](#object-prototype-extensions)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Include the JavaScript extension script in your project:

```html
<script src="https://cdn.jsdelivr.net/gh/abhigdrv/javascript-extension@1.0.1/js-extension.min.js"></script>
```

## String Prototype Extensions

- `capitalizeFirstLetter()`: Capitalizes the first letter of a string.
- `capitalizeWords()`: Capitalizes the first letter of each word in a string.
- `toCamelCase()`: Converts a string to camel case.
- `isValidEmail()`: Validates if a string is a valid email format.
- `reverse()`: Reverses the string.
- `countOccurrences(substring)`: Counts the occurrences of a substring within the string.
- `removeWhitespace()`: Removes all whitespace from the string.
- `toSnakeCase()`: Converts a string to snake case.
- `truncate(length)`: Truncates the string to a specified length, adding ellipsis if necessary.
- `stripHtml()`: Removes HTML tags from a string.
- `replaceAllOccurrences(search, replacement)`: Replaces all occurrences of a substring with a new value.
- `toKebabCase()`: Converts a string to kebab case.
- `toTitleCase()`: Converts a string to title case.
- `pad(length, char)`: Pads the string to a specified length with a character.
- `startsWithSubstring(substring)`: Checks if the string starts with a specific substring.
- `endsWithSubstring(substring)`: Checks if the string ends with a specific substring.
- `removeSubstring(substring)`: Removes all instances of a substring.
- `toBoolean()`: Converts a string to a boolean.
- `repeatString(times)`: Repeats the string a specified number of times.
- `toPascalCase()`: Converts a string to Pascal case.
- `isPalindrome()`: Checks if the string is a palindrome.
- `toCharArray()`: Converts the string to an array of characters.
- `removeCharacter(char)`: Removes all instances of a character.
- `isDigitOnly()`: Checks if the string contains only digits.
- `toSentenceCase()`: Converts the string to sentence case.
- `getFileExtension()`: Gets the file extension from a string representing a file name.
- `containsAny(substrings)`: Checks if the string contains any of the provided substrings.
- `trimSpaces()`: Trims whitespace from both ends of the string.
- `toLowerCaseString()`: Converts the string to lower case.
- `toUpperCaseString()`: Converts the string to upper case.
- `toSlug()`: Converts the string to a URL-friendly slug.

## Array Prototype Extensions

- `groupBy(callback)`: Groups array elements based on a callback function.
- `groupByKey(keyName)`: Groups array elements by a specific key.
- `distinct()`: Returns an array with distinct elements.
- `distinctByKey(key)`: Returns an array of unique objects based on a specific key.
- `sortBy(callback)`: Sorts the array based on a custom callback function.
- `sortByKey(key)`: Sorts the array of objects based on a specific key.
- `sum(callback)`: Computes the sum of array elements based on a callback function.
- `sumByKey(key)`: Computes the sum of array elements based on a specific key.
- `chunk(size)`: Splits the array into chunks of a specified size.
- `unique()`: Returns an array with unique elements.
- `uniqueByKey(key)`: Returns an array of unique objects based on a specific key.
- `remove(item)`: Removes a specific item from the array.
- `removeByKeyValue(key, value)`: Removes items based on a specific key-value pair.
- `findIndexByKeyValue(key, value)`: Finds the index of an object based on a specific key-value pair.
- `findByKeyValue(key, value)`: Finds an object based on a specific key-value pair.
- `findValueByKeyValue(key, value, retrieveKey)`: Finds the value of a specific key in an object based on another key-value pair.
- `filterByKeyValue(key, value)`: Filters array elements based on a specific key-value pair.
- `deepClone()`: Deeply clones the array.
- `average(callback)`: Computes the average of array elements based on a callback function.
- `averageByKey(key)`: Computes the average of array elements based on a specific key.
- `all(callback)`: Checks if all elements satisfy a callback function.
- `any(callback)`: Checks if any elements satisfy a callback function.
- `max(callback)`: Finds the maximum value based on a callback function.
- `maxByKey(key)`: Finds the maximum value based on a specific key.
- `min(callback)`: Finds the minimum value based on a callback function.
- `minByKey(key)`: Finds the minimum value based on a specific key.
- `compact()`: Removes falsy values from the array.
- `union(array)`: Returns the union of two arrays.
- `intersect(array)`: Returns the intersection of two arrays.
- `difference(array)`: Returns the difference of two arrays.
- `zip(array)`: Zips two arrays together.
- `flatten()`: Flattens a nested array.
- `flattenDepth(depth)`: Flattens a nested array up to a specified depth.
- `reverseCopy()`: Returns a reversed copy of the array.
- `transpose()`: Transposes a 2D array.
- `groupBySize(size)`: Groups array elements by size.
- `nth(n)`: Returns the nth element of the array.
- `isEmpty()`: Checks if the array is empty.
- `isNotEmpty()`: Checks if the array is not empty.

## Object Prototype Extensions

- `merge(source)`: Merges two objects.
- `deepMerge(source)`: Deeply merges two objects.
- `clone()`: Shallowly clones the object.
- `deepClone()`: Deeply clones the object.
- `isEmpty()`: Checks if the object is empty.
- `toQueryString()`: Converts the object to a query string.
- `keys()`: Returns the keys of the object.
- `values()`: Returns the values of the object.
- `entries()`: Returns the entries of the object.
- `hasKey(key)`: Checks if the object has a specific key.
- `hasValue(value)`: Checks if the object has a specific value.
- `map(callback)`: Maps the object based on a callback function.
- `filter(callback)`: Filters the object based on a callback function.
- `reduce(callback, initialValue)`: Reduces the object based on a callback function and an initial value.
- `firstKey()`: Returns the first key of the object.
- `firstValue()`: Returns the first value of the object.
- `lastKey()`: Returns the last key of the object.
- `lastValue()`: Returns the last value of the object.
- `invert()`: Inverts the keys and values of the object.
- `findKeyByValue(value)`: Finds the key based on a value.
- `toMap()`: Converts the object to a Map.
- `toJSONString(space)`: Converts the object to a JSON string with optional spacing.
- `size()`: Returns the size of the object.
- `clear()`: Clears the object.
- `set(key, value)`: Sets a key-value pair in the object.
- `get(key, defaultValue)`: Gets a value based on a key, with an optional default value.
- `remove(key)`: Removes a key-value pair from the object.

## Usage Examples

```javascript
// String Prototype Extensions
console.log("hello world".capitalizeFirstLetter()); // Hello world
console.log("hello world".capitalizeWords()); // Hello World
console.log("hello world".toCamelCase()); // helloWorld
console.log("example@test.com".isValidEmail()); // true
console.log("hello".reverse()); // olleh
console.log("hello world".countOccurrences("o")); // 2
console.log("hello world".removeWhitespace()); // helloworld
console.log("hello world".toSnakeCase()); // hello_world
console.log("hello world".truncate(5)); // hello...
console.log("<p>hello</p>".stripHtml()); // hello
console.log("hello world".replaceAllOccurrences("o", "0")); // hell0 w0rld
console.log("hello world".toKebabCase()); // hello-world
console.log("hello world".toTitleCase()); // Hello World
console.log("hello".pad(10, " ")); // "    hello   "
console.log("hello world".startsWithSubstring("hello")); // true
console.log("hello world".endsWithSubstring("world")); // true
console.log("hello world".removeSubstring("world")); // hello 
console.log("true".toBoolean()); // true
console.log("hello".repeatString(3)); // hellohellohello
console.log("hello world".toPascalCase()); // Hello

World
console.log("madam".isPalindrome()); // true
console.log("hello".toCharArray()); // ['h', 'e', 'l', 'l', 'o']
console.log("hello world".removeCharacter("l")); // heo word
console.log("12345".isDigitOnly()); // true
console.log("hello world".toSentenceCase()); // Hello world
console.log("file.txt".getFileExtension()); // txt
console.log("hello world".containsAny(["hello", "world"])); // true
console.log("  hello  ".trimSpaces()); // hello
console.log("hello".toLowerCaseString()); // hello
console.log("hello".toUpperCaseString()); // HELLO
console.log("Hello World".toSlug()); // hello-world

// Array Prototype Extensions
const arr = [1, 2, 3, 4, 5];
console.log(arr.groupBy(item => item % 2)); // { 0: [2, 4], 1: [1, 3, 5] }
console.log(arr.distinct()); // [1, 2, 3, 4, 5]
console.log(arr.sum()); // 15
console.log(arr.chunk(2)); // [[1, 2], [3, 4], [5]]
console.log(arr.remove(3)); // [1, 2, 4, 5]
console.log(arr.average()); // 3
console.log(arr.max()); // 5
console.log(arr.min()); // 1
console.log(arr.union([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(arr.flatten()); // [1, 2, 3, 4, 5]

// Object Prototype Extensions
const obj = { a: 1, b: 2, c: 3 };
console.log(obj.keys()); // ['a', 'b', 'c']
console.log(obj.values()); // [1, 2, 3]
console.log(obj.entries()); // [['a', 1], ['b', 2], ['c', 3]]
console.log(obj.map((key, value) => [key, value * 2])); // { a: 2, b: 4, c: 6 }
console.log(obj.size()); // 3
console.log(obj.toQueryString()); // a=1&b=2&c=3
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
