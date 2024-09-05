/**
 * Task-2:
Count how many times a string has the letter a or A
 */

let counter = 'An apply like BAby small all.';
let count =0;
for(let i =0; i<counter.length; i++){
    if(counter[i].toLowerCase() === 'a'){
        count++;
    }
}
console.log('count:', count);
