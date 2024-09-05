/**
 * Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

 */
let sentence ='X-raY is kinda  extra process';
let updatedString = sentence.split('x').join('y');

updatedString = updatedString.split('X').join('Y');
console.log(updatedString);