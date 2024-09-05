/**
 * Task-5:
Capitalize Every first Letter of each word in a String
 */

let sentence = 'mango is my favourite fruit.';
let words = sentence.split(' '); // Split the sentence into words

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
        // Capitalize the first letter and combine with the rest of the word
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
}

let capitalizedSentence = words.join(' '); // Join the words back into a sentence
console.log(capitalizedSentence); // Output: "Mango Is My Favourite Fruit."


