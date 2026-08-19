let age = 21;
let choice = 2;
let age = 65;
let x = 1;
let y = 7;
let z = 5;
let n = 2;
let n2 = 8;
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
// You are an adult

if (choice == 1) {
    console.log("choice os 1");
} else if (choice == 2) {
    console.log("choice is 2");
} else {
    console.log("choice is 3");
}
// choice is 2

if (age >= 18) {
    console.log("You are an adult");

    if (age >= 60) {
        console.log("And you are also elderly");
    } else {
        console.log("And you are not elderly");
    }
} else {
    console.log("You are a minor");
}
// You are an adult
// And you are also elderly

if (x == 1 || x == 2) {
    console.log("You typed 1 or 2");
}
// You typed 1 or 2

if (y >= 1 && y <= 10) {
    console.log("You typed 7");
}
// You typed 7

if (!(z != 5)) {
    console.log("Correct, you typed 5");
}
// Correct, you typed 5

if ([1, 2, 3].includes(n)) {
    console.log("You chose 2");
}
// You chose 2

if (![1, 2, 3].includes(n2)) {
    console.log("The number 8 is allowed");
}
// The number 8 is allowed

let message = age2 >= 18 ? "adult" : "minor";

console.log(message); // adult 
    
            