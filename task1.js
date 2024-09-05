/**
 * Task-1:
Count how many times a string has the letter a
 */

let counter = 'i am a golddigger';
let count =0;
for(let i =0; i<counter.length; i++){
    if(counter[i].toLowerCase() === 'a'){
        count++;
    }
}
console.log('count:', count);
