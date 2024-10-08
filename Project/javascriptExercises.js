function reverseString(str) {
    let reversedStr = ''; // Initialize an empty string to store the result
  
    // Iterate through the string starting from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]; // Append each character to reversedStr
    }
  
    return reversedStr;
  }

  function findLargest(arr) {
    // Initialize a variable to store the largest number, starting with the first element in the array
    let largest = arr[0];
  
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
      // If the current element is larger than the stored largest, update the largest
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }


  
  function factorial(n) {
    // If n is 0, return 1 because 0! is 1
    if (n === 0) return 1;
  
    let result = 1;
  
    // Loop through numbers from 1 to n and multiply each to result
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }



  function fibonacci(n) {
    // Initialize an array to hold the sequence
    const fibSequence = [];
  
    // Handle the cases where n is 0 or 1
    if (n >= 1) fibSequence.push(0);
    if (n >= 2) fibSequence.push(1);
  
    // Generate the rest of the Fibonacci sequence
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
  
    return fibSequence;
  }


  function areAnagrams(str1, str2) {
    // If the lengths of the strings are not equal, they can't be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort the characters of both strings and compare them
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }


  function countVowels(str) {
    // Define a string containing all vowels (both lowercase and uppercase)
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the character is a vowel, increment the count
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  function countVowelsAccordingToEnglishGrammar(str) {
    // Define the vowels and initialize the count
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    // Split the string into words
    const words = str.split(" ");
  
    // Loop through each word
    for (let word of words) {
      for (let i = 0; i < word.length; i++) {
        // Check if the character is 'y' or 'Y'
        if (word[i] === 'y' || word[i] === 'Y') {
          // Check if it's the first character of the word
          if (i === 0) {
            // Treat 'y' as a consonant if it's the first character
            continue;
          }
          else
          {
            count++;
          }
        }
        // Count the vowel if it's in the vowels string
        if (vowels.includes(word[i])) {
          count++;
        }
      }
    }
  
    return count;
  }

  function isBalanced(str) {
    let stack = [];
  
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      // If the character is an opening parenthesis, push it onto the stack
      if (char === '(') {
        stack.push(char);
      }
      // If the character is a closing parenthesis
      else if (char === ')') {
        // Check if there is a matching opening parenthesis in the stack
        if (stack.length === 0) {
          return false; // Unmatched closing parenthesis
        }
        stack.pop(); // Pop the matching opening parenthesis
      }
    }
  
    // If the stack is empty, all parentheses are balanced
    return stack.length === 0;
  }
  
  
  // Outputs from the functions
  console.log("Hello reversed : ", reverseString("Hello"));
  console.log("Largest number is : ", findLargest([3, 6, 2, 56, 32, 5, 89, 32]));
  console.log("Factorial of 5 : ", factorial(5));
  console.log("Fibonacci sequence : ", fibonacci(8));
  console.log("\"Listen\" and \"Silent\" are anagrams : ", areAnagrams("listen", "silent")); 
  console.log("\"hello\" and \"world\" are anagrams: ", areAnagrams("hello", "world"));
  console.log("\"hello\" and \"hello\" are anagrams: ", areAnagrams("hello", "hello"));
  console.log("Vowels in \"hellOoo world\": ", countVowels("hellOoo world")); 

  console.log("Vowels in \"happy gym\": ", countVowelsAccordingToEnglishGrammar("happy gym")); 
  console.log("Vowels in \"yellow\": ", countVowelsAccordingToEnglishGrammar("yellow")); 
  console.log("Vowels in \"Yatch is great\": ", countVowelsAccordingToEnglishGrammar("Yacht is great")); 
  console.log("Vowels in \"happy gym\": ", countVowelsAccordingToEnglishGrammar("Myth and mystery")); 
  
  console.log("Is (()) balanced : ", isBalanced("(())")); 
  console.log("Is (() balanced : ", isBalanced("(()"));  
  console.log("Is ()() balanced : ", isBalanced("()()"));
  console.log("Is )( balanced : ", isBalanced(")("));
  console.log("Is balanced : ", isBalanced(""));