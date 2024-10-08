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

### 6. Count Vowels in a String

Counts the number of vowels (both lowercase and uppercase) in a string.

```javascript
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
```

### 7. Count Vowels According to English Grammar

Counts vowels and treats 'y' as a vowel if it's not the first character of a word.

```javascript
function countVowelsAccordingToEnglishGrammar(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  const words = str.split(" ");
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === 'y' || word[i] === 'Y') {
        if (i !== 0) {
          count++;
        }
      }
      if (vowels.includes(word[i])) {
        count++;
      }
    }
  }
  return count;
}
```

### 8. Check for Balanced Parentheses

Checks if a string contains balanced parentheses.

```javascript
function isBalanced(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
```


