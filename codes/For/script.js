const quantity = 3;
const phrases = ["Hello", "JavaScript", "Playground"];

for (let i = 0; i < quantity; i++) {
    console.log(phrases[i]);
}
// Hello
// JavaScript
// Playground

const showCount = 2;

for (let i = 0; i < showCount; i++) {
    console.log(phrases[i]);
}
// Hello
// JavaScript

const numbers = [10, 20, 30];

console.log("All numbers:", numbers.join(", "));
// All numbers: 10, 20, 30

console.log(numbers.join(" + "));
// 10 + 20 + 30

let sum = 0;
for (const num of numbers) {
    sum += num;
}

console.log("=", sum);
// = 60

const values = [10, 20, 30];
let total = 0;

values.forEach(function (num) {
    total += num;
});

console.log(total); // 60
