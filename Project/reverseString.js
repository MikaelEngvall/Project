function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
 /* Split, reverse and join are methods included in the string object.
.split(''): This converts the input string into an array of characters. For example, "hello" becomes ['h', 'e', 'l', 'l', 'o'].
.reverse(): The reverse() method reverses the order of elements in the array. For example, ['h', 'e', 'l', 'l', 'o'] becomes ['o', 'l', 'l', 'e', 'h'].
.join(''): The join('') method joins the elements of the array back into a single string. So ['o', 'l', 'l', 'e', 'h'] becomes "olleh". 
*/
  

  console.log(reverseString("hello"));
  