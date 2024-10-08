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

### 3. Factorial Calculation

Calculates the factorial of a given non-negative integer.

```javascript
function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### 4. Fibonacci Sequence Generator

Generates an array containing the Fibonacci sequence up to n terms.

```javascript
function fibonacci(n) {
  const fibSequence = [];
  if (n >= 1) fibSequence.push(0);
  if (n >= 2) fibSequence.push(1);
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence;
}
```

### 5. Anagram Checker

Checks if two strings are anagrams of each other (case insensitive).

```javascript
ffunction areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
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


