const adultAge = 21;

if (adultAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
// You are an adult

const choice = 2;

if (choice == 1) {
    console.log("choice 1");
} else if (choice == 2) {
    console.log("choice is 2");
} else {
    console.log("choice is 3");
}
// choice is 2

const nestedAge = 65;

if (nestedAge >= 18) {
    console.log("You are an adult");

    if (nestedAge >= 60) {
        console.log("And you are also elderly");
    } else {
        console.log("And you are not elderly");
    }
} else {
    console.log("You are a minor");
}
// You are an adult
// And you are also elderly

const typedNumber = 1;

if (typedNumber == 1 || typedNumber == 2) {
    console.log("You typed 1 or 2");
}
// You typed 1 or 2

const rangeNumber = 7;

if (rangeNumber >= 1 && rangeNumber <= 10) {
    console.log("You typed 7");
}
// You typed 7

const exactNumber = 5;

if (!(exactNumber != 5)) {
    console.log("Correct, you typed 5");
}
// Correct, you typed 5

const includedNumber = 2;

if ([1, 2, 3].includes(includedNumber)) {
    console.log("You chose 2");
}
// You chose 2

const excludedNumber = 8;

if (![1, 2, 3].includes(excludedNumber)) {
    console.log("The number 8 is allowed");
}
// The number 8 is allowed

const ternaryAge = 20;
const message = ternaryAge >= 18 ? "adult" : "minor";

console.log(message); // adult
