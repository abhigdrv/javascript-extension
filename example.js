// Define an array of objects with 'name' and 'age' properties
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Use the sortBy function to sort the array of objects by age
const sortedByAge = people.sortBy((person) => person.age);

console.log(sortedByAge);
