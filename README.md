# JavaScript Utility Functions

A collection of basic utility functions implemented in JavaScript for solving common problems such as reversing a string, finding the largest number in an array, calculating factorials, generating Fibonacci sequences, checking for anagrams, counting vowels, and validating balanced parentheses.

## Functions Overview

### 1. Reverse a String

Reverses a given string.

```javascript
function reverseString(str) {
  let reversedStr = ''; 
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```

### 2. Find Largest Number in an Array

Finds the largest number in an array of numbers.

```javascript
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
```
