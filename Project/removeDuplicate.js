const numberos = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  const uniqueArray = [];
  const seen = {}; // Object to track seen numbers

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    // Check if the number is already in the 'seen' object
    if (!seen[number]) {
      uniqueArray.push(number); // Add it to the result if it's not a duplicate
      seen[number] = true; // Mark it as seen
    }
  }

  return uniqueArray;
}

const result = removeDuplicates(numberos);
console.log(result); // Output: [1, 2, 3, 4, 5]
