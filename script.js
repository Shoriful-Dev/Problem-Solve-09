// Write a Funtion to check if a given string starts with a specific substring.

const startsWith = (str,substr) => {
  return str.toLowerCase().startsWith(substr.toLowerCase());
};

// Example Usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "World")); // Output: false

